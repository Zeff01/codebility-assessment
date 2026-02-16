import bcrypt from 'bcryptjs';

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
}

// In-memory user storage (in production, use a real database)
const users: User[] = [
  {
    id: '1',
    email: 'demo@example.com',
    name: 'Demo User',
    password: bcrypt.hashSync('password123', 10),
    createdAt: new Date().toISOString(),
  },
];

export function findUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email);
}

export function createUser(email: string, name: string, password: string): User {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser: User = {
    id: String(users.length + 1),
    email,
    name,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  return newUser;
}

export function verifyPassword(password: string, hashedPassword: string): boolean {
  return bcrypt.compareSync(password, hashedPassword);
}
