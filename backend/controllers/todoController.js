import express from "express";
import todoModel from "../models/todo.js";


//List Todo
export const listTodos = async (req, res) => {
   try {
        const todos = await todoModel.getAll();
        res.json({
            success: true,
            data: todos,
            count: todos.length
        });

   } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching todos",
            error: error.message
        })
   }
};

//list by id
export const listTodoById = async (req, res) => {
    try {
        const todo = await todoModel.getById(req.params.id);
        
        //todo does not exsist
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }
        res.json({
            success: true,
            data: todo
        });
        

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching todo",
            error: error.message })
    }
};

//create
export const createTodo = async (req, res) => {
    try {
        const {title} = req.body;
        
        //null validation
        if(!title || title.trim() === ' ')
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        
        const newTodo = await todoModel.create({
            title: title.trim()
        });


        res.status(201).json({
            success: true,
            message: 'Todo created successfully',
            data: newTodo
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating todo",
            error: error.message
        })
    }
};

//update
export const updateTodo = async (req, res) => {
    try {
        const update = {}
        if(req.body.title) update.title = req.body.title.trim();
        if(req.body.completed !== undefined) update.completed = req.body.completed;

        const updatedTodo = await todoModel.update(req.params.id, update);

        if (!updatedTodo) {
            return res.status(400).json({
                success: false,
                message: "Todo not found"
            
            })
        }
        res.json({
            success: true,
            message: "Todo updated successfully",
            data: updatedTodo
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating todo",
            error: error.message
        })
        
    }
};

//delete
export const deleteTodo = async (req, res) => {
    try {
    const deleted = await todoModel.delete(req.params.id);
    
    if(!deleted) {
        return res.status(404).json({
            success: false,
            message: "Todo not found"
        });
    }
        res.json({
            success: true,
            message: "Todo deleted successfully"
        });
    

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting todo",
            error: error.message
        })
    }
};