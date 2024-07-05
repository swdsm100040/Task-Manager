import React, { createContext, useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = async (id, status) => {
    const updatedTask = await updateTask(id, { status });
    setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
  };

  const deleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTaskStatus, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
