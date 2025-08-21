import { z } from "zod"

export let todos = [
  {
    id: "mqGQdmJiWO",
    title: "Learn React and Typescript",
    completed: false,
    createdAt: "2025-08-21T13:01:44.080Z",
  },
  {
    id: "dqsQdmJiWO",
    title: "Learn Next.js and Typescript",
    completed: false,
    createdAt: "2025-08-21T13:01:50.080Z",
  },
]

export const todoSchema = z.object({
  title: z.string().min(1, "Title is required").trim(),
})

export const editTodoSchema = z.object({
  title: z.string().trim().optional(),
  completed: z.boolean().default(false),
})
