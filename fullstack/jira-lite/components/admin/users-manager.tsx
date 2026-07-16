"use client";

import { useState } from "react";

type Role = "ADMIN" | "DEV" | "QA";

type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  groupId: string | null;
};

type Group = {
  id: string;
  name: string;
};

const ROLES: Role[] = ["ADMIN", "DEV", "QA"];

export function UsersManager({
  initialUsers,
  groups,
}: {
  initialUsers: User[];
  groups: Group[];
}) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedId, setSavedId] = useState<string | null>(null);

  function updateLocal(id: string, patch: Partial<Pick<User, "role" | "groupId">>) {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...patch } : u)));
  }

  async function handleSave(user: User) {
    setSavingId(user.id);
    setErrors((prev) => ({ ...prev, [user.id]: "" }));
    setSavedId(null);

    try {
      const response = await fetch(`/api/admin/users/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: user.role, groupId: user.groupId }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? "Failed to save");
      }

      setSavedId(user.id);
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        [user.id]: err instanceof Error ? err.message : "Something went wrong",
      }));
    } finally {
      setSavingId(null);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Users</h1>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-100 text-xs uppercase tracking-wide text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Group</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {users.map((user) => (
              <tr key={user.id} className="bg-white dark:bg-zinc-950">
                <td className="px-4 py-2 text-zinc-900 dark:text-zinc-50">{user.name}</td>
                <td className="px-4 py-2 text-zinc-600 dark:text-zinc-400">{user.email}</td>
                <td className="px-4 py-2">
                  <select
                    value={user.role}
                    onChange={(e) => updateLocal(user.id, { role: e.target.value as Role })}
                    className="rounded-md border border-zinc-300 bg-white px-2 py-1 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                  >
                    {ROLES.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-2">
                  <select
                    value={user.groupId ?? ""}
                    onChange={(e) => updateLocal(user.id, { groupId: e.target.value || null })}
                    className="rounded-md border border-zinc-300 bg-white px-2 py-1 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                  >
                    <option value="">No group</option>
                    {groups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleSave(user)}
                      disabled={savingId === user.id}
                      className="rounded-md bg-blue-600 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
                    >
                      {savingId === user.id ? "Saving..." : "Save"}
                    </button>
                    {savedId === user.id && (
                      <span className="text-xs text-green-600 dark:text-green-400">Saved</span>
                    )}
                    {errors[user.id] && (
                      <span className="text-xs text-red-600 dark:text-red-400">
                        {errors[user.id]}
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
