import React from "react";
import { Priority } from "../../App";
import { getKeysFromObject } from "../../helpers/enumHelpers";

const getPriorityOptions = () =>
  getKeysFromObject(Priority).map((value) => {
    return (
      <option name="" id="">
        {value}
      </option>
    );
  });

const TodoForm = ({ handleChange }) => {
  return (
    <div className="todo">
      <form action="">
        <input type="text" name="name" placeholder="Input a name" />
        <select>{getPriorityOptions()}</select>
        <div className="">
          <label>Due Time:</label>
          <input type="datetime-local" />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleChange();
          }}
        >
          Change
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
