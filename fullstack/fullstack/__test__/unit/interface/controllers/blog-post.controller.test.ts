import { blogPost } from "@/interface/controllers"
import {expect, it, describe} from '@jest/globals';

describe("Test Blog Post Controller", () => {
   it("Should return blog posts data for home page", async() => {
      const data = [
         {
           id: 1,
           title: "Getting Started with Next.js",
           excerpt: "Learn the basics of Next.js and how to create your first app",
         },
         {
           id: 2,
           title: "Styling in Next.js",
           excerpt: "Different ways to style your Next.js application",
         },
         {
           id: 3,
           title: "Automate with Bash Script",
           excerpt: "Why it's better to use Bash scripts than manually typing in the terminal",
         },
         {
           id: 4,
           title: "Deploying a Next.js App",
           excerpt: "How to deploy your Next.js project to Vercel or other platforms",
         },
       ];

      const blogPostData = await blogPost.getBlogPosts();

      expect(blogPostData).toEqual(data);
   })

   it("Should return blog post from id", async() => {
      const data = 
      {
         id: 1,
         title: "Getting Started with Next.js",
         excerpt: "Learn the basics of Next.js and how to create your first app",
         content: 'Next.js is a React framework that enables server-side rendering and generating static websites for React-based web applications. It offers built-in routing, file-system based pages, and automatic code splitting for performance. To get started, install Next.js via `npx create-next-app` and begin building your pages inside the `pages` directory. You can use `getServerSideProps`, `getStaticProps`, and API routes to control data fetching.',
         date: '2025-04-15'
      }

      const blogPostData = await blogPost.getBlogPostById(1);

      expect(blogPostData).toEqual(data);
   })

   it("Should return null form blog post from undefined id", async() => {
      const blogPostData = await blogPost.getBlogPostById(NaN);

      expect(blogPostData).toEqual(null);
   })
})