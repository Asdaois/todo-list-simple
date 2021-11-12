import React from "react";
import TimeAgo from "timeago-react";

const TodoShow = ({ todo, handleDoubleClick }) => {
  return (
    <div className="flex">
      <input
        className="self-center"
        type="checkbox"
        name="completed"
        id=""
        value={todo.completed}
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
