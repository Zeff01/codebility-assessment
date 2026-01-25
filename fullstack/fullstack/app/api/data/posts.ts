// export const posts = [
//   {
//     id: 1,
//     title: "Getting Started with Next.js: A Comprehensive Beginner’s Guide to Modern Web Development",
//     excerpt:
//       "Next.js is a powerful React framework that allows you to build server-side rendered and statically generated web applications with ease. In this guide, we will walk you through the core concepts, installation, and building your very first Next.js app from scratch.",
//     content: `Next.js is a React framework that enables server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR). This makes your applications fast, SEO-friendly, and optimized for performance.

// In this tutorial, we will cover:

// 1. Installing Next.js and setting up your project
// 2. Understanding Pages and Routing
// 3. Components and Layouts
// 4. Fetching Data with Server and Client Components
// 5. Styling with CSS Modules and Tailwind CSS
// 6. Deployment strategies

// By the end of this guide, you'll have a fully functional Next.js app with dynamic routing, a blog-like structure, and modern styling. The concepts here will form the foundation for more advanced features like authentication, API routes, and real-time data fetching.`,
//     date: "2025-04-15",
//   },
//   {
//     id: 2,
//     title: "Styling in Next.js: From CSS Modules to Tailwind CSS",
//     excerpt:
//       "Learn multiple ways to style your Next.js app and best practices for maintainable UI design.",
//     content: `Next.js supports multiple styling methods including:

// - Global CSS
// - CSS Modules (scoped styles)
// - Tailwind CSS (utility-first)
// - Styled Components

// Each approach has its own advantages. Global CSS is simple for small projects but can cause conflicts in larger apps. CSS Modules allow for scoped styles, preventing class name collisions. Tailwind CSS provides rapid development with a utility-first approach, allowing consistent spacing, typography, and colors.

// We'll also cover:

// 1. Creating responsive layouts
// 2. Dark mode implementation
// 3. Best practices for component reusability
// 4. Avoiding style conflicts across pages

// By mastering these techniques, you'll be able to create visually appealing and maintainable applications with consistent styling patterns.`,
//     date: "2025-04-16",
//   },
//   {
//     id: 3,
//     title: "Routing in Next.js Explained: File-Based and Dynamic Routes",
//     excerpt:
//       "Understand how Next.js generates static and dynamic routes for your application.",
//     content: `Next.js uses a file-based routing system where each file in the pages or app directory corresponds to a route.

// Key concepts:

// 1. Static routes: pages/about.tsx becomes /about
// 2. Dynamic routes: [id].tsx can generate /posts/1, /posts/2, etc.
// 3. Catch-all routes: [...slug].tsx handles multiple path segments

// Dynamic routes are useful for blogs, e-commerce products, and user profiles. You can fetch data using server components to generate content dynamically.

// Additionally, Next.js supports nested routes via folder structure. Combining this with layouts and components, you can build scalable web applications with a clean URL structure.`,
//     date: "2025-04-18",
//   },
//   {
//     id: 4,
//     title: "Fetching Data in Next.js: Server vs Client Components",
//     excerpt:
//       "Next.js provides powerful data fetching options. Learn when to fetch on the server and when to fetch on the client for optimal performance.",
//     content: `Next.js introduces Server Components, which allow you to fetch data directly on the server without sending unnecessary JavaScript to the client. Client Components are ideal for interactivity, state, and event handling.

// Key points:

// - Server Components reduce bundle size and improve SEO.
// - Client Components allow dynamic behavior and interactivity.
// - You can mix both to optimize performance.

// We'll also cover fetching from external APIs, handling errors, and displaying loading states to create smooth and responsive applications.`,
//     date: "2025-04-20",
//   },
//   {
//     id: 5,
//     title: "API Routes in Next.js: Build Full-Stack Features",
//     excerpt:
//       "With Next.js API routes, you can write backend logic inside your project. Learn how to handle GET, POST, and more to create full-stack applications.",
//     content: `API routes in Next.js allow you to handle backend logic such as database queries, authentication, and custom endpoints. You can define routes inside pages/api or app/api.

