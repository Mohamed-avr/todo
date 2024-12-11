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
        flex: 1,
        width: "100vw",
        height: "100vh",
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
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

      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            borderRadius: "8px",
            height: "52px",
            textIndent: "10px",
            outlineColor: "#eee",
            width: 300,
          }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enjoy creating your todo"
        />

        <button
          onClick={handleAddTodo}
          style={{
            backgroundColor: "#333",
            color: "white",
            borderRadius: "50%",
            height: "45px",
            width: "45px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg width="24" height="24" fill="#fff" viewBox="0 0 256 256">
            <path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path>
          </svg>
        </button>
      </div>
      <span> {todos.length}</span>
      {/*  todos part */}
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
