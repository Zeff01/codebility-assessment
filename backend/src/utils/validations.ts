import { z } from "zod";

export const createTodoSchema = z.object({
    title: z.string().min(2, { message: "Title must contain at least 2 characters" }),
})

export const updateTodoSchema = z.object({
    title: z.string().min(2, { message: "Title must contain at least 2 characters" }),
})

