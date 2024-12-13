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
        backgroundColor: "#fff",
        padding: "20px",
        flex: 1,
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/*  todos start */}
      <div
        style={{
          width: 1800,
          backgroundColor: "#f4f4f4",
          border: "1px solid #f1f1f1",
          height: 880,
          borderRadius: 12,
          marginBottom: 12,
        }}
      >
        {/*  heading  */}
        <div
          style={{
            margin: 24,
          }}
        >
          <h1
            style={{
              color: "#222",
              fontSize: "1rem",
              textAlign: "center",
              color: "#666",
            }}
          >
            Hi, mohamed
          </h1>
          <h1
            style={{
              color: "#222",
              fontSize: "1.3rem",
              textAlign: "center",
              fontWeight: "200",
              marginTop: "8px",
            }}
          >
            What are your tasks for today?
          </h1>
        </div>
        {/*  todos */}
        <ul
          style={{
            marginTop: 20,
            minHeight: "640px",
            padding: "20px 60px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "flex-start",
            alignContent: "flex-start",
            flexWrap: "wrap",
            marginTop: 40,
          }}
        >
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="card"
              style={{
                backgroundColor: "#f9f9f9",
                border: "1px solid #f3f3f3",
                width: "600px",
                height: "120px",
                color: "white",
                padding: "14px",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "8px",
                alignItems: "flex-start",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  justifyItems: "center",
                  alignItems: "flex-start",
                  display: "flex",
                }}
              >
                <h4
                  style={{
                    color: "#333",
                    fontSize: "24px",
                    textAlign: "center",
                  }}
                >
                  {todo.text}
                </h4>
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                style={{
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px",
                  color: "#777",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {/*  actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: 16,
              width: "800px",
              height: "52px",

              marginBottom: 8,
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <input
              onFocus={(e) => e.target.select()}
              style={{
                borderRadius: "12px",
                height: "52px",
                textIndent: "16px",
                outlineColor: "#eee",

                width: 600,
                // boxShadow:
                //   "inset 0 0.0625em 0 0 #f4f4f4, 0 0.0625em 0 0 #efefef, 0 0.125em 0 0 #ececec, 0 0.25em 0 0 #e0e0e0, 0 0.3125em 0 0 #dedede, 0 0.375em 0 0 #dcdcdc, 0 0.425em 0 0 #cacaca, 0 0.425em 0.5em 0 #cecece",
                transition: "0.15s ease",
              }}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enjoy creating your todo"
            />

            <button onClick={handleAddTodo} className="btn">
              <svg width="22" height="22" fill="#333" viewBox="0 0 256 256">
                <path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
