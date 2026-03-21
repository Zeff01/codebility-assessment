'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

/**
 * QueryProvider
 *
 * Wraps the app with TanStack Query's QueryClientProvider.
 * We create one QueryClient per browser session (not module-level)
 * to avoid sharing state between users in SSR environments.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: 1,
          },
          mutations: {
            retry: 0, // Don't retry mutations — optimistic updates already rolled back on failure
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