// Topics covered:

// 1. Creating a simple GET endpoint
// 2. Handling POST requests
// 3. Returning JSON responses
// 4. Connecting to databases
// 5. Securing API routes

// This enables you to build full-stack features like blogs, e-commerce carts, and user authentication without leaving the Next.js ecosystem. It’s perfect for small to medium projects where you want a unified frontend and backend.`,
//     date: "2025-04-22",
//   },
//   {
//     id: 6,
//     title: "Next.js and TypeScript: Strongly Typed React Apps",
//     excerpt:
//       "Integrating TypeScript into your Next.js project helps prevent bugs, improve IDE support, and enforce type safety.",
//     content: `TypeScript is a superset of JavaScript that adds static typing to your code. When combined with Next.js, you can:

// - Catch errors at compile time
// - Enjoy better autocompletion in editors
// - Create safer and more maintainable code

// We'll walk through setting up tsconfig.json, converting existing components, and using types for props, API responses, and state management. Using TypeScript is highly recommended for production-grade applications and team collaboration.`,
//     date: "2025-04-24",
//   },
//   {
//     id: 7,
//     title: "Optimizing Images in Next.js: Faster and Smarter",
//     excerpt:
//       "Images can slow down websites. Next.js Image component provides automatic optimization, lazy loading, and modern formats for better performance.",
//     content: `Next.js provides an Image component that optimizes images automatically. Features include:

// - Lazy loading
// - WebP and AVIF support
// - Responsive sizing
// - Automatic caching

// Optimizing images improves page speed, SEO, and user experience. We'll also cover integrating third-party image services and tips for compressing images without losing quality.`,
//     date: "2025-04-26",
//   },
//   {
//     id: 8,
//     title: "Deployment of Next.js Apps: From Local to Production",
//     excerpt:
//       "Learn how to deploy your Next.js app using Vercel, Netlify, or a custom Node.js server for production-ready websites.",
//     content: `Deployment is a critical step in building web apps. Next.js supports multiple deployment options:

// 1. Vercel: Official platform with zero configuration
// 2. Netlify: Easy continuous deployment
// 3. Custom server: Node.js or Docker for full control

// We will also discuss environmental variables, build optimization, and best practices for maintaining uptime and performance in production.`,
//     date: "2025-04-28",
//   },
//   {
//     id: 9,
//     title: "Next.js Middleware: Powerful Edge Logic",
//     excerpt:
//       "Middleware runs code before a request is completed, allowing you to perform authentication, redirects, and header manipulation on the Edge.",
//     content: `Next.js Middleware enables running code before requests are finalized. It runs on the Edge, which ensures low latency.

// Use cases:

// - Authentication and authorization
// - Redirects based on user role
// - Adding custom headers or cookies
// - Analytics tracking

// Middleware allows you to enforce policies and control request flows efficiently, keeping your app secure and performant.`,
//     date: "2025-04-30",
//   },
//   {
//     id: 10,
//     title: "Incremental Static Regeneration (ISR) in Next.js",
//     excerpt:
//       "ISR lets you update static pages after build time without rebuilding the entire site, perfect for dynamic content like blogs or e-commerce.",
//     content: `Incremental Static Regeneration allows you to update static pages at runtime. Features include:

// - Revalidate pages after a certain time
// - Keep content fresh without redeploying
// - Combine static and dynamic content seamlessly
// - Improve performance and reduce server load

// We'll explore examples like blog posts, product catalogs, and frequently updated landing pages. ISR is one of the most powerful features of Next.js for modern web apps.`,
//     date: "2025-05-02",
//   },
// ]


