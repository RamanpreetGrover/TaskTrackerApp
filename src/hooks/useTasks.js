// Custom hook to access task context easily
import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used inside TaskProvider');
  }
  return context;
};

export default useTasks;
