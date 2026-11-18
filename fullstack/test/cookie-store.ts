type CookieOptions = Record<string, unknown>;

export function createCookieStore(initial: Record<string, string> = {}) {
  const values = new Map(Object.entries(initial));
  const setCalls: { name: string; value: string; options?: CookieOptions }[] = [];

  return {
    values,
    setCalls,
    get: (name: string) => (values.has(name) ? { name, value: values.get(name)! } : undefined),
    set: (name: string, value: string, options?: CookieOptions) => {
      values.set(name, value);
      setCalls.push({ name, value, options });
    },
    delete: (name: string) => {
      values.delete(name);
    },
  };
}

export type TestCookieStore = ReturnType<typeof createCookieStore>;
