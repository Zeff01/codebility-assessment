import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

async function upsertUser(params: {
  name: string;
  email: string;
  role: "ADMIN" | "DEV" | "QA";
  groupId?: string;
}) {
  const password = await bcrypt.hash("password123", 10);
  return prisma.user.upsert({
    where: { email: params.email },
    update: { role: params.role, groupId: params.groupId ?? null },
    create: {
      name: params.name,
      email: params.email,
      password,
      role: params.role,
      groupId: params.groupId,
    },
  });
}

async function main() {
  const group = await prisma.group.upsert({
    where: { name: "Team Alpha" },
    update: {},
    create: { name: "Team Alpha" },
  });

  const admin = await upsertUser({
    name: "Admin User",
    email: "admin@example.com",
    role: "ADMIN",
  });

  const dev = await upsertUser({
    name: "Dev User",
    email: "dev@example.com",
    role: "DEV",
    groupId: group.id,
  });

  const qa = await upsertUser({
    name: "QA User",
    email: "qa@example.com",
    role: "QA",
    groupId: group.id,
  });

  const solo = await upsertUser({
    name: "Solo Dev",
    email: "solo@example.com",
    role: "DEV",
  });

  await prisma.todo.deleteMany({
    where: { userId: { in: [admin.id, dev.id, qa.id, solo.id] } },
  });

  await prisma.todo.createMany({
    data: [
      { title: "Review the team's board layout", status: "COMPLETED", userId: admin.id },
      { title: "Set up the project", status: "TO_DO", userId: dev.id },
      { title: "Wire up authentication", status: "IN_PROGRESS", userId: dev.id },
      { title: "Build the todo board", status: "READY_FOR_TESTING", userId: dev.id },
      { title: "Verify login flow", status: "READY_FOR_TESTING", userId: qa.id },
      { title: "Verify todo CRUD on staging", status: "TESTED_AND_VERIFIED", userId: qa.id },
      { title: "Sign off on release", status: "COMPLETED", userId: qa.id },
      { title: "Organize personal errands", status: "TO_DO", userId: solo.id },
    ],
  });

  console.log("Seeded:");
  console.log("  admin@example.com / password123  (ADMIN, no group)");
  console.log("  dev@example.com   / password123  (DEV, Team Alpha)");
  console.log("  qa@example.com    / password123  (QA, Team Alpha)");
  console.log("  solo@example.com  / password123  (DEV, no group)");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
