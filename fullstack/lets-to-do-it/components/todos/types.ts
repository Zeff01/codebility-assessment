export type Priority = "Low" | "Medium" | "High";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export function derivePriority(id: string): Priority {
  const hash = Array.from(id).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const options: Priority[] = ["Low", "Medium", "High"];
  return options[hash % options.length];
}
