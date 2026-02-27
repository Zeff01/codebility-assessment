"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface AuthFormProps {
  mode: "signin" | "signup";
  onSubmit?: (data: SignInData | SignUpData) => Promise<void>;
  error?: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData extends SignInData {
  name: string;
}

export default function AuthForm({ mode, onSubmit, error }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(error || null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  // Sync error prop with formError state
  useEffect(() => {
    setFormError(error || null);
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    // Validate required fields
    if (!formData.email || !formData.password) {
      setFormError("Email and password are required");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address");
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setFormError("Password must be at least 6 characters");
      return;
    }

    // Validate name for signup
    if (mode === "signup" && !formData.name.trim()) {
      setFormError("Name is required");
      return;
    }

    setIsLoading(true);

    try {
      if (onSubmit) {
        const submitData =
          mode === "signin"
            ? { email: formData.email, password: formData.password }
            : {
                email: formData.email,
                password: formData.password,
                name: formData.name,
              };

        await onSubmit(submitData as SignInData | SignUpData);
      }
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : "An error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const isSignIn = mode === "signin";
  const title = isSignIn ? "Sign In" : "Sign Up";
  const submitButtonText = isSignIn ? "Sign In" : "Sign Up";
  const toggleLinkText = isSignIn ? "Sign Up" : "Sign In";
  const toggleLinkHref = isSignIn ? "/auth/signup" : "/auth/signin";

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {isSignIn
            ? "Enter your credentials to sign in"
            : "Create a new account to get started"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {formError && (
            <div className="rounded-md bg-destructive/10 p-3 border border-destructive/20">
              <p className="text-sm font-medium text-destructive">{formError}</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>

          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              required
              minLength={6}
            />
            {mode === "signup" && (
              <p className="text-xs text-muted-foreground">
                Must be at least 6 characters
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {submitButtonText}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
          </span>
          <Link
            href={toggleLinkHref}
            className="font-medium text-primary hover:underline"
          >
            {toggleLinkText}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
