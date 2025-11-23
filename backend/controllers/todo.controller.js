const todos = require("../storage/storage");

//    - List all todos
const getAllTodos = (req, res) => {
    try {
        return res.status(200).json({data: todos});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

//    - Get a single todo
const getTodoById = (req, res) => {
    const {id} = req.params;
    try {
        const todo = todos.find((td) => td.id === parseInt(id));
        if(!todo) {
            return res.status(404).json({message: "Todo not found!"});
        }
        return res.status(200).json({data: todo});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

//    - Create a new todo
const addTodo = (req, res) => {
    try {
        const {title, completed} = req.body;

        const newTodo = {
            id: todos.length + 1,
            title,
            completed: completed ?? false,
            createdAt: new Date().toISOString()
        };

        todos.push(newTodo);

        return res.status(201).json({message: "Todo added successfully!", data: newTodo});
    } catch (error) {
        return res.status(500).json({message: error.message})  
    }
};

//    - Update a todo
const updateTodoById = (req, res) => {
    const {id} = req.params;
    try {
        const todo = todos.find((td) => td.id === parseInt(id));
        
        if(!todo) {
            return res.status(404).json({message: "Todo not found!"});
        }

        const {title, completed} = req.body;

        todo.title = title ?? todo.title;
        todo.completed = completed ?? todo.completed;

        return res.status(200).json({data: todo});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

//    - Delete a todo
const deleteTodoById = (req, res) => {
    const {id} = req.params;
    try {
        const todoIndex = todos.findIndex((td) => td.id === parseInt(id));
        
        if(todoIndex === -1){
            return res.status(404).json({message: "Todo not found!"});
        }

        const deleted = todos.splice(todoIndex, 1);

        return res.status(200).json({message: "Todo deleted successfully!", data: deleted[0]});

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

module.exports = {getAllTodos, getTodoById, addTodo, updateTodoById, deleteTodoById};