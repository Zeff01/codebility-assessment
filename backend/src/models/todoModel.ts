import { ITodo } from "../types/todo"

class TodoModel {
    private todos: ITodo[] = []
    private nextId: number = 1

    findAll(): ITodo[] {
        return [...this.todos]
    }

    findById(id: number): ITodo | undefined {
        return this.todos.find(todo => todo.id === id)
    }

    create(title: string): ITodo {
        const newTodo: ITodo = {
            id: this.nextId++,
            title,
            isCompleted: false,
            createdAt: new Date()
        }

        this.todos.push(newTodo)
        return newTodo
    }

    update(id: number, title: string): ITodo {
        const todo = this.findById(id)
        if (!todo) {
            throw new Error("Todo not found")
        }

        todo.title = title
        return todo
    }

    delete(id: number): ITodo {
        const todo = this.findById(id)
        if (!todo) {
            throw new Error("Todo not found")
        }

        this.todos = this.todos.filter(todo => todo.id !== id)
        return todo
    }
}

const todoModel = new TodoModel()
export default todoModel