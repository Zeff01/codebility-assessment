.                            # Root directory
├── data/
│   └── posts.js             # Contains blog post data (likely a static array or mock DB)
├── pages/
│   ├── index.jsx            # Home page that lists all blog posts
│   └── posts/
│       └── [id].jsx         # Dynamic route to render individual blog posts by ID
│   └── api/
│       └── posts/
│           ├── index.js     # API route to fetch all posts (GET /api/posts)
│           └── [id].js      # API route to fetch single post by ID (GET /api/posts/:id)
├── styles/
│   └── globals.css          # Tailwind CSS base and custom global styles