/**
 * This should be ORM file like Drizzle.
 * for simplicity we will use simple memory storage.
 *
 * Created by Anghelo Amir for Codebility assesment
 */
interface TodoTable {
    id: number;
    title: string;
    completed: boolean;
    createdAt: string;
}
/** Database class for managing Todo items with in-memory storage.
 * We use class because it enables scalability and for maintenance.
 */
declare class TodosTable {
    private todos;
    private currentID;
    /** Initialize the database with some initial todos. */
    constructor();
    /**
     * Return all todos
     * @param timeZone The timezone to use for the date
     * @returns An array of todos
     */
    getTodos(timeZone?: string): TodoTable[];
    /**
     * Get one todo
     * @param id The id of the todo
     * @returns The todo
     * @throws Error if the todo is not found
     */
    getTodoById(id: number, timeZone?: string): TodoTable | undefined;
    /**
     * Add a new todo
     * @param title The title of the todo
     * @param completed Whether the todo is completed
     * @returns the newly created todo
     */
    addTodo(title: string, completed?: boolean): TodoTable;
    /** Update a todo
     * @param id The id of the todo
     * @param title The title of the todo
     * @param completed Whether the todo is completed
     * @returns the updated todos
     *
     * @throws Error if the todo is not found
    */
    updateTodo(id: number, title: string, completed: boolean): TodoTable[];
    /**Delete a todo and return the new todo
     *
     * @param id The id of the todo
     * @returns the updated todos
     *
     * @throws Error if the todo is not found
    */
    deleteTodo(id: number): TodoTable[];
}
/** A todo table object containing all of the function to manage a todo */
declare const todoTable: TodosTable;
export default todoTable;
//# sourceMappingURL=TodosTable.d.ts.map