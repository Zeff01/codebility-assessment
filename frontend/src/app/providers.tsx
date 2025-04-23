import { QueryProvider } from "@/providers/query-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  /* You can add other providers here */
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  )
}
