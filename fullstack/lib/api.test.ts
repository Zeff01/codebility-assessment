import { describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { ApiError, handleError, ok, readJson, withErrorHandling } from "./api";

const jsonRequest = (body: string) =>
  new Request("http://localhost/api/test", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
  });

describe("ok", () => {
  it("wraps data in a data envelope", async () => {
    const res = ok({ id: 1 }, { status: 201 });
    expect(res.status).toBe(201);
    expect(await res.json()).toEqual({ data: { id: 1 } });
  });
});

describe("handleError", () => {
  it("maps ApiError to its status and code", async () => {
    const res = handleError(ApiError.conflict("Nope", { available: 2 }));

    expect(res.status).toBe(409);
    expect(await res.json()).toEqual({
      error: { code: "CONFLICT", message: "Nope", details: { available: 2 } },
    });
  });

  it("maps zod errors to a 400 with field details", async () => {
    const result = z.object({ quantity: z.number() }).safeParse({ quantity: "x" });
    const res = handleError(result.error);
    const body = await res.json();

    expect(res.status).toBe(400);
    expect(body.error.code).toBe("VALIDATION_ERROR");
    expect(body.error.details[0].path).toBe("quantity");
  });

  it("hides internal details for unexpected errors", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const res = handleError(new Error("db password is hunter2"));
    const body = await res.json();

    expect(res.status).toBe(500);
    expect(JSON.stringify(body)).not.toContain("hunter2");
  });
});

describe("withErrorHandling", () => {
  it("passes through successful responses", async () => {
    const handler = withErrorHandling(async () => ok("fine"));
    expect((await handler()).status).toBe(200);
  });

  it("turns thrown errors into error responses", async () => {
    const handler = withErrorHandling(async () => {
      throw ApiError.notFound();
    });
    expect((await handler()).status).toBe(404);
  });
});

describe("readJson", () => {
  it("parses a JSON body", async () => {
    expect(await readJson(jsonRequest('{"a":1}'))).toEqual({ a: 1 });
  });

  it("throws a 400 for malformed JSON", async () => {
    await expect(readJson(jsonRequest("{oops"))).rejects.toMatchObject({ status: 400 });
  });

  it("throws a 413 when the body is over the limit", async () => {
    const body = JSON.stringify({ padding: "x".repeat(200) });
    await expect(readJson(jsonRequest(body), 100)).rejects.toMatchObject({ status: 413 });
  });
});
