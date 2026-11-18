import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

// Points the JSON store at a throwaway copy of the data directory for one test.
export async function useTempDataDir() {
  const dir = await mkdtemp(path.join(tmpdir(), "store-test-"));
  await cp(path.join(process.cwd(), "data", "products.json"), path.join(dir, "products.json"));

  const previous = process.env.DATA_DIR;
  process.env.DATA_DIR = dir;

  return {
    dir,
    readJson: async (file: string) => JSON.parse(await readFile(path.join(dir, file), "utf8")),
    writeJson: (file: string, data: unknown) => writeFile(path.join(dir, file), JSON.stringify(data)),
    writeRaw: (file: string, data: string) => writeFile(path.join(dir, file), data),
    cleanup: async () => {
      if (previous === undefined) delete process.env.DATA_DIR;
      else process.env.DATA_DIR = previous;
      await rm(dir, { recursive: true, force: true });
    },
  };
}
