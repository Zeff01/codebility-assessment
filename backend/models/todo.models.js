const generateTimestamp = require("../helpers/generator");
const memoryStorage = [
  {
    id: 1,
    title: "September 21 - Luneta Park",
    completed: true,
    createdAt: "2025-09-21 00:00:00",
  },
  {
    id: 2,
    title: "Ibinalik na ba ang pera ng taumbayan?",
    completed: false,
    createdAt: "2025-09-22 09:10:00",
  },
  {
    id: 3,
    title: "Buying Sub-Standard Construction Materials",
    completed: true,
    createdAt: "2025-09-21 09:10:00",
  },
];

// GET
async function fetchToDo() {
  return {
    statusCode: 200,
    success: true,
    data: memoryStorage,
  };
}

// GET WITH ID
async function fetchToDoByID(id) {
  const found = memoryStorage.find((item) => item.id === parseInt(id));

  if (!found) {
    return {
      statusCode: 404,
      success: false,
      message: "To-Do item not found",
    };
  }

  return { statusCode: 200, success: true, data: found };
}

// POST
async function addToDo(data) {
  const addData = memoryStorage.push(data);

  return { statusCode: 201, success: true, data: memoryStorage };
}

// UPDATE
async function updateToDoByID(data) {
  try {
    const { id, title, completed } = data;

    const found = memoryStorage.find((item) => item.id === parseInt(id));
    console.log(found);

    if (!found) {
      return {
        statusCode: 404,
        success: false,
        message: "To-Do not found",
      };
    }

    found.title = title !== undefined ? title : found.title;
    found.completed = completed !== undefined ? completed : found.completed;

    return { statusCode: 200, success: true, data: memoryStorage };
  } catch (error) {
    console.log(error);
  }
}

// DELETE WITH ID
async function deleteToDoByID(id) {
  const index = memoryStorage.findIndex((item) => item.id === parseInt(id));
  const found = memoryStorage[index];

  if (index === -1) {
    return {
      statusCode: 404,
      success: false,
      message: "To-Do item not found",
    };
  }

  memoryStorage.splice(index, 1);

  return {
    statusCode: 200,
    success: true,
    message: "To-Do item deleted successfully",
    data: memoryStorage,
  };
}

module.exports = {
  fetchToDo,
  fetchToDoByID,
  addToDo,
  updateToDoByID,
  deleteToDoByID,
};
