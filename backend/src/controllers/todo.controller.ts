import { NextFunction, Request, Response } from "express";
import { newTodoDto } from "../dto/newTodo.dto";
import todoService from "../service/todo.service";

class TodosController {

    getAllTodos = (req: Request, res: Response, next: NextFunction) => {
        try {
            const todoList = todoService.getAllTodos();
            return res.status(200).json({
                success: true,
                data: todoList
            });
        } catch (err) {
            next(err);
        }
    };

    getOneTodo = (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = Number(req.params.id);
            const todo = todoService.getOnetodo(id);
            return res.status(200).json({
                success: true,
                data: todo
            });
        } catch (err) {
            next(err);
        }
    };

    createNewTodo = (req: Request, res: Response, next: NextFunction) => {
        try {
            const createTodo = newTodoDto.parse(req.body);
            const newTodo = todoService.createNewTodo(createTodo);
            return res.status(200).json({
                success: true,
                data: newTodo
            });
        } catch (err) {
            next(err);
        }
    };

    updateTodo = (req: Request, res: Response, next: NextFunction) => {
        const id = Number(req.params.id);
        const todo = newTodoDto.parse(req.body);
        const updatedTodo = todoService.updateTodo(id, todo);
        return res.status(200).json({
            success: true,
            data: updatedTodo
        });
    };

    deleteTodo = (req: Request, res: Response, next: NextFunction) => {
        const id = Number(req.params.id);
        const currentTodoList = todoService.deleteTodo(id);
        return res.status(200).json({
            success: true,
            message: `Todo Id ${id} successfully deleted`
        });
    };
}

export default new TodosController;