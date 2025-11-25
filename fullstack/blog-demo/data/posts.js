export const posts = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        excerpt: "Learn the basics of Next.js and how to create your first app",
        content:
            "Next.js is a React framework that focuses on making web development faster, cleaner, and more efficient. It provides built-in features such as server-side rendering, static site generation, API routes, image optimization, and automatic routing without needing external libraries. By handling many performance and optimization tasks for you, it reduces the amount of configuration required compared to plain React. When you begin working with Next.js, one of the first things you’ll notice is how the folder structure influences routing and how easy it is to create new pages by simply adding files inside the app directory.\n\nBeyond the basics, Next.js encourages developers to adopt modern best practices such as modular components, scalable layouts, and predictable data-fetching methods. Its hybrid rendering model lets you choose the best strategy for each page—static, dynamic, or server-rendered—giving you full control over performance. As you grow more comfortable with the framework, you’ll find that it not only speeds up development but also leads to highly optimized, production-ready applications.",
        date: "2025-04-15",
    },
    {
        id: 2,
        title: "Styling in Next.js",
        excerpt: "Different ways to style your Next.js application",
        content:
            "Next.js supports several styling approaches, allowing developers to choose the method that best fits their workflow. CSS Modules provide locally scoped styles, which help prevent naming conflicts and maintain cleaner code. Tailwind CSS, another popular option, offers a utility-first system that allows rapid prototyping and consistent styling across the entire project. Developers who prefer dynamic or conditional styling can also use CSS-in-JS solutions such as styled-components, Emotion, or even vanilla inline styles when needed. The flexibility of Next.js ensures that your styling choices integrate smoothly without additional configuration.\n\nAs projects grow in complexity, selecting the right styling approach becomes increasingly important. Utility frameworks like Tailwind excel in large-scale applications due to their consistency and reusable classes, while CSS Modules are ideal when you want clear separation of concerns. Global stylesheets also remain perfectly valid for broad design themes, fonts, and resets. No matter which method you use, Next.js provides an environment where styling stays organized, scalable, and efficient.",
        date: "2025-04-16",
    },
    {
        id: 3,
        title: "Understanding Next.js Routing",
        excerpt: "How pages and folders automatically become routes",
        content:
            "Next.js uses a convention-based routing system where every file inside the app directory automatically becomes a route. This approach completely removes the need for third-party routing libraries and reduces boilerplate code. Nested folders represent nested routes, making it easy to create hierarchical page structures like dashboards, profiles, or blog categories. Dynamic routes, represented with square brackets such as `[id]`, allow pages to receive URL parameters seamlessly, making them perfect for blog posts, products, and user profiles. This system is intuitive and makes navigation extremely straightforward.\n\nNext.js routing also integrates with advanced features such as server components, layouts, templates, and loading states. Layout files let you define UI structures that persist across pages, while loading and error files provide built-in ways to handle fetch delays or route mistakes. These additions make routing not only functional but also expressive and maintainable. Once you understand how Next.js maps files to URLs, you gain full control over how a user moves through your application, enabling smoother and more organized development.",
        date: "2025-04-17",
    },
    {
        id: 4,
        title: "Data Fetching in Next.js",
        excerpt: "Learn different ways to fetch data",
        content:
            "Next.js offers multiple data-fetching strategies depending on your needs—static generation, server-side rendering, client-side fetching, and server components. Static generation uses build-time fetching, which is ideal for blogs and pages that don’t change often. Server-side rendering fetches data on every request, perfect for pages that must always be up-to-date. Client-side fetching with useEffect keeps your UI interactive and responsive, especially for dashboards or data refreshed in real time. Meanwhile, server components allow you to fetch data directly on the server without shipping unnecessary JavaScript to the client, which improves performance significantly.\n\nChoosing the correct data-fetching method depends on your app’s requirements. If performance and SEO are priorities, static generation is the best choice. For personalized or dynamic content, server-side rendering or API route fetching is more appropriate. By understanding how each method works, you can build applications that are fast, scalable, and optimized for both users and developers. Next.js gives you the tools to handle everything from simple blog posts to complex data-driven systems with ease.",
        date: "2025-04-18",
    },
];
