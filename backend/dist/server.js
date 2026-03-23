import express from "express";
import { todosRouter } from "./routes/todos.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;
app.listen(PORT, () => console.log("Listening at PORT 3000"));
app.use(todosRouter);
//# sourceMappingURL=server.js.map