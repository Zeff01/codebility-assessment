import { create } from 'domain';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Todo {
    constructor() {
        this.filePath = path.join(__dirname, 'todos.json');
        this.init();
    }

    async init() {
        try {
            await fs.access(this.filePath);
        } catch (error) {
            await this.saveToFile([]);
        }
    
    
    }

    async readFromFile () {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading file:', error);
            return [];
        
        }
    }


    async saveToFile(todos) {
        try {
            await fs.writeFile(this.filePath, JSON.stringify(todos, null, 2));
            return true;   
        } catch (error) {
            console.error('Error saving file:', error);
            return false;
        }
        }

    async getAll() {
        return await this.readFromFile();
    }
       // Get next available ID
    async getNextId() {
        const todos = await this.readFromFile();
        if (todos.length === 0) return 1;
        const maxId = Math.max(...todos.map(todo => todo.id));
        return maxId + 1;
    }

    async getById(id) {
        const todos =await this.readFromFile();
        return todos.find(todo => todo.id === parseInt (id));
    }

    async create(todoData) {
        const todos = await this.readFromFile();
        const nextId = await this.getNextId();
        const newTodo = {
            id: nextId,
            title: todoData.title,
            completed: false,
            createdAt: new Date().toISOString()
        
        };
        todos.push(newTodo);
        await this.saveToFile(todos);
        return newTodo;
    }

    async update(id, updatedData) {
        const todos = await this.readFromFile();
        const index = todos.findIndex(todo => todo.id === parseInt(id));
        if (index === -1) {
            return null;
        }
        todos[index] = {
            ...todos[index],
            ...updatedData,
            updatedAt: new Date().toISOString(),
        };
        await this.saveToFile(todos);
        return todos[index];


    }

    async delete(id) {
        const todos = await this.readFromFile();
        const filteredTodos = todos.filter(todo => todo.id !== parseInt(id));
        await this.saveToFile(filteredTodos);
        return true;
    }

    async getStats() {
        const todos = await this.readFromFile();
        const completed = todos.filter(todo => todo.completed).length;
        return {
            total: todos.length,
            completed,
            pending: todos.length - completed,
          
        };
    }

}

const todoModel = new Todo();
export default todoModel;