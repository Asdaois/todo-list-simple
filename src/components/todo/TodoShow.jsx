import React from "react";
import TimeAgo from "timeago-react";
import { completeTodo } from "../../reduces/todos.action";

const TodoShow = ({ todo, handleDoubleClick, dispatch }) => {
  return (
    <div className="flex">
      <input
        className="self-center"
        type="checkbox"
        name="completed"
        value={todo.completed}
        onClick={() => dispatch(completeTodo(todo.id))}
      />
      <div className="" onDoubleClick={handleDoubleClick}>
        <span>{todo.name}-</span>
        <TimeAgo datetime={todo.dueDate} />
        <span>{todo.priority}</span>
      </div>
    </div>
  );
};

export default TodoShow;
