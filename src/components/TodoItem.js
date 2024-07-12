// src/components/TodoItem.js
import React from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
    <li className="flex justify-between items-center mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
        className="mr-2"
      />
      <span className={`flex-grow ${todo.completed ? 'line-through' : ''}`}>
        {todo.text}
      </span>
      <button
        onClick={() => removeTodo(index)}
        className="bg-blue-700 text-white p-1 rounded ml-2 hover:bg-blue-800 transition duration-300"
      >
        Remover
      </button>
    </li>
  );
}

export default TodoItem;
