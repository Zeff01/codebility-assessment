// app/api/auth/signin/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '@/lib/secret'
import { createSessionToken } from '@/app/lib/session'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
   
  const token =  createSessionToken({ email: user.email , id: user.id})

  return NextResponse.json({ token, user: { id: user.id, email: user.email, username: user.username } })
}
