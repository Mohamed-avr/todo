// src/app/page.js
import TodoList from "../features/todos/TodoList";

export default function Home() {
  return (
    <main className="container mx-auto p-4   ">
      <TodoList />
    </main>
  );
}
