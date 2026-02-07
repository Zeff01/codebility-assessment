import initSqlJs, { Database } from 'sql.js';
import fs from 'fs';
import path from 'path';
import { User } from '../types';

let db: Database;
const DB_PATH = path.join(__dirname, '../../data.db');

export const initDatabase = async (): Promise<void> => {
  const SQL = await initSqlJs();

  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
  `);

  saveDatabase();
};

const saveDatabase = (): void => {
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(DB_PATH, buffer);
};

export const createUser = (user: User): void => {
  db.run(
    'INSERT INTO users (id, email, password, name, created_at) VALUES (?, ?, ?, ?, ?)',
    [user.id, user.email, user.password, user.name, user.createdAt.toISOString()]
  );
  saveDatabase();
};

export const findUserByEmail = (email: string): User | undefined => {
  const result = db.exec('SELECT * FROM users WHERE email = ?', [email]);

  if (result.length === 0 || result[0].values.length === 0) {
    return undefined;
  }

  const row = result[0].values[0];
  return {
    id: row[0] as string,
    email: row[1] as string,
    password: row[2] as string,
    name: row[3] as string,
    createdAt: new Date(row[4] as string)
  };
};
