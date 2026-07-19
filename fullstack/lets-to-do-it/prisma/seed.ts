import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashed = await bcrypt.hash('password123', 10)

  await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      password: hashed,
    },
  })

  console.log('Demo user created')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())