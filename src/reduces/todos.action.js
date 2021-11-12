export const TodoTypes = {
  COMPLETE: "COMPLETE",
  UPDATE: "UPDATE",
  DELETE: "DELETE"
}

export const completeTodo = (id) => {
  return {
    type: TodoTypes.COMPLETE,
    payload: {id}
  }
}

export const updateTodo = (id, todoUpdated) => {
  return {
    type: TodoTypes.UPDATE,
    payload: {id, todoUpdated}
  }
}