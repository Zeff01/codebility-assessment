const users = [];

function createUser(user) {
    users.push(user);
    return user;
}

function findUserByUsername(username) {
    return users.find(u => u.username === username);
}

function getAllUsers() {
    return users.map(({ password, ...u}) => u); // omit password
}

module.exports = { createUser, findUserByUsername, findUserByUsername, getAllUsers};