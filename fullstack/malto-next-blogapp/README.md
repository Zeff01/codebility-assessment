Aside from the expected Next.js and React.js tech, I built this project using:

- **TypeScript** - I'm trying to learn TypeScript, so I used it in this project so I can learn more.
- **Tailwind CSS** - This is my go-to framework for styling.
- **DaisyUI** - I used DaisyUI for its pre-built components and tweaked its designs to my liking. This is loaded this via CDN.

I tried to break things down into reusable components like UI components and Screens, such as:

- **NavBar** - The navigation bar at the top with my "nextUP BlogSpot" logo
- **PostCard** - A card component I use to display each post preview
- **Footer** - Just a simple footer with my name and copyright
- **PostsScreen** - The main screen that shows all the posts
- **PostFoundScreen** - What you see when a post exists
- **NoPostFoundScreen** - What you see when a post doesn't exist (I made this separate to keep things clean)

## How I Managed the Data

Right now, I'm storing all my blog post data in one file (`app/data/PostData.ts`). I used TypeScript here to define what a Post data type.
I also made it so posts can have either number IDs (like 1, 2) or UUID strings - I was experimenting with both.

## Notes

- I used the App Router that came with the Next.js default scaffold.
- Dynamic routes use the `[id]` folder structure
- API routes go in the `app/api/` directory
- I used both `.tsx` and `.jsx` files - some things are TypeScript, some are just JavaScript
- Other notes, especially those with respect to the actual instructions, can be seen in other README files within the 'posts' and 'screens' folder.

---

Made by Lanz Alexander Malto
