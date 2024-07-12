// src/components/TodoForm.js
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 flex-grow mr-2 rounded"
        placeholder="Agrega una nueva tarea"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">Añadir Tarea</button>
    </form>
  );
}

export default TodoForm;
