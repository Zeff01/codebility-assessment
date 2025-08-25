'use client'

import BackgroundDesign from "@/components/BackgroundDesign";
import RegisterForm     from "@/components/RegisterForm";
import DialogBox        from "@/components/ui/Dialogbox";
import { useState }     from "react";
import { useRouter }    from "next/navigation";
import { signIn }       from "next-auth/react";

export default function Home() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();

    async function handleSubmit(email: string, password: string) {
        setIsSubmitting(true);
        setError(false);

        try {
            const res = await fetch("/api/user/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (!res.ok) {
                setError(true);
                setErrorMessage(data.error || "Something went wrong");
            } else {
                const loginRes = await signIn("credentials", {
                    redirect: false,
                    email,
                    password,
                });

                if (loginRes?.error) {
                    setError(true);
                    setErrorMessage(loginRes.error);
                } else {
                    router.push("/todo");
                }
            }
        } catch (err) {
            setError(true);
            setErrorMessage( `Something went wrong: ${err}` );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <BackgroundDesign>
            <RegisterForm
                isSubmitting={isSubmitting}
                onSubmit={handleSubmit}
            />

            <DialogBox
                isOpen={error}
                onClose={() => setError(false)}
                title="Registration Failed"
                message={errorMessage}
            />
        </BackgroundDesign>
    );
}
