"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sortByDate_1 = __importDefault(require("../lib/sortByDate"));
/** Database class for managing Todo items with in-memory storage.
 * We use class because it enables scalability and for maintenance.
 */
class TodosTable {
    /** Initialize the database with some initial todos. */
    constructor() {
        this.todos = [];
        this.currentID = 0;
        const initialTodos = [
            {
                id: 1,
                title: "My First Todo",
                completed: false,
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                title: "This is the second to, doing Codebility assesment",
                completed: false,
                //add some delay to see if the sort is working
                createdAt: new Date(Date.now() + 100).toISOString()
            }
        ];
        this.todos.push(...initialTodos);
        this.currentID = initialTodos.length + 1;
    }
    /**
     * Return all todos
     * @param timeZone The timezone to use for the date
     * @returns An array of todos
     */
    getTodos(timeZone = 'Asia/Manila') {
        const todos = (0, sortByDate_1.default)(this.todos, 'createdAt', true, timeZone);
        return todos;
    }
    /**
     * Get one todo
     * @param id The id of the todo
     * @returns The todo
     * @throws Error if the todo is not found
     */
    getTodoById(id, timeZone = 'Asia/Manila') {
        //find if the todo exist
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo)
            throw new Error("Todo not found");
        //then convert the date to human readable
        const sortedTodo = (0, sortByDate_1.default)([todo], 'createdAt', true, timeZone);
        return sortedTodo[0];
    }
    /**
     * Add a new todo
     * @param title The title of the todo
     * @param completed Whether the todo is completed
     * @returns the newly created todo
     */
    addTodo(title, completed = false) {
        const newTodo = {
            id: this.currentID++,
            title: title,
            completed: completed,
            createdAt: new Date().toISOString()
        };
        this.todos.push(newTodo);
        return newTodo;
    }
    /** Update a todo
     * @param id The id of the todo
     * @param title The title of the todo
     * @param completed Whether the todo is completed
     * @returns the updated todos
     *
     * @throws Error if the todo is not found
    */
    updateTodo(id, title, completed) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo)
            throw new Error("Todo not found");
        todo.title = title;
        todo.completed = completed;
        return this.todos;
    }
    /**Delete a todo and return the new todo
     *
     * @param id The id of the todo
     * @returns the updated todos
     *
     * @throws Error if the todo is not found
    */
    deleteTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo)
            throw new Error("Todo not found");
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this.todos;
    }
}
/** A todo table object containing all of the function to manage a todo */
const todoTable = new TodosTable();
exports.default = todoTable;
//# sourceMappingURL=TodosTable.js.map