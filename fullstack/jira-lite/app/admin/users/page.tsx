import { prisma } from "@/lib/prisma";
import { UsersManager } from "@/components/admin/users-manager";

export default async function AdminUsersPage() {
  const [users, groups] = await Promise.all([
    prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        groupId: true,
      },
      orderBy: { name: "asc" },
    }),
    prisma.group.findMany({ select: { id: true, name: true }, orderBy: { name: "asc" } }),
  ]);

  return <UsersManager initialUsers={users} groups={groups} />;
}
