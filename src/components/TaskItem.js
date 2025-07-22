// Renders a single task item with complete toggle and delete button
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import useTasks from '../hooks/useTasks';

const TaskItem = ({ task, categoryColor }) => {
  const { dispatch } = useTasks();

  const toggleComplete = () => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: task.id });
  };

  const deleteTask = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={toggleComplete} style={styles.textContainer}>
        <View style={[styles.dot, { backgroundColor: categoryColor || '#ccc' }]} />
        <Text style={[styles.text, task.completed && styles.completed]}>
          {task.title}
        </Text>
      </TouchableOpacity>
      <Button title="Delete" color="#d11a2a" onPress={deleteTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default TaskItem;
