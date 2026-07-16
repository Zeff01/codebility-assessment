import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { CurrentUser } from "@/lib/authorization";

/**
 * Role and group are deliberately not cached in the session/JWT: an admin's
 * role or group reassignment must take effect on the user's very next
 * request, not just their next login.
 */
export async function getCurrentUser(): Promise<CurrentUser | null> {
  const session = await auth();
  if (!session?.user?.id) return null;

  return prisma.user.findUnique({
    where: { id: session.user.id },
    select: { id: true, role: true, groupId: true },
  });
}
