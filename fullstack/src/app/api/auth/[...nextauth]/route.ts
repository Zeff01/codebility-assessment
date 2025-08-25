import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { db }    from "@/db";
import { users } from "@/db/schema";
import { eq }    from "drizzle-orm";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing email or password");
                }

            //find the user if he/she is registered in the email
                const result = await db
                    .select()
                    .from(users)
                    .where(eq(users.email, credentials.email));

                const user = result[0];
                if (!user) throw new Error("No user found");

                const isValid = await compare(credentials.password, user.password);
                if (!isValid) throw new Error("Invalid password");

                return {
                    id:    String(user.id),
                    email: user.email,
                    role: "user",
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.email = token.email as string;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
