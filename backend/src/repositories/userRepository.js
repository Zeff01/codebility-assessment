const users = [];

let nextId = 1;

const userRepository = {
  findByEmail(email) {
    return users.find((user) => user.email === email);
  },


  findById(id) {
    return users.find((user) => user.id === id);
  },

  create(userData) {
    const user = {
      id: nextId++,
      ...userData,
      createdAt: new Date().toISOString(),
    };
    users.push(user);
    return user;
  },

  findAll() {
    return users;
  },
};

module.exports = userRepository;