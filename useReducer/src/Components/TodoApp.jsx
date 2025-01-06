// eslint-disable-next-line no-unused-vars
import React, { useReducer, useState } from 'react';

// 1. Define the initial state
const initialState = [];

// 2. Create a reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'remove':
      return state.filter(todo => todo.id !== action.payload);
    case 'toggle':
      return state.map(todo => 
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      throw new Error('Unknown action type');
  }
}

function TodoApp() {
  // 3. Use useReducer with the reducer and initial state
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  
  // 4. Use useState to manage the new task input
  const [newTodo, setNewTodo] = useState('');

  // Handler to add a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    dispatch({ type: 'add', payload: newTodo });  // Sending the new todo text as payload
    setNewTodo(''); // Clear input after adding
  };

  // Handler to remove a todo by id
  const handleRemoveTodo = (id) => {
    dispatch({ type: 'remove', payload: id });  // Sending the todo id as payload
  };

  // Handler to toggle the completion status of a todo
  const handleToggleTodo = (id) => {
    dispatch({ type: 'toggle', payload: id });  // Sending the todo id as payload
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
