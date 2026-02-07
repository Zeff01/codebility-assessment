import crypto from "crypto";

const createTask = (data) => ({
    id: data.id || crypto.randomUUID(),
    title: data.title,
    completed: data.completed ?? false,
    createdAt: data.createdAt || new Date(),
});

export default { createTask };
