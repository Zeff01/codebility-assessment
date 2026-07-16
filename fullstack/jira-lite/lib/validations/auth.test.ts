import { describe, expect, it } from "vitest";

import { loginSchema, registerSchema } from "@/lib/validations/auth";

describe("registerSchema", () => {
  it("accepts valid input", () => {
    const result = registerSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      password: "password123",
    });
    expect(result.success).toBe(true);
  });

  it("trims name and normalizes email to lowercase", () => {
    const result = registerSchema.safeParse({
      name: "  Jane Doe  ",
      email: "  Jane@Example.COM  ",
      password: "password123",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Jane Doe");
      expect(result.data.email).toBe("jane@example.com");
    }
  });

  it("rejects an empty name", () => {
    const result = registerSchema.safeParse({
      name: "",
      email: "jane@example.com",
      password: "password123",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a whitespace-only name", () => {
    const result = registerSchema.safeParse({
      name: "   ",
      email: "jane@example.com",
      password: "password123",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a name over 100 characters", () => {
    const result = registerSchema.safeParse({
      name: "a".repeat(101),
      email: "jane@example.com",
      password: "password123",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = registerSchema.safeParse({
      name: "Jane Doe",
      email: "not-an-email",
      password: "password123",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a password shorter than 8 characters", () => {
    const result = registerSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      password: "short1",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a password over 72 characters (bcrypt limit)", () => {
    const result = registerSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      password: "a".repeat(73),
    });
    expect(result.success).toBe(false);
  });

  it("rejects missing fields", () => {
    const result = registerSchema.safeParse({ email: "jane@example.com" });
    expect(result.success).toBe(false);
  });
});

describe("loginSchema", () => {
  it("accepts valid input", () => {
    const result = loginSchema.safeParse({
      email: "jane@example.com",
      password: "anything",
    });
    expect(result.success).toBe(true);
  });

  it("normalizes email to lowercase so login matches register", () => {
    const result = loginSchema.safeParse({
      email: "Jane@Example.COM",
      password: "anything",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("jane@example.com");
    }
  });

  it("rejects an invalid email", () => {
    const result = loginSchema.safeParse({
      email: "not-an-email",
      password: "anything",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an empty password", () => {
    const result = loginSchema.safeParse({
      email: "jane@example.com",
      password: "",
    });
    expect(result.success).toBe(false);
  });
});
