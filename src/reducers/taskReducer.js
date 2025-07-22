// Reducer function to handle task state logic centrally
export const initialState = [];

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      // Adds a new task object to the array
      return [...state, action.payload];

    case 'EDIT_TASK':
      // Updates a task by ID
      return state.map(task =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );

    case 'DELETE_TASK':
      // Removes a task by ID
      return state.filter(task => task.id !== action.payload);

    case 'TOGGLE_COMPLETE':
      // Toggles task completion status
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );

    case 'SET_TASKS':
      // Loads tasks from storage into state
      return action.payload;

    default:
      return state;
  }
};
