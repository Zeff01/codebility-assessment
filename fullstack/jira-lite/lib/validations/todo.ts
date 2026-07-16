import { TodoStatus } from "@prisma/client";
import { z } from "zod";

const detailField = z.string().trim().max(2000, "This field is too long").optional();

export const createTodoSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200, "Title is too long"),
  description: detailField,
  problem: detailField,
  acceptanceCriteria: detailField,
  technicalImplementation: detailField,
  points: z.coerce.number().int().min(0, "Points can't be negative").max(100, "Points is too high").optional(),
});

export const updateTodoSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200, "Title is too long").optional(),
  status: z.enum(TodoStatus).optional(),
});
