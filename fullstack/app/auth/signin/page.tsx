"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import AuthForm from "@/components/AuthForm";

interface SignInData {
  email: string;
  password: string;
}

function SignInContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read URL params once to determine initial state
  const callbackError = searchParams.get("error");
  const registered = searchParams.get("registered");

  const [error, setError] = useState<string | null>(
    callbackError ? "Invalid credentials" : null
  );
  const [successMessage, setSuccessMessage] = useState<string | null>(
    registered === "true" ? "Account created successfully! Please sign in." : null
  );

  // Clear success message after 5 seconds (only run once on mount if registered)
  useEffect(() => {
    if (registered === "true") {
      const timer = setTimeout(() => setSuccessMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (data: SignInData) => {
    try {
      setError(null);
      setSuccessMessage(null);

      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      // Check for error - NextAuth v5 bug: ok can be true even with error
      if (result?.error || !result?.ok) {
        setError("Invalid email or password. Please try again.");
        return;
      }

      router.push("/todos");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during sign in"
      );
    }
  };

  return (
    <div className="w-full max-w-md">
      {successMessage && (
        <div className="mb-4 rounded-md bg-green-50 p-3 border border-green-200">
          <p className="text-sm text-green-800">{successMessage}</p>
        </div>
      )}
      <AuthForm
        mode="signin"
        onSubmit={handleSubmit}
        error={error || undefined}
      />
    </div>
  );
}

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-12">
      <Suspense fallback={<div>Loading...</div>}>
        <SignInContent />
      </Suspense>
    </div>
  );
}
