"use client";

import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { StoreProvider } from "@/store";
import { Toast } from "@/components/ui";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <StoreProvider>
        {children}
        <Toast />
      </StoreProvider>
    </AuthProvider>
  );
}
