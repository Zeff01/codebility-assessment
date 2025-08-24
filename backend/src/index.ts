import express from "express";
import todos from "./routes/todos";
import cors  from "cors";
import path  from "path";

// app initialization
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

// Set the routing
app.use("/", todos);

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
