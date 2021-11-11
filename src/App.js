import React, { useReducer, useState } from "react";
import Todo from "./components/todo/Todo";
import TodoForm from "./components/todo/TodoForm";
import { getKeysFromObject } from "./helpers/enumHelpers";

export const Priority = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
};

export const TodoPlaceholder = {
  name: "Test",
  completed: false,
  priority: Priority.LOW,
  dueDate: Date.now(),
};

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="">
      <Todo todo={TodoPlaceholder} />
    </div>
  );
}

export default App;
