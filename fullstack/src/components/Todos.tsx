import formatDateToReadable from "@/lib/formatDate";
import useTodosState from "@/store/todo";
import { useState }  from "react";
import DialogTextbox from "./ui/DialogTextbox";
import DialogPrompt  from "./ui/DialogPrompt";

interface TodosInterface {
    onUpdate: ( todoId: number, title: string, completed: boolean ) => Promise<void>;
    onDelete: ( todoId: number ) => Promise<void>;
}

export default function Todos(props: TodosInterface) {
    const [isUpdating, setIsUpdating]       = useState(false);
    const [updatingID, setUpdatingID]       = useState(0);
    const [updatingTitle, setUpdatingTitle] = useState("");
    const [updatingCompleted, setUpdatingCompleted] = useState(false);
    const [isDeleting, setIsDeleting]       = useState(false);
    const { todos, isLoading, isSending }   = useTodosState();

    async function handleUpdate( id :number, title :string, completed :boolean ) {
        await props.onUpdate(id, title, completed);
    }

    async function handleDelete( id :number ) {
        await props.onDelete(id);
    }

    return (
        <ul>
        { todos.map(( todo, index ) => {
            return (
                <li key={ index } className="flex flex-row gap-3 relative">
                    <button 
                        disabled={ isLoading || isSending }
                        onClick={() => handleUpdate(todo.id, todo.title, !todo.completed)}
                        className="absolute -mt-1 cursor-pointer w-10 h-10 hover:w-11 hover:h-11 hover:opacity-70">
                        <img
                            src={ todo.completed ? "/checked.png" : "/uncheck.png" }
                            alt="checkbox"
                            className="w-full h-full"
                        />
                    </button>

                    <button 
                        disabled={ isLoading || isSending }
                        onClick={() => {
                            setIsUpdating(true);
                            setUpdatingID(todo.id);
                            setUpdatingTitle(todo.title);
                            setUpdatingCompleted(todo.completed);
                        }}
                        className="ml-12 cursor-pointer mt-2 w-5 h-5 hover:opacity-50"
                    >
                        <img
                            src="/edit.png"
                            alt="edit"
                            className="w-full h-full"
                        />
                    </button>

                    <div className="flex-1 mt-1">
                        <h2 className=" text-xl">
                            { todo.title }
                        </h2>
                        <p className="text-sm text-gray-500 opacity-80">
                            { formatDateToReadable(todo.createdAt) }
                        </p>
                    </div>
                    
                    <button
                        onClick={() => {
                            setIsDeleting(true);
                            setUpdatingID(todo.id);
                        }}
                        disabled={ isLoading || isSending }
                        className="cursor-pointer w-10 h-10 hover:opacity-50">
                        <img
                            src="/delete.png"
                            alt="delete"
                            className="w-full h-full"
                        />
                    </button>
                </li>
            );
        })}

        <DialogTextbox 
            isOpen={isUpdating}
            onClose={() => setIsUpdating(false)}
            title="Update Todo"
            message={updatingTitle}
            onSave={(newTitle :string) => {
                handleUpdate(updatingID, newTitle, updatingCompleted);
                setIsUpdating(false);
            }}
        />

        <DialogPrompt
            isOpen={isDeleting}
            onClose={() => setIsDeleting(false)}
            title="Delete Todo"
            message="Are you sure you want to delete this todo?"
            onConfirm={() => {
                handleDelete(updatingID);
                setIsDeleting(false);
            }}
        />

    </ul>
    )
}
