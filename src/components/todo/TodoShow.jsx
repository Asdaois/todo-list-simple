import React from 'react'
import { Todo } from '../../App'

const TodoShow = ({ todo, handleDoubleClick }) => {
  return (
    <div onDoubleClick={handleDoubleClick}>
      <input type="checkbox" name="completed" id="" value={todo.completed} />
      <span >{todo.name}</span>
    </div>
  )
}

export default TodoShow
