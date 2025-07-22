// Main screen that manages task input, filtering, category selection, and list rendering
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import useTasks from '../hooks/useTasks';
import TaskItem from '../components/TaskItem';

// Task categories and their colors
const categories = {
  Work: '#f44336',
  Home: '#4caf50',
  School: '#2196f3',
  Other: '#9c27b0',
};

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('Work');

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    dispatch({
      type: 'ADD_TASK',
      payload: {
        id: uuid.v4(), // Generate a unique ID for the task
        title: newTask,
        completed: false,
        category: selectedCategory,
      },
    });

    setNewTask('');
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Tracker</Text>

      {/* Input Field + Add Button */}
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter a task"
          value={newTask}
          onChangeText={setNewTask}
          style={styles.input}
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>

      {/* Category Selection */}
      <View style={styles.categoryRow}>
        {Object.keys(categories).map(cat => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.selectedCategory,
              { backgroundColor: categories[cat] + '33' }
            ]}
          >
            <Text style={{ fontWeight: selectedCategory === cat ? 'bold' : 'normal' }}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterRow}>
        {['all', 'active', 'completed'].map(type => (
          <TouchableOpacity
            key={type}
            onPress={() => setFilter(type)}
            style={[
              styles.filterButton,
              filter === type && styles.activeFilter
            ]}
          >
            <Text style={filter === type ? styles.activeText : styles.inactiveText}>
              {type.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} categoryColor={categories[item.category]} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No tasks to show.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#f8f8f8' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  inputRow: { flexDirection: 'row', marginBottom: 15 },
  input: { flex: 1, borderWidth: 1, borderColor: '#aaa', padding: 10, marginRight: 10, borderRadius: 5 },
  categoryRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginBottom: 10 },
  categoryButton: { padding: 8, borderRadius: 5 },
  selectedCategory: { borderColor: '#000', borderWidth: 1 },
  filterRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  filterButton: { padding: 8, borderRadius: 5, backgroundColor: '#ddd' },
  activeFilter: { backgroundColor: '#2196f3' },
  activeText: { color: '#fff', fontWeight: 'bold' },
  inactiveText: { color: '#333' },
  empty: { textAlign: 'center', color: '#999', marginTop: 20 },
});

export default TaskList;
