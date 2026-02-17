import bcrypt from 'bcryptjs';
import { promises as fs } from 'fs';
import path from 'path';
import { User } from '@/types/todo';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

interface DbData {
  users: User[];
  todos: unknown[];
}

async function readDb(): Promise<DbData> {
  const data = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(data) as DbData;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const db = await readDb();
  return db.users.find((user) => user.email === email) || null;
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function createUser(email: string, password: string, name: string): Promise<User> {
  const db = await readDb();

  // Check if user already exists
  const existingUser = db.users.find((user) => user.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Create new user
  const hashedPassword = await hashPassword(password);
  const newUser: User = {
    id: String(Date.now()),
    email,
    password: hashedPassword,
    name,
  };

  db.users.push(newUser);

  // Write to database
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));

  return newUser;
}
