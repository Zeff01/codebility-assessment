'use client'

import BackgroundDesign from "@/components/BackgroundDesign";
import TodoHeader       from "@/components/TodoHeader";
import Todos            from "@/components/Todos";
import TodosInput       from "@/components/TodosInput";
import { LoadingIcon }  from "@/components/ui/Loadingicon";
import Panel            from "@/components/ui/Panel";
import useTodosState    from "@/store/todo";
import { useEffect }    from "react";
import { useSession }   from "next-auth/react";
import { useRouter }    from "next/navigation";
import DialogBox        from "@/components/ui/Dialogbox";

export default function Home() {
    const router = useRouter();
    const TodoDb = useTodosState();
    const { data: session, status }   = useSession();
    
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    useEffect(() => {
        if (status === "authenticated") {
            TodoDb.initializeTodo();
        }
    }, [status]);

    if (status === "loading") {
        return (
            <BackgroundDesign>
                <Panel className="lg:h-[70vh] h-[80vh] lg:w-[700px] w-[80%] mx-auto flex items-center justify-center">
                    <LoadingIcon />
                </Panel>
            </BackgroundDesign>
        );
    }

    return (
        <BackgroundDesign>
            <Panel className="lg:h-[70vh] h-[80vh] lg:w-[700px] w-[80%] mx-auto">
                <div className="flex flex-col h-full">
                    <TodoHeader />

                    <div className="flex-1 overflow-y-auto lg:px-5 px-2 py-2 m-2">
                        { TodoDb.isLoading ? 
                            <LoadingIcon />
                            :
                            <Todos
                                onUpdate={ async (id, title, completed) => {
                                    TodoDb.updateTodo(id, title, completed);
                                }}
                                onDelete={ async (id) => {
                                    TodoDb.removeTodo(id);
                                }}
                            />
                        }
                    </div>

                    <div className="flex sm:flex-row flex-col gap-4 px-5 ">
                        <TodosInput
                            onSubmit={ async (title) => {
                                TodoDb.addTodo( title )
                            }}
                            isSending={ TodoDb.isSending || TodoDb.isLoading }
                        />
                    </div>
                </div>
            </Panel>

            <DialogBox
                isOpen={ TodoDb.errorMessage.length > 0 }
                onClose={() => TodoDb.clearErrorMessage() }
                title="Error"
                message={ TodoDb.errorMessage }
            />
        </BackgroundDesign>
    );
}
