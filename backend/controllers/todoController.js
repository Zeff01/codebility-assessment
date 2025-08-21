import { nanoid } from "nanoid"
import { todos } from "../models/todo.js"

//GET ALL TODOS
export const getTodos = (req, res) => {
  if (todos.length === 0) return res.status(404).json({ msg: "No todos found" })

  const formattedTodos = todos.map((todo) => ({
    ...todo,
    createdAt: new Date(todo.createdAt).toLocaleString(),
  }))

  res.status(200).json({ todos: formattedTodos })
}

//GET SINGLE TODO
export const getTodo = (req, res) => {
  const todo = req.todo
  const formattedTodo = {
    ...todo,
    createdAt: new Date(todo.createdAt).toLocaleString(),
  }

  res.status(200).json({ todo: formattedTodo })
}

//CREATE TODO
export const createTodo = (req, res) => {
  const { title } = req.body
  if (!title) return res.status(400).json({ msg: "Please provide a title" })

  const id = nanoid(10)
  const createdAt = new Date()

  const todo = {
    id,
    title,
    completed: false,
    createdAt,
  }

  todos.push(todo)

  res.status(201).json({ msg: "Todo created", todo })
}

//EDIT TODO
export const editTodo = (req, res) => {
  const todo = req.todo
  const { title, completed } = req.body

  todo.title = title || todo.title
  todo.completed = completed || todo.completed

  res.status(200).json({ msg: "Todo updated", todo })
}

//DELETE TODO
export const deleteTodo = (req, res) => {
  const todo = req.todo
  const index = todos.indexOf(todo)
  todos.splice(index, 1)
  res.status(200).json({ msg: "Todo deleted" })
}
