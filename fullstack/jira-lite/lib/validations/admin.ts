import { z } from "zod";

export const createGroupSchema = z.object({
  name: z.string().trim().min(1, "Group name is required").max(100, "Group name is too long"),
});

export const updateUserSchema = z.object({
  role: z.enum(["ADMIN", "DEV", "QA"]).optional(),
  groupId: z.string().min(1).nullable().optional(),
});
