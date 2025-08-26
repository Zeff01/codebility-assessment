const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;


// Import posts data from the fullstack-assessment project
const path = require("path");
const fs = require("fs");

// Helper to load posts from the TypeScript file
function getPosts() {
  const postsPath = path.join(__dirname, "../fullstack/fullstack-assessment/data/posts.ts");
  const fileContent = fs.readFileSync(postsPath, "utf-8");
  // Extract the posts array from the file (simple regex, not a TS parser)
  const match = fileContent.match(/export const posts = (\[[\s\S]*?\]);/);
  if (match) {
    // eslint-disable-next-line no-eval
    return eval(match[1]);
  }
  return [];
}

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Route to get all posts
app.get("/posts", (req, res) => {
  const posts = getPosts();
  res.json(posts);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
