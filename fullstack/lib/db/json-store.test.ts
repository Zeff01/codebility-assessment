import { readdir } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { useTempDataDir } from "@/test/data-dir";
import { readTable, updateTable } from "./json-store";

const raw = (value: unknown) => value;

type Counter = { count: number };
const parseCounter = (raw: unknown) => (raw as Counter | undefined) ?? { count: 0 };

let store: Awaited<ReturnType<typeof useTempDataDir>>;

beforeEach(async () => {
  store = await useTempDataDir();
});

afterEach(async () => {
  await store.cleanup();
});

describe("readTable", () => {
  it("returns undefined for a table that doesn't exist yet", async () => {
    expect(await readTable("missing", raw)).toBeUndefined();
  });

  it("throws on a corrupt file instead of pretending it's empty", async () => {
    await store.writeRaw("broken.json", "{not json");
    await expect(readTable("broken", raw)).rejects.toThrow();
  });
});

describe("updateTable", () => {
  it("creates the file and returns the update result", async () => {
    const result = await updateTable("counter", parseCounter, (data) => ({
      data: { count: data.count + 1 },
      result: "ok",
    }));

    expect(result).toBe("ok");
    expect(await store.readJson("counter.json")).toEqual({ count: 1 });
  });

  it("serializes concurrent updates so none are lost", async () => {
    await Promise.all(
      Array.from({ length: 25 }, () =>
        updateTable("counter", parseCounter, (data) => ({ data: { count: data.count + 1 }, result: null })),
      ),
    );

    expect(await store.readJson("counter.json")).toEqual({ count: 25 });
  });

  it("writes nothing when the update throws, and keeps going afterwards", async () => {
    await store.writeJson("counter.json", { count: 5 });

    await expect(
      updateTable("counter", parseCounter, () => {
        throw new Error("rejected");
      }),
    ).rejects.toThrow("rejected");
    expect(await store.readJson("counter.json")).toEqual({ count: 5 });

    await updateTable("counter", parseCounter, (data) => ({ data: { count: data.count + 1 }, result: null }));
    expect(await store.readJson("counter.json")).toEqual({ count: 6 });
  });

  it("leaves no temp files behind", async () => {
    await updateTable("counter", parseCounter, (data) => ({ data, result: null }));
    const files = await readdir(store.dir);

    expect(files.filter((file) => file.endsWith(".tmp"))).toEqual([]);
  });

  it("picks up edits made to the file outside the app", async () => {
    await updateTable("counter", parseCounter, () => ({ data: { count: 1 }, result: null }));
    expect(await readTable("counter", parseCounter)).toEqual({ count: 1 });

    await new Promise((resolve) => setTimeout(resolve, 20));
    await store.writeJson("counter.json", { count: 42 });

    expect(await readTable("counter", parseCounter)).toEqual({ count: 42 });
  });
});
