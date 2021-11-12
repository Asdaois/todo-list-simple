import React, { useState } from "react";
import { v4 } from "uuid";
import Todo from "./components/todo/Todo";

export const Priority = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
};

export const TodoPlaceholder = {
  id: v4(),
  name: "Test",
  completed: false,
  priority: Priority.Low,
  dueDate: new Date().toISOString().substring(0, 16),
};

function App() {
  const [todos, setTodos] = useState([TodoPlaceholder]);

  const changeTodo = (todoToChange) => {
    const newTodos = [...JSON.parse(JSON.stringify(todos))].map(todo => {
      if (todo.id === todoToChange.id)
      {
        return todoToChange
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} changeTodo={changeTodo}/>
      ))}
    </div>
  );
}

export default App;
