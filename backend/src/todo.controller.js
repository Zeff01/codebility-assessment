let todos = [
  {
    id: 1,
    title: "Sample Todo",
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

export const getAllTodo = async (req, res) => {
  try {
    res.status(200).json({
      message: "Successfully fetched all todos",
      todos,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch all todos", error: error.message });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const todo = todos.find((item) => item.id === id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({
      message: "Todo fetched successfully",
      todo,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const addTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    todos.push(newTodo);

    return res.status(200).json({
      message: "Todo created successfully",
      todos,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const id = parseInt(req.params.id);


    const todo = todos.find((item) => item.id === id);
    if (!todo) {
      return res.status(400).json({message: "Todo not found"});
    }

    if(title !== undefined) todo.title = title;
    if(completed !== undefined) todo.completed = completed;
    res.status(200).json({
        message: "Todo updated successfully",
        todo
    })

  } catch (error) {
    res.status(500).json({message: "Failed to update todo", error: error.message})
  }
};

export const deleteTodo = async (req,res) => {
    try {
        const id = parseInt(req.params.id);

        const todo = todos.findIndex((item) => item.id === id);
        if (todo === -1) {
          return res.status(400).json({
            message: "Todo not found",
          });
        }

        const deletedTodo = todos.splice(todo, 1);
        res.status(200).json({ message: "Todo deleted", todo: deletedTodo, todos});
    } catch (error) {
        res
          .status(500)
          .json({ message: "Failed to delete todo", error: error.message });
    }
    
}
