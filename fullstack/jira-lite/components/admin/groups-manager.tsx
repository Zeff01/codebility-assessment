"use client";

import { useState } from "react";

type Group = {
  id: string;
  name: string;
  memberCount: number;
};

export function GroupsManager({ initialGroups }: { initialGroups: Group[] }) {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleCreate(event: React.FormEvent) {
    event.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? "Failed to create group");
      }

      const data = await response.json();
      setGroups((prev) => [...prev, data.group].sort((a, b) => a.name.localeCompare(b.name)));
      setName("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Groups</h1>

      <form onSubmit={handleCreate} className="flex gap-2">
        <input
          type="text"
          required
          maxLength={100}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New group name"
          className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 user-invalid:border-red-500 user-invalid:text-red-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:user-invalid:border-red-500 dark:user-invalid:text-red-400"
        />
        <button
          type="submit"
          disabled={isSubmitting || !name.trim()}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
        >
          Create group
        </button>
      </form>

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

      <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-100 text-xs uppercase tracking-wide text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Members</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {groups.length === 0 ? (
              <tr>
                <td colSpan={2} className="px-4 py-6 text-center text-zinc-400 dark:text-zinc-600">
                  No groups yet
                </td>
              </tr>
            ) : (
              groups.map((group) => (
                <tr key={group.id} className="bg-white dark:bg-zinc-950">
                  <td className="px-4 py-2 text-zinc-900 dark:text-zinc-50">{group.name}</td>
                  <td className="px-4 py-2 text-zinc-600 dark:text-zinc-400">{group.memberCount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
