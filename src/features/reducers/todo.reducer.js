import { ADD_TODO, ADD_FILTER } from "../actions/todo.action";

const initialState = {
  tasks: [],
  filter: "",
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: action.payload,
      };
    case ADD_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
