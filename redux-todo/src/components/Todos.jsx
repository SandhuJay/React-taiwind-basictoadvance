import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditText('');
    setEditId(null);
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}
            <div>
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="inline-flex w-16 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 mr-2"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditText(todo.text);
                    setEditId(todo.id);
                  }}
                  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 mr-2"
                >
                  ✏️
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