export const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js: A Comprehensive Beginner’s Guide to Modern Web Development",
    excerpt:
      "Next.js is a powerful React framework that allows you to build server-side rendered and statically generated web applications with ease. In this guide, we will walk you through the core concepts, installation, and building your very first Next.js app from scratch.",
    content: `Next.js is a React framework that enables server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR). This makes your applications fast, SEO-friendly, and optimized for performance.

In this tutorial, we will cover:

1. Installing Next.js and setting up your project
2. Understanding Pages and Routing
3. Components and Layouts
4. Fetching Data with Server and Client Components
5. Styling with CSS Modules and Tailwind CSS
6. Deployment strategies

By the end of this guide, you'll have a fully functional Next.js app with dynamic routing, a blog-like structure, and modern styling. The concepts here will form the foundation for more advanced features like authentication, API routes, and real-time data fetching.`,
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js: From CSS Modules to Tailwind CSS",
    excerpt:
      "Learn multiple ways to style your Next.js app and best practices for maintainable UI design.",
    content: `Next.js supports multiple styling methods including:

- Global CSS
- CSS Modules (scoped styles)
- Tailwind CSS (utility-first)
- Styled Components

Each approach has its own advantages. Global CSS is simple for small projects but can cause conflicts in larger apps. CSS Modules allow for scoped styles, preventing class name collisions. Tailwind CSS provides rapid development with a utility-first approach, allowing consistent spacing, typography, and colors.

We'll also cover:

1. Creating responsive layouts
2. Dark mode implementation
3. Best practices for component reusability
4. Avoiding style conflicts across pages

By mastering these techniques, you'll be able to create visually appealing and maintainable applications with consistent styling patterns.`,
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Routing in Next.js Explained: File-Based and Dynamic Routes",
    excerpt:
      "Understand how Next.js generates static and dynamic routes for your application.",
    content: `Next.js uses a file-based routing system where each file in the pages or app directory corresponds to a route.

Key concepts:

1. Static routes: pages/about.tsx becomes /about
2. Dynamic routes: [id].tsx can generate /posts/1, /posts/2, etc.
3. Catch-all routes: [...slug].tsx handles multiple path segments

Dynamic routes are useful for blogs, e-commerce products, and user profiles. You can fetch data using server components to generate content dynamically.

Additionally, Next.js supports nested routes via folder structure. Combining this with layouts and components, you can build scalable web applications with a clean URL structure.`,
    date: "2025-04-18",
  },
  {
    id: 4,
    title: "From Internship to Full-Time Developer: My Career Journey",
    excerpt:
      "A story about transitioning from an internship to a full-time role in tech and what I learned along the way.",
    content: `Landing my first internship in web development was thrilling but also scary. I felt unprepared, even though I had spent months learning on my own.

During the internship, I focused on:

1. Understanding the company’s codebase.
2. Asking questions about architecture and best practices.
3. Observing senior developers and learning their workflow.

After 3 months, I was offered a full-time position. The key lessons from this journey were:

- Soft skills are as important as coding skills.
- Being proactive and asking for feedback accelerates learning.
- Networking within the company helps you understand the culture and expectations.

This experience taught me that growth in tech is both about technical proficiency and personal development. Balancing learning, communication, and initiative is crucial for long-term success.`,
    date: "2025-04-20",
  },
  {
    id: 5,
    title: "Building My First Full-Stack Application with Next.js and Node",
    excerpt:
      "A practical tutorial-style story of building a full-stack app, from planning to deployment.",
    content: `I wanted to build a full-stack application to solidify my understanding of modern web development. I chose Next.js for the frontend and Node.js with Express for the backend.

Steps I followed:

1. **Planning:** I created a wireframe and list of features.
2. **Backend setup:** Node.js server, REST API endpoints, and database connection using MongoDB.
3. **Frontend setup:** Next.js pages, dynamic routing, and fetching data from the API.
4. **Authentication:** Implemented JWT-based login and session handling.
5. **Styling:** Used Tailwind CSS for a clean and responsive UI.
6. **Deployment:** Deployed backend on Heroku and frontend on Vercel.

The project taught me how the frontend and backend communicate, how to structure projects, and how to handle errors gracefully. By completing the project, I gained confidence to build and deploy more complex applications.`,
    date: "2025-04-22",
  },
  {
    id: 6,
    title: "Remote Work as a Junior Developer: Challenges and Tips",
    excerpt:
      "Sharing my experience working remotely as a junior developer and advice for staying productive and learning effectively.",
    content: `Working remotely as a junior developer came with unique challenges. At first, I felt isolated and struggled to ask questions without face-to-face interaction.

I developed strategies to overcome these challenges:

- **Daily Standups:** Helps maintain visibility and accountability.
- **Time Blocking:** Keeps focused and prevents burnout.
- **Asking Questions:** Use Slack or Zoom; don’t be afraid to ask for help.
- **Documentation:** Maintain notes of solutions and workflows for future reference.

Remote work also taught me to be proactive in communication, take initiative, and manage time effectively. Over time, I became more confident, independent, and productive, and I realized remote work can actually accelerate learning when approached intentionally.`,
    date: "2025-04-24",
  },
  {
    id: 7,
    title: "Lessons Learned from Debugging a Complex React Application",
    excerpt:
      "A story about the challenges I faced debugging a React app and the problem-solving strategies I used.",
    content: `Debugging a complex React application taught me patience and systematic problem-solving.

The app had multiple nested components, state management with Redux, and API calls to various endpoints. I encountered several issues:

1. **State bugs:** Components not updating as expected.
2. **Async data loading:** Race conditions causing inconsistent UI.
3. **CSS conflicts:** Styling breaking due to nested selectors.

To tackle these problems, I:

- Used console logging and React DevTools extensively.
- Broke components into smaller, testable units.
- Implemented proper error handling and loading states.
- Added unit tests to catch edge cases.

By the end, I realized that debugging is as much about thinking logically as it is about knowing tools. The experience improved my confidence in tackling large projects and complex applications.`,
    date: "2025-04-26",
  },
  {
    id: 8,
    title: "Learning DevOps as a Frontend Developer",
    excerpt:
      "How I expanded my skill set to include DevOps concepts while primarily working as a frontend developer.",
    content: `While working as a frontend developer, I noticed many deployment and scaling issues. To improve my understanding, I began exploring DevOps practices.

Key areas I focused on:

- **Version Control:** Git workflows and branching strategies.
- **CI/CD:** Setting up pipelines for automatic testing and deployment.
- **Containerization:** Using Docker for consistent development environments.
- **Monitoring:** Tools like Grafana and Sentry for error tracking and performance metrics.

Learning DevOps allowed me to see the bigger picture of how frontend and backend work together in production. It also helped me communicate better with backend and operations teams, improving collaboration and efficiency.`,
    date: "2025-04-28",
  },
  {
    id: 9,
    title: "My Experience Attending a Hackathon as a Developer",
    excerpt:
      "Attending a hackathon taught me lessons about teamwork, creativity, and rapid development in tech.",
    content: `I attended my first hackathon with a small team of developers, designers, and product enthusiasts. The goal was to build a working prototype within 48 hours.

Key takeaways:

- **Teamwork:** Delegating tasks effectively is crucial.
- **Rapid Prototyping:** Focus on functionality, not perfection.
- **Creative Problem Solving:** Often unconventional solutions worked best.
- **Presentation Skills:** Clear storytelling is as important as code.

We ended up winning a small prize, but the real value was the experience. Hackathons teach you to work under pressure, iterate quickly, and communicate clearly. I highly recommend attending at least one to any aspiring developer.`,
    date: "2025-04-30",
  },
  {
    id: 10,
    title: "Balancing Learning and Mental Health as a Developer",
    excerpt:
      "Advice and personal reflections on maintaining mental health while learning and working in tech.",
    content: `The tech industry can be fast-paced and demanding. As I transitioned from learning to working full-time, I noticed stress and burnout creeping in.

Some strategies that helped me:

1. **Set realistic goals:** Avoid trying to learn everything at once.
2. **Take breaks:** Step away from the screen regularly.
3. **Exercise:** Physical activity improves focus and reduces stress.
4. **Community support:** Connect with peers who understand the challenges.
5. **Reflect:** Maintain a journal of progress, setbacks, and solutions.

Balancing mental health with learning and work ensures sustainability in a career in tech. Understanding your limits, pacing yourself, and asking for support are essential for long-term growth and happiness.`,
    date: "2025-05-02",
  },
];
