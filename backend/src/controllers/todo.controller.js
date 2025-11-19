import { getTodos as loadTodos, getTodoById, addTodo, updateTodoById, deleteTodoById } from '../../src/data/todo.js';
import AppError from '../utils/AppError.js';

export const createTodo = async (req, res, next) => {
     try {
          const { title } = req.body;
          if (!title) return next(new AppError(400, 'Title is required'));

          const todos = await loadTodos();
          const newId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;

          const newTodo = {
               id: newId,
               title,
               completed: false,
               createdAt: new Date().toISOString(),
          };

          await addTodo(newTodo);
          return res.status(201).json(newTodo);
     } catch (err) {
          next(err);
     }
};

export const deleteTodo = async (req, res, next) => {
     try {
          const id = parseInt(req.params.id);
          const ok = await deleteTodoById(id);
          if (!ok) return next(new AppError(404, 'Todo not found'));
           
          res.status(204).send({message: 'Todo deleted successfully'});
     } catch (err) {
          next(err);
     }
};

export const updateTodo = async (req, res, next) => {
     try {
          const id = parseInt(req.params.id);
          const { title, completed } = req.body;

          const updates = {};
          if (title !== undefined) updates.title = title;
          if (completed !== undefined) updates.completed = completed;

          const updated = await updateTodoById(id, updates);
          if (!updated) return next(new AppError(404, 'Todo not found'));
          res.json(updated);
     } catch (err) {
          next(err);
     }
};

export const getTodos = async (req, res, next) => {
     try {
          const todos = await loadTodos();
          if(todos.length === 0) return next(new AppError(404, 'No todos found'));

          res.json(todos);
     } catch (err) {
          next(err);
     }
};

export const getTodoByIdController = async (req, res, next) => {
     try {
          const id = parseInt(req.params.id);
          const todo = await getTodoById(id);
          if (!todo) return next(new AppError(404, 'Todo not found'));
          res.json(todo);
     } catch (err) {
          next(err);
     }
};

// Keep old export name for route compatibility (if routes import getTodoById)
export { getTodoByIdController as getTodoById };