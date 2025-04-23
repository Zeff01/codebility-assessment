// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { createSessionToken } from '@/app/lib/session'

export async function POST(req: Request) {
  const { username, email, password } = await req.json()

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) return NextResponse.json({ error: 'Email already in use' }, { status: 400 })

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: { username, email, password: hashedPassword },
  })

    const token =  createSessionToken({ email: user.email , id: user.id})
  
    return NextResponse.json({ token, user: { id: user.id, email: user.email, username: user.username } })
}
