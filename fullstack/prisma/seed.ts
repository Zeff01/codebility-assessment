import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Clean up existing data
  await prisma.todo.deleteMany({});
  await prisma.user.deleteMany({});

  // Create demo user
  const hashedPassword = await bcryptjs.hash("password123", 10);
  const user = await prisma.user.create({
    data: {
      email: "demo@example.com",
      password: hashedPassword,
      name: "Demo User",
    },
  });

  // Create sample todos
  const now = new Date();
  const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
  const oneDayAgo = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000);
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
  const fourDaysAgo = new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000);

  await prisma.todo.createMany({
    data: [
      {
        title: "Buy groceries",
        completed: false,
        userId: user.id,
        createdAt: twoDaysAgo,
      },
      {
        title: "Finish project report",
        completed: false,
        userId: user.id,
        createdAt: oneDayAgo,
      },
      {
        title: "Review pull requests",
        completed: true,
        userId: user.id,
        createdAt: threeDaysAgo,
      },
      {
        title: "Update documentation",
        completed: true,
        userId: user.id,
        createdAt: fourDaysAgo,
      },
    ],
  });

  console.log("Seeding completed successfully!");
  console.log("Demo credentials:");
  console.log("Email: demo@example.com");
  console.log("Password: password123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
