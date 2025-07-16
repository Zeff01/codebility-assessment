import { promises as fs } from "fs"
import path from "path"

const usersFilePath = path.join(process.cwd(), "data", "users.json")
const todosFilePath = path.join(process.cwd(), "data", "todos.json")

interface User {
  id: string
  username: string
  email: string
  password: string
}

interface Todo {
  id: string
  title: string
  completed: boolean
  createdAt: string
  userId: string
}

// --- User Data Operations ---

async function readUsers(): Promise<User[]> {
  try {
    const data = await fs.readFile(usersFilePath, "utf8")
    return JSON.parse(data)
  } catch (error: any) {
    if (error.code === "ENOENT") {
      // File does not exist, return empty array and create file
      await fs.writeFile(usersFilePath, "[]", "utf8")
      return []
    }
    console.error("Error reading users file:", error)
    throw new Error("Failed to read user data")
  }
}

async function writeUsers(users: User[]): Promise<void> {
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), "utf8")
  } catch (error) {
    console.error("Error writing users file:", error)
    throw new Error("Failed to write user data")
  }
}

export async function addUser(user: User): Promise<void> {
  const users = await readUsers()
  users.push(user)
  await writeUsers(users)
}

export async function findUser(predicate: (user: User) => boolean): Promise<User | undefined> {
  const users = await readUsers()
  return users.find(predicate)
}

export async function updateUser(id: string, updates: Partial<User>): Promise<User | null> {
  const users = await readUsers()
  const index = users.findIndex((u) => u.id === id)
  if (index !== -1) {
    users[index] = { ...users[index], ...updates }
    await writeUsers(users)
    return users[index]
  }
  return null
}

// --- Todo Data Operations ---

async function readTodos(): Promise<Todo[]> {
  try {
    const data = await fs.readFile(todosFilePath, "utf8")
    return JSON.parse(data)
  } catch (error: any) {
    if (error.code === "ENOENT") {
      // File does not exist, return empty array and create file
      await fs.writeFile(todosFilePath, "[]", "utf8")
      return []
    }
    console.error("Error reading todos file:", error)
    throw new Error("Failed to read todo data")
  }
}

async function writeTodos(todos: Todo[]): Promise<void> {
  try {
    await fs.writeFile(todosFilePath, JSON.stringify(todos, null, 2), "utf8")
  } catch (error) {
    console.error("Error writing todos file:", error)
    throw new Error("Failed to write todo data")
  }
}

export async function addTodo(todo: Todo): Promise<void> {
  const todos = await readTodos()
  todos.push(todo)
  await writeTodos(todos)
}

export async function getUserTodos(userId: string): Promise<Todo[]> {
  const todos = await readTodos()
  return todos.filter((todo) => todo.userId === userId)
}

export async function findTodoByIdAndUser(id: string, userId: string): Promise<Todo | undefined> {
  const todos = await readTodos()
  return todos.find((todo) => todo.id === id && todo.userId === userId)
}

export async function updateTodoItem(id: string, userId: string, updates: Partial<Todo>): Promise<Todo | null> {
  const todos = await readTodos()
  const index = todos.findIndex((todo) => todo.id === id && todo.userId === userId)
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updates }
    await writeTodos(todos)
    return todos[index]
  }
  return null
}

export async function deleteTodoItem(id: string, userId: string): Promise<boolean> {
  let todos = await readTodos()
  const initialLength = todos.length
  todos = todos.filter((todo) => !(todo.id === id && todo.userId === userId))
  if (todos.length < initialLength) {
    await writeTodos(todos)
    return true
  }
  return false
}
