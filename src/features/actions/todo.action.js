export const TODO_LIST = "TODO_LIST";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const ADD_FILTER = "ADD_FILTER";

export const todoList = (payload) => ({
  type: TODO_LIST,
  payload,
});
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const updateFilter = (payload) => ({
  type: ADD_FILTER,
  payload,
});
