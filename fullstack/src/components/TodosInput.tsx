import { useState } from "react";
import Input from "./ui/Input";

interface TodosInputProps {
    /**The callback when user types and send the todo */
    onSubmit: (title: string) => void;
    
    /**The loading state, this prvent multiple spawn of the todo */
    isSending: boolean;
}

export default function TodosInput( props :TodosInputProps) {
    const [title, settitle] = useState('');

    function handleSubmit() {
        if(title.length < 1) return;
        props.onSubmit(title);
        settitle('');
    }

    return (
        <>
            <Input
                type="text"
                name="text"
                placeHolder="New todo"
                value={title}
                onChange={(e) => settitle(e.target.value)}
            />

            <button disabled={ props.isSending } onClick={handleSubmit} type="button" className="lg:w-[400px] w-full self-center text-white bg-blue-900 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:py-2.5 py-1  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Add Todo
            </button>
        </>
    )
}