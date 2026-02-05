
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites...",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS...",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Server vs Client Components",
    excerpt: "Understanding the difference between Server and Client Components",
    content: "React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, all components are Server Components by default. Client components are opted into using the 'use client' directive, which allows you to use state, effects, and event listeners.",
    date: "2025-04-18",
  },
  {
    id: 4,
    title: "The Power of API Routes",
    excerpt: "Building backend functionality directly in your frontend app",
    content: "Next.js API routes provide a solution to build your API with Next.js. Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page. This allows you to easily create backend endpoints for your application without needing a separate server.",
    date: "2025-04-20",
  },
  {
    id: 5,
    title: "Next.js 14: What's New",
    excerpt: "Explore the latest features in Next.js 14 including Server Actions, Partial Prerendering, and improved performance.",
    content: `Next.js 14 brings exciting new features that make building React applications faster and easier.

**Server Actions** are now stable, allowing you to write server-side code directly in your components. This simplifies data mutations without needing separate API routes.

**Partial Prerendering (PPR)** is an experimental feature that combines static and dynamic rendering for optimal performance. Pages load instantly with static content while dynamic parts stream in.

**Turbopack improvements** continue with better HMR (Hot Module Replacement) and faster builds for larger projects. While still in beta, it shows significant speed improvements over Webpack.

**Better TypeScript support** with automatic type generation for your API routes and improved IntelliSense in development.

To upgrade: \`npm i next@latest react@latest react-dom@latest\`

The framework continues to focus on developer experience while pushing the boundaries of what's possible with React.`,
    date: "2025-04-15",
  },
  {
    id: 6,
    title: "Authentication in Next.js",
    excerpt: "Implement secure authentication using NextAuth.js with various providers and session management.",
    content: `NextAuth.js is the most popular authentication solution for Next.js. It supports multiple providers and is easy to set up.

**Basic setup**:
\`\`\`typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
});

export { handler as GET, handler as POST };
\`\`\`

**Protecting pages** with middleware:
\`\`\`typescript
// middleware.ts
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*']
};
\`\`\`

**Accessing session** in components:
\`\`\`typescript
'use client';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();
  
  if (!session) return <p>Not signed in</p>;
  
  return <p>Welcome {session.user?.name}</p>;
}
\`\`\`

**Additional providers** include GitHub, Facebook, Email, and custom OAuth.`,
    date: "2025-04-18",
  },
  {
    id: 7,
    title: "State Management in Modern React Applications",
    excerpt: "Comparing solutions like Zustand, Redux Toolkit, Context API, and React Query for different use cases",
    content: `Choosing the right state management solution depends on your application's complexity and requirements.

**For Simple State (Context API):**
\`\`\`typescript
// Context provider for theme
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

**For Complex State (Zustand):**
Zustand offers a minimal API with great TypeScript support:
\`\`\`typescript
import { create } from 'zustand';

interface Store {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
\`\`\`

**For Server State (React Query / TanStack Query):**
\`\`\`typescript
import { useQuery, useMutation } from '@tanstack/react-query';

function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/posts').then(res => res.json()),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const mutation = useMutation({
    mutationFn: (newPost) => 
      fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
      }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}
\`\`\`

**Performance Considerations:**
1. Use React.memo() for expensive components
2. Implement useMemo() and useCallback() for heavy computations
3. Consider state colocation (keep state close to where it's used)
4. Use Zustand's selectors for optimized re-renders
5. Implement optimistic updates for better UX

**Testing State:**
Always write tests for your state logic:
\`\`\`typescript
test('increment increases count by 1', () => {
  const store = createCounterStore();
  store.increment();
  expect(store.getState().count).toBe(1);
});
\`\`\``,
    date: "2025-04-20",
  },


];