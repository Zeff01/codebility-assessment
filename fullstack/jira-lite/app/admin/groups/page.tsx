import { prisma } from "@/lib/prisma";
import { GroupsManager } from "@/components/admin/groups-manager";

export default async function AdminGroupsPage() {
  const groups = await prisma.group.findMany({
    include: { _count: { select: { members: true } } },
    orderBy: { name: "asc" },
  });

  return (
    <GroupsManager
      initialGroups={groups.map((group) => ({
        id: group.id,
        name: group.name,
        memberCount: group._count.members,
      }))}
    />
  );
}
