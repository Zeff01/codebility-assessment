import express from "express";
import todoRoutes from "./routes";

const app = express();
const PORT = process.env.PORT || 4000;

/**
 * RUN COMMANDS
 * @Development: npm run dev
 * @Production: npm run build
 *              npm start
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CRUD routes
app.use("/api", todoRoutes);

// Basic route
app.get("/", (req, res) => res.send("Hello from Express!"));

// 404
app.use((req, res) => res.status(404).json({ message: "Page Not Found" }));

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
