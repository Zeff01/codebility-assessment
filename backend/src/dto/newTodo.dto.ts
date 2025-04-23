import { z } from "zod";

export const newTodoDto = z.object({
    title: z.string().min(3).trim(),
    completed: z.boolean().optional()
});

export type newTodoInput = z.infer<typeof newTodoDto>

