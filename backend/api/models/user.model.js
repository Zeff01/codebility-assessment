const { Schema, model } = require('mongoose');

// Create a User Model Schema
const userSchema = Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
});

module.exports = model('Users', userSchema);
