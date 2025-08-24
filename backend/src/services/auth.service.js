const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let users = [];

const register = async ({ username, password }) => {
  const existing = users.find(u => u.username === username);
  if (existing) throw new Error("User already exists");

  const hashed = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, username, password: hashed };
  users.push(user);

  return { id: user.id, username: user.username };
};

const login = async ({ username, password }) => {
  const user = users.find(u => u.username === username);
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
  return { token };
};

module.exports = { register, login };
