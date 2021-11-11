import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoShow from "./TodoShow";

const Todo = ({ todo }) => {
  const [isTodoShown, setTodoShown] = useState(true);

  const showForm = () => {
    setTodoShown(false);
  };

  const showTodo= () => {
    setTodoShown(true);
  }

  return (
    <div>
      {isTodoShown ? (
        <TodoShow todo={todo} handleDoubleClick={showForm} />
      ) : (
        <TodoForm handleChange={showTodo} />
      )}
    </div>
  );
};

export default Todo;
