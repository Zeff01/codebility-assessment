let memoryStore = [];

export const getAllTodo = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ todos: memoryStore, message: "Get All Todos" });
  } catch (error) {
    console.log(error);
  }
};

export const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const findTodo = memoryStore.find((todo) => todo.id === parseInt(id));

    if (!findTodo) {
      return res.json({ message: "No todo has been found" });
    }

    return res.status(200).json({ todo: findTodo, message: "Get Todo" });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const index = memoryStore.findIndex((todo) => todo.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({ message: "No todo has been found" });
    }

    if (title !== undefined) memoryStore[index].title = title;
    if (completed !== undefined) memoryStore[index].completed = completed;

    return res.status(200).json({
      message: "Todo updated successfully",
      updatedTodo: memoryStore[index],
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = async (req, res) => {
  try {
    const lastItem = memoryStore.length - 1; //for the id
    const { title } = req.body;

    if (!title) {
      return res.json({ message: "Required Field" });
    }

    const todo = {
      id: lastItem + 1,
      title: title,
      completed: false,
      createdAt: new Date(),
    };

    memoryStore.push(todo);

    return res.status(200).json({ todo, message: "Todo has been created." });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoById = async (req, res) => {
  try {
    const { id } = req.params;

    const index = memoryStore.findIndex((todo) => todo.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({ message: "No todo has been found" });
    }

    memoryStore.splice(index, 1);

    return res.status(200).json({ message: "Todo has been Deleted" });
  } catch (error) {
    console.log(error);
  }
};
