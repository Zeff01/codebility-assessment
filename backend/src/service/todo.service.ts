import { newTodoInput } from "../dto/newTodo.dto";
import { TodoListType } from "../types/todo.type";
import AppError from "../utils/appError.util";


class TodoService {
    private todoList: TodoListType[] = [];

    getAllTodos = () => {
        return this.todoList;
    };

    getOnetodo = (id: number) => {
        const todo = this.searchById(id);
        return todo;
    };

    createNewTodo = (createTodo: newTodoInput) => {
        const idNum = this.todoList[this.todoList.length - 1]?.id
        const newTodo = {
            id: this.todoList.length ? idNum + 1 : 1,
            title: createTodo.title,
            completed: false,
            createdAt: new Date
        };

        this.todoList.push(newTodo);
        return newTodo;
    };

    updateTodo = (id: number, todo: newTodoInput) => {
        const todoById = this.searchById(id);
        const updatedTodoId = {
            ...todoById,
            ...todo
        };

        this.todoList = this.todoList.map(todo => {
            if (todo.id === id) return updatedTodoId;
            return todo;
        });

        return updatedTodoId;
    };

    deleteTodo = (id: number) => {
        const todoById = this.searchById(id);
        const currentTodoList = this.todoList.filter(todo => todo.id !== todoById.id);
        this.todoList = currentTodoList;
        return currentTodoList;
    };

    searchById = (id: number) => {
        const todoItem = this.todoList.find(item => item.id == id);
        if (!todoItem) throw new AppError(404, "NO TODO FOUND FOR THE PROVIDED ID");
        return todoItem;
    };
}

export default new TodoService;