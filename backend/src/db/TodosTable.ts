import SortByDate from "../lib/sortByDate";

/**
 * This should be ORM file like Drizzle.
 * for simplicity we will use simple memory storage.
 * 
 * Created by Anghelo Amir for Codebility assesment
 */
interface TodoTable {
    id        :number;
    title     :string;
    completed :boolean;
    createdAt :string;
}

/** Database class for managing Todo items with in-memory storage.
 * We use class because it enables scalability and for maintenance.
 */
class TodosTable {
    private todos     :TodoTable[] = [];
    private currentID :number      = 0;

    /** Initialize the database with some initial todos. */
    constructor() {
        const initialTodos :TodoTable[] = [
            {
                id        : 1,
                title     : "My First Todo",
                completed : false,
                createdAt : new Date().toISOString()
            },
            {
                id        : 2,
                title     : "This is the second to, doing Codebility assesment",
                completed : false,

            //add some delay to see if the sort is working
                createdAt : new Date(Date.now() + 100 ).toISOString()
            }
        ];

        this.todos.push( ...initialTodos );
        this.currentID = initialTodos.length + 1;
    }

    /**
     * Return all todos
     * @param timeZone The timezone to use for the date
     * @returns An array of todos
     */
    public getTodos( timeZone :string = 'Asia/Manila') :TodoTable[] {
        const todos :TodoTable[] = SortByDate(this.todos, 'createdAt', true, timeZone );
        return todos;
    }

    /**
     * Get one todo
     * @param id The id of the todo
     * @returns The todo
     * @throws Error if the todo is not found
     */
    public getTodoById( id :number, timeZone :string = 'Asia/Manila' ) :TodoTable | undefined {
    //find if the todo exist
        const todo = this.todos.find( todo => todo.id === id );
        if( !todo )
            throw new Error("Todo not found");

    //then convert the date to human readable
        const sortedTodo     = SortByDate([todo], 'createdAt', true, timeZone );
        return sortedTodo[0];
    }

    /**
     * Add a new todo
     * @param title The title of the todo
     * @param completed Whether the todo is completed
     * @returns the newly created todo
     */
    public addTodo( title :string, completed :boolean = false ) : TodoTable {
        const newTodo :TodoTable = {
            id        : this.currentID++,
            title     : title,
            completed : completed,
            createdAt : new Date().toISOString()
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
    public updateTodo(id :number, title :string, completed :boolean) : TodoTable[] {
        const todo = this.todos.find( todo => todo.id === id );
        if( !todo )
            throw new Error("Todo not found");
        todo.title     = title;
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
    public deleteTodo( id :number ) : TodoTable[] {
        const todo = this.todos.find( todo => todo.id === id );
        if( !todo )
            throw new Error("Todo not found");

        this.todos = this.todos.filter( todo => todo.id !== id );
        return this.todos;
    }
}

/** A todo table object containing all of the function to manage a todo */
const todoTable = new TodosTable();
export default todoTable;
