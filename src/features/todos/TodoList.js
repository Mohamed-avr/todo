// src/features/todos/TodoList.js
"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./todoSlice";

export default function TodoList() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#eee",
        padding: "20px",
      }}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
    >
      <h1
        style={{
          color: "#222",
          fontSize: "2rem",
          textAlign: "left",
          marginBottom: "20px",
        }}
      >
        Todo List
      </h1>

      <div className="flex mb-4">
        <input
          style={{
            borderRadius: "4px 0 0 4px",
            height: "40px",
            textIndent: "10px",
            width: 300,
          }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="Enter a new todo"
        />
        <button
          onClick={handleAddTodo}
          style={{
            backgroundColor: "#333",
            color: "white",
            borderRadius: "0 4px 4px 0",
            height: "40px",
            padding: "0 20px",
          }}
        >
          Add Todo
        </button>
      </div>
      <span> {todos.length}</span>
      <ul
        style={{
          marginTop: 20,
        }}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              backgroundColor: "#ccc",
              color: "white",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                justifyItems: "center",
                alignItems: "center",
                display: "flex",
              }}
              className="flex items-center"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="mr-2"
                style={{
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                  borderRadius: " 4px",
                }}
              />
              <span
                className={`${
                  todo.completed ? "line-through text-gray-500 pl-4" : ""
                }`}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
