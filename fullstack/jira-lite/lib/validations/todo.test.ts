import { describe, expect, it } from "vitest";

import { createTodoSchema, updateTodoSchema } from "@/lib/validations/todo";

describe("createTodoSchema", () => {
  it("accepts a valid title", () => {
    const result = createTodoSchema.safeParse({ title: "Buy milk" });
    expect(result.success).toBe(true);
  });

  it("trims the title", () => {
    const result = createTodoSchema.safeParse({ title: "  Buy milk  " });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.title).toBe("Buy milk");
    }
  });

  it("rejects an empty title", () => {
    const result = createTodoSchema.safeParse({ title: "" });
    expect(result.success).toBe(false);
  });

  it("rejects a whitespace-only title", () => {
    const result = createTodoSchema.safeParse({ title: "   " });
    expect(result.success).toBe(false);
  });

  it("rejects a title over 200 characters", () => {
    const result = createTodoSchema.safeParse({ title: "a".repeat(201) });
    expect(result.success).toBe(false);
  });

  it("accepts a title at exactly 200 characters", () => {
    const result = createTodoSchema.safeParse({ title: "a".repeat(200) });
    expect(result.success).toBe(true);
  });

  it("rejects a missing title", () => {
    const result = createTodoSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it("rejects a non-string title", () => {
    const result = createTodoSchema.safeParse({ title: 123 });
    expect(result.success).toBe(false);
  });

  it("accepts the detail fields and points", () => {
    const result = createTodoSchema.safeParse({
      title: "Add login page",
      description: "Users need a way to sign in.",
      problem: "There is no login page yet.",
      acceptanceCriteria: "User can log in with email and password.",
      technicalImplementation: "Use NextAuth Credentials provider.",
      points: 10,
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.points).toBe(10);
    }
  });

  it("defaults detail fields and points to undefined when omitted", () => {
    const result = createTodoSchema.safeParse({ title: "Buy milk" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.points).toBeUndefined();
      expect(result.data.description).toBeUndefined();
    }
  });

  it("rejects negative points", () => {
    const result = createTodoSchema.safeParse({ title: "Buy milk", points: -1 });
    expect(result.success).toBe(false);
  });

  it("rejects points over 100", () => {
    const result = createTodoSchema.safeParse({ title: "Buy milk", points: 101 });
    expect(result.success).toBe(false);
  });

  it("rejects a non-integer points value", () => {
    const result = createTodoSchema.safeParse({ title: "Buy milk", points: 3.5 });
    expect(result.success).toBe(false);
  });

  it("rejects a description over 2000 characters", () => {
    const result = createTodoSchema.safeParse({
      title: "Buy milk",
      description: "a".repeat(2001),
    });
    expect(result.success).toBe(false);
  });
});

describe("updateTodoSchema", () => {
  it("accepts just a status", () => {
    const result = updateTodoSchema.safeParse({ status: "IN_PROGRESS" });
    expect(result.success).toBe(true);
  });

  it("accepts just a title", () => {
    const result = updateTodoSchema.safeParse({ title: "Updated title" });
    expect(result.success).toBe(true);
  });

  it("accepts an empty object (no-op update)", () => {
    const result = updateTodoSchema.safeParse({});
    expect(result.success).toBe(true);
  });

  it("rejects an empty title when provided", () => {
    const result = updateTodoSchema.safeParse({ title: "" });
    expect(result.success).toBe(false);
  });

  it("rejects a title over 200 characters", () => {
    const result = updateTodoSchema.safeParse({ title: "a".repeat(201) });
    expect(result.success).toBe(false);
  });

  it("rejects a status that isn't one of the known pipeline stages", () => {
    const result = updateTodoSchema.safeParse({ status: "DONE" });
    expect(result.success).toBe(false);
  });
});
