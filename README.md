# 📋 Task Tracker App – Lab 7 (State Management)

This React Native app was built for **Lab 7 – State Management** in the Cross-Platform Mobile App Development course. It demonstrates best practices for managing application state using React Native's built-in tools and persistent storage.

---

## 🧠 Lab Objectives

- Use `useState` for local component-level state
- Use `Context API` for global state access
- Use `useReducer` to manage complex state logic
- Build a custom hook `useTasks()` to simplify context access
- Implement `AsyncStorage` for data persistence
- Include category tagging and filtering functionality

---

## ✅ Features

- ➕ Add tasks with category selection (Work, Home, School, Other)
- ✅ Mark tasks as complete/incomplete
- ❌ Delete tasks
- 🎨 Color-coded categories
- 🔍 Filter by **All**, **Active**, or **Completed**
- 💾 Persistent storage using `AsyncStorage`
- 🧱 Clean component-based architecture

---

## 🗂️ Folder Structure

src/
├── components/ # TaskItem.js
├── contexts/ # TaskContext.js
├── hooks/ # useTasks.js
├── reducers/ # taskReducer.js
├── screens/ # TaskList.js

yaml
Copy
Edit

---

## 🧠 State Management Techniques

| Tool              | Used For                           |
|------------------|------------------------------------|
| `useState`       | Text input, filters, category selection |
| `useReducer`     | Task logic: add, delete, toggle complete |
| `Context API`    | Global task list and dispatch      |
| `Custom Hook`    | `useTasks()` to abstract context logic |
| `AsyncStorage`   | Saving and loading tasks persistently |

---

## 🚀 How to Run

Make sure you have [Node.js](https://nodejs.org/) and [Expo CLI](https://docs.expo.dev/get-started/installation/) installed.

```bash
git clone https://github.com/RamanpreetGrover/TaskTrackerApp.git
cd TaskTrackerApp
npm install
npx expo start
