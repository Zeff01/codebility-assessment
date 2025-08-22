import sqlite3 from "sqlite3";

const db = new sqlite3.Database("users.db");

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT
)`);

export default db;
