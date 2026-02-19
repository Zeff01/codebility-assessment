const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

async function main() {
  const prisma = new PrismaClient();
  const hashedPassword = await bcrypt.hash("password123", 10);

  const user = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      email: "test@test.com",
      password: hashedPassword,
      name: "Test User",
    },
  });

  console.log("Created test user:", user.email);
  await prisma.$disconnect();
}

main().catch(console.error);
