import "server-only";

import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

// A tiny file-backed store: each "table" is one JSON file in the data directory.
// Fine for a single instance; swap for a real database when running more than one.

export function dataDir() {
  return process.env.DATA_DIR ?? path.join(process.cwd(), "data");
}

function filePath(table: string) {
  return path.join(dataDir(), `${table}.json`);
}

type Parse<T> = (raw: unknown) => T;

// Parsed tables are kept in memory and reused until the file changes on disk,
// so reads don't re-parse and re-validate the whole file. Treat returned data as read-only.
type CacheEntry = { version: string; parse: Parse<unknown>; value: unknown };
const cache = new Map<string, CacheEntry>();

async function fileVersion(file: string) {
  try {
    const { mtimeMs, size } = await stat(file);
    return `${mtimeMs}:${size}`;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

export async function readTable<T>(table: string, parse: Parse<T>): Promise<T> {
  const file = filePath(table);
  const version = await fileVersion(file);

  if (version === null) return parse(undefined);

  const cached = cache.get(file);
  if (cached && cached.version === version && cached.parse === parse) {
    return cached.value as T;
  }

  const value = parse(JSON.parse(await readFile(file, "utf8")));
  cache.set(file, { version, parse, value });
  return value;
}

async function writeTable<T>(table: string, parse: Parse<T>, data: T) {
  const file = filePath(table);
  const temp = `${file}.${randomUUID()}.tmp`;

  await mkdir(path.dirname(file), { recursive: true });
  try {
    await writeFile(temp, `${JSON.stringify(data, null, 2)}\n`);
    // rename is atomic, so readers never see a half-written file
    await rename(temp, file);
  } catch (error) {
    await rm(temp, { force: true });
    throw error;
  }

  const version = await fileVersion(file);
  if (version) cache.set(file, { version, parse, value: data });
}

const locks = new Map<string, Promise<unknown>>();

// Runs read → modify → write with one writer per table at a time, so concurrent
// requests can't overwrite each other's changes. If `update` throws, nothing is written.
export function updateTable<T, R>(
  table: string,
  parse: Parse<T>,
  update: (data: T) => { data: T; result: R },
): Promise<R> {
  const key = filePath(table);

  const run = async () => {
    const { data, result } = update(await readTable(table, parse));
    await writeTable(table, parse, data);
    return result;
  };

  const next = (locks.get(key) ?? Promise.resolve()).then(run, run);
  locks.set(key, next.catch(() => undefined));
  return next;
}
