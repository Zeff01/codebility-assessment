import { Post } from "../types";

export const posts: Post[] = [
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
		title: "Migrating from NodeJS to Bun",
		excerpt: "Utilizing a new JavaScript runtime",
		content:
			"Bun is a strong drop-in competitior to NodeJS, offering various features such as...",
		date: "2025-04-17",
	},
	{
		id: 4,
		title: "React vs. Vue",
		excerpt: "A comparison between two popular JavaScript frameworks",
		content:
			"A battle amonst various Software Developers, which framework offers the best quality of life?",
		date: "2025-04-18",
	},
];
