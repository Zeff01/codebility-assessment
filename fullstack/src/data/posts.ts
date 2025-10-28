export interface Posts {
    id: number
    title: string
    excerpt: string
    content: string
    date: string
}

export const posts: Posts[] = [
    {
        id: 1,
        title: 'Getting Started with Next.js',
        excerpt: 'Learn the basics of Next.js and how to create your first app',
        content:
            'Next.js is a React framework that enables server-side rendering and generating static websites...',
        date: '2025-04-15'
    },
    {
        id: 2,
        title: 'Styling in Next.js',
        excerpt: 'Different ways to style your Next.js application',
        content:
            'There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS...',
        date: '2025-04-16'
    },
    // Add 1-2 more posts
    {
        id: 3,
        title: 'Post 3',
        excerpt: 'Post 3',
        content: 'Post 3',
        date: '2025-10-28'
    },
    {
        id: 4,
        title: 'Post 4',
        excerpt: 'Post 4',
        content: 'Post 4',
        date: '2025-10-28'
    }
]
