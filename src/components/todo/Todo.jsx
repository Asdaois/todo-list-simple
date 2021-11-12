import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoShow from "./TodoShow";

const Todo = ({ todo, changeTodo }) => {
  const [isTodoShown, setTodoShown] = useState(true);

  const showForm = () => {
    setTodoShown(false);
  };

  const showTodo = () => {
    setTodoShown(true);
  };

  const handleChangeTodo = (newTodo) => {
    showTodo();
    changeTodo(newTodo);
  };

  return (
    <div>
      {isTodoShown ? (
        <TodoShow todo={todo} handleDoubleClick={showForm} />
      ) : (
        <TodoForm handleSubmitNewTodo={handleChangeTodo} todoValues={todo} />
      )}
    </div>
  );
};

export default Todo;
