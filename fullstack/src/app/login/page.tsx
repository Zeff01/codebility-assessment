'use client'

import BackgroundDesign from "@/components/BackgroundDesign";
import LoginForm from "@/components/LoginForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import DialogBox from "@/components/ui/Dialogbox";

export default function Home() {
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [loginError, setLoginError]   = useState(false);
    const router = useRouter();

    async function handleSubmit(email: string, password: string) {
        setIsSubmiting(true);
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (res?.error) {
                setLoginError(true);
            } else {
                router.push("/todo");
            }

            setIsSubmiting(false);
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }

    return (
        <BackgroundDesign>
            <LoginForm
                onSubmit={handleSubmit}
                isSubmitting={isSubmiting}
            />

            <DialogBox
                isOpen={loginError}
                onClose={() => setLoginError(false)}
                title="Invalid Credentials"
                message="Invalid email or password. Please try again."
            />
        </BackgroundDesign>
    )
}
