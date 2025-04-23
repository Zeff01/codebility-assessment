'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, TrashIcon, PencilIcon } from 'lucide-react';
import TodoDetail from './_components/todd-detail';
import type { Todo } from '@/lib/types/todo.type';
import { useStore } from '@/app/lib/store/app.store';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function TodoDashboard() {
  const { todos, fetchTodos, getTodoById, deleteTodo, isLoading, selectedTodo, clearSelectedTodo } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  
  useEffect(() => {
    if(!isLoading){
      fetchTodos();
    }
  }, []);

  const handleCreateNew = () => {
    clearSelectedTodo();
    setEditMode(false);
    setIsModalOpen(true);
  };

  const handleEdit = (id: string) => {
    getTodoById(id);
    setEditMode(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    clearSelectedTodo();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      await deleteTodo(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">My Todo List</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCreateNew}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          <span>New Todo</span>
        </motion.button>
      </div>

      {isLoading && (
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
        </div>
      )}

      {!isLoading && todos.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 bg-gray-50 rounded-lg"
        >
          <p className="text-gray-500">No todos found. Create your first todo!</p>
        </motion.div>
      )}

      <AnimatePresence>
        {!isLoading && todos.length > 0 && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {todos.map((todo: Todo) => (
              <motion.div
                key={todo.id}
                variants={item}
                layout
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">{todo.title}</h3>
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleEdit(todo.id)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <PencilIcon className="w-5 h-5 text-blue-600" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(todo.id)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <TrashIcon className="w-5 h-5 text-red-600" />
                    </motion.button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{todo.description}</p>
              
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <TodoDetail
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            editMode={editMode}
            todo={selectedTodo || undefined}
          />
        )}
      </AnimatePresence>
    </div>
  );
}