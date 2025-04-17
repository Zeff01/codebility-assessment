import express from "express"
import todosRoute from "./routes/todos"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/todos", todosRoute)

app.use("/health", (req, res) => {
    res.status(200).json({ message: "ok" });
});

app.use((req, res) => {
    res.status(404).json({ message: "Endpoint URL not found!" });
})
export default app