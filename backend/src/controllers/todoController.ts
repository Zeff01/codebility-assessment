import { Request, Response } from 'express';
import todoModel from '../models/todoModel';
import { createTodoSchema, updateTodoSchema } from '../utils/validations';
import { create } from 'domain';

export const getTodos = (req: Request, res: Response): void => {
    const todos = todoModel.findAll();

    res.status(200).json(todos);
}

export const getTodoById = (req: Request, res: Response): void => {
    const { id } = req.params;
    const todo = todoModel.findById(Number(id));

    if (!todo) {
        res.status(404)
        throw new Error("Todo not found")
    }

    res.status(200).json(todo);
}

export const createTodo = (req: Request, res: Response): void => {
    const { title } = createTodoSchema.parse(req.body);
    const newTodo = todoModel.create(title);

    res.status(201).json({
        message: "Todo created successfully",
        newTodo: newTodo
    });
}

export const updateTodo = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { title } = updateTodoSchema.parse(req.body);

    const updatedTodo = todoModel.update(Number(id), title);

    if (!updatedTodo) {
        res.status(404)
        throw new Error("Todo not found")
    }

    res.status(200).json({
        message: "Todo updated successfully",
        updatedTodo: updatedTodo
    });
}

export const deleteTodo = (req: Request, res: Response): void => {
    const { id } = req.params;
    const deletedTodo = todoModel.delete(Number(id));

    if (!deletedTodo) {
        res.status(404)
        throw new Error("Todo not found")
    }

    res.status(200).json({
        message: "Todo deleted successfully",
        deletedTodo: deletedTodo
    });
}

export const toggleTodo = (req: Request, res: Response): void => {
    const { id } = req.params;
    const todo = todoModel.findById(Number(id));

    if (!todo) {
        res.status(404)
        throw new Error("Todo not found")
    }

    const toggledTodo = todoModel.toggleComplete(Number(id));

    res.status(200).json({
        message: toggledTodo?.isCompleted ? "To-do completed" : "To-do pending",
        todo: toggledTodo
    })
}