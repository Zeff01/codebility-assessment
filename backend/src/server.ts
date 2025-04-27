import express, { Express, Request, Response } from "express";
import todoRoutes from "./routes/todoRoutes";
import { errorHandler } from "./utils/errorHandler";

const PORT = process.env.PORT || 4000;


const app = express();

app.use(express.json())

app.use('/api/todos', todoRoutes);


// Basic route
app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express!");
});

app.use(errorHandler)

// Start server
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
