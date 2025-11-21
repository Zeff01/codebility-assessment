// models/userSchema.js
class User {
  constructor({ id, email, passwordHash, verificationToken, verificationTokenExpires, isVerified }) {
    this.id = id;
    this.email = email;
    this.passwordHash = passwordHash;

    this.verificationToken = verificationToken;
    this.verificationTokenExpires = verificationTokenExpires; // Date
    this.isVerified = isVerified || false;
  }
}

// Fake in-memory store
const users = [];

module.exports = {
  User,
  users
};
