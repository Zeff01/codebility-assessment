import express from "express"
import TodoRouter from "./routes/todoRouter.js"
import { errorHandler } from "./middleware/errorHandlerMiddleware..js"

const app = express()
const PORT = 5000

app.use(express.json())

app.use("/api/todos", TodoRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log("server running...")
})
