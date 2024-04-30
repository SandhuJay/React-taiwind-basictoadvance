import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

function AddTodo({ todo }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // If a todo object is provided, pre-fill the input field
    if (todo) {
      setInput(todo.text);
    }
  }, [todo]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return; // Prevent adding empty todos
    }
    if (todo) {
      // If in edit mode, dispatch the updateTodo action
      dispatch(updateTodo({ id: todo.id, text: input }));
    } else {
      // If in add mode, dispatch the addTodo action
      dispatch(addTodo(input));
    }
    setInput(''); // Clear the input field
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {todo ? '✏️' : 'Add Todo'}
      </button>
    </form>
  );
}

export default AddTodo;
