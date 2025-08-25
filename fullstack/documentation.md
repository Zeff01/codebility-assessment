# Fullstack Blog Application Documentation

## Overview

This is a Fullstack Blog Application built with [Next.js](https://nextjs.org). It allows users to view a list of blog posts, read individual posts, and navigate through the application seamlessly.

## Project Structure

- **src/**: Contains the source code for the application.
  - **app/**: Contains the main application files and routing.
    - **api/**: Contains API routes for fetching posts.
    - **posts/**: Contains components and pages related to blog posts.
  - **components/**: Contains reusable components like Header, Posts, and PostItem.
  - **data/**: Contains mock data for posts.
  - **types/**: Contains TypeScript types for data structures.

## Main Components

- **Header**: Displays the title and navigation links.
- **Posts**: Renders a grid of PostItem components.
- **PostItem**: Displays a summary of each post with a link to read more.
- **PostHeader**: Displays the title and metadata of an individual post.
- **PostPage**: Displays the full content of a selected post.

## API Routes

- **GET /api/posts**: Fetches all posts.
- **GET /api/posts?id={id}**: Fetches a single post by ID.

## Data Structure

The posts are structured as follows:

```typescript
export type PostsDataType = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
};
```

## Open Graph Feature

The application implements Open Graph metadata to enhance link previews when shared on social media platforms. This is achieved through the `generateMetadata` function in the `PostPage` component, which dynamically generates Open Graph tags based on the post's content.

### Key Open Graph Tags

- **Title**: The title of the post is used as the Open Graph title.
- **Description**: The excerpt of the post is used as the Open Graph description.
- **Image**: A representative image for the post is included to enhance visual appeal in previews.

This implementation helps improve the visibility and engagement of the blog posts on social media, making the application more SEO-friendly.

## Conclusion

This documentation provides an overview of the Fullstack Blog Application, including setup instructions, project structure, and component descriptions. For further details, refer to the Next.js documentation or the source code.

Authored by Earl Bryan Bura-ay
