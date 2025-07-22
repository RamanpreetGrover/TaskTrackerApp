// Provides global task state using Context API and useReducer
import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { taskReducer, initialState } from '../reducers/taskReducer';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  // Load tasks from local storage on mount
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const saved = await AsyncStorage.getItem('TASKS');
        if (saved) {
          dispatch({ type: 'SET_TASKS', payload: JSON.parse(saved) });
        }
      } catch (err) {
        console.error('Load error:', err);
      }
    };
    loadTasks();
  }, []);

  // Save tasks to storage on any update
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('TASKS', JSON.stringify(tasks));
      } catch (err) {
        console.error('Save error:', err);
      }
    };
    saveTasks();
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
