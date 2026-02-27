"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthForm from "@/components/AuthForm";

interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (data: SignUpData | { email: string; password: string }) => {
    try {
      setError(null);
      setSuccess(false);

      // Type guard to ensure we have SignUpData
      if (!("name" in data)) {
        setError("Name is required");
        return;
      }

      // Client-side validation (redundant with AuthForm but kept for safety)
      if (data.password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Failed to create account");
        return;
      }

      // Show success and redirect
      setSuccess(true);
      setTimeout(() => {
        router.push("/auth/signin?registered=true");
      }, 1500);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during sign up"
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-12">
      {success ? (
        <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md">
          <div className="mb-4 text-green-600">
            <svg
              className="mx-auto h-16 w-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold">Account Created!</h2>
          <p className="text-muted-foreground">
            Redirecting you to sign in...
          </p>
        </div>
      ) : (
        <AuthForm
          mode="signup"
          onSubmit={handleSubmit}
          error={error || undefined}
        />
      )}
    </div>
  );
}
