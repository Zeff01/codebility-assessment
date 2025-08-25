import { getServerSession, Session } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions }  from "../../auth/[...nextauth]/route";

/** Get the user current session or return a next response to tell the 
 * user that he/she does not have access to the route
 */
export default async function GetUserSessionOrError(): Promise<Session | NextResponse> {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user?.email) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }
        return session;
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "Internal Server Error",
                message: error.message || "Something went wrong",
            },
            { status: 500 }
        );
    }
}
