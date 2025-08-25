import { create } from 'zustand';
import { createSelectors } from './zustandSelector';

interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
    createdAt: string;
}

interface TodosInterface {
    isSending:    boolean;

    /**Tells if loading, this is true during initialization of users todo */
    isLoading:    boolean;

    /**Contains the state of the user todo's */
    todos:        TodoItem[];

    /**Contains the error message. If "" then it has no error */
    errorMessage: string;
    clearErrorMessage: () => void;

    /**Add a todo */
    addTodo:    (todo: string)  => Promise<void>;

    /**Remove a todo */
    removeTodo: (id: number)   => Promise<void>;

    /**Update a todo */
    updateTodo: (id: number, title: string, completed: boolean) => Promise<void>;

    /** Load the user save todos in the Supabase database */
    initializeTodo: () => Promise<void>;
}

const todosState = create<TodosInterface>()((set) => ({
    isSending:      false,
    isLoading:      true,
    todos:          [],
    errorMessage:   '',

    clearErrorMessage() {
        set((state) => ({ errorMessage: '' }));
    },

    addTodo: async (todo: string) => {
        try {
            set((state) => ({ isSending: true }));
            const result = await fetch('/api/todos', 
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title: todo }),
                }
            );
            const data   = await result.json();
            if(data.error)
                throw new Error(data.error);

        //add the new todo in the top so it is lastest one
            set((state) => ({
                todos: [data, ...state.todos],
            }));

        } catch (error: any) {
            set((state) => ({ errorMessage: error.message }));
        }
        finally {
            set((state) => ({ isSending:   false }));
        }
    },
    
    removeTodo: async ( id :number ) => {
        try {
            set((state) => ({ isSending: true }));

            const result = await fetch('/api/todos', 
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: id }),
                }
            );
            const data = await result.json();
            if(data.error)
                throw new Error(data.error);
            
            set((state) => {
                const updatedTodos = state.todos.filter((todo) => todo.id !== id);
                return { todos: updatedTodos };
            });
        }
        catch (error: any) {
            set((state) => ({
                errorMessage: error.message
            }));
        }
        finally {
            set((state) => ({ isSending:   false }));
        }
    },

    initializeTodo: async () => {
        try {
            set((state) => ({ isSending: true }));
            const result = await fetch('/api/todos', 
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            const data   = await result.json();
            if(data.error)
                throw new Error(data.error);
            
            set((state) => ({
                isLoading: false,
                todos:     data,
            }));

        } catch (error: any) {
            set((state) => ({
                isLoading:    false,
                todos:        [],
                errorMessage: error.message
            }));
        }
        finally {
            set((state) => ({ isSending:   false }));
        }
    },

    updateTodo: async (id, title, completed)  => {
        try {
            set((state) => ({ isSending: true }));
            const result = await fetch('/api/todos', 
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id, title, completed }),
                }
            );

            const data   = await result.json();
            if(data.error)
                throw new Error(data.error);

        //update the specific todo
            set((state) => {
                const updatedTodos = state.todos.map((todo) => {
                    if (todo.id === id) {
                        return { ...todo, title, completed };
                    }
                    return todo;
                });
                return { todos: updatedTodos };
            });
        } catch (error: any) {
            set((state) => ({ errorMessage: error.message }));
        }
        finally {
            set((state) => ({ isSending:   false }));
        }
    },


}));

/**A store containing todos
    @member todos - The todos
    @member addTodo - A function to add a todo
    @member removeTodo - A function to remove a todo
 */
const useTodosState = createSelectors(todosState);
export default useTodosState;

