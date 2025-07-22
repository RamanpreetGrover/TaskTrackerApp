// Main entry point of the app that wraps everything in TaskProvider
import React from 'react';
import { TaskProvider } from './src/contexts/TaskContext';
import TaskList from './src/screens/TaskList';

export default function App() {
  return (
    // Providing global task state to the app
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
}
