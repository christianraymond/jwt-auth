import {
  SET_TODOS,
  SET_TODO,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from "./types";

export const initialState = {
  todos: [
    { id: 1, description: "todo one", isCompleted: false }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state, action.payload],
      };
    case SET_TODOS:
      return {
        ...state,
        todos: [...action.payload],
      };
    case SET_TODO:
      return {
        ...state,
        todos: action.todos,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.id),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.todo.id) {
            return action.todo;
          } else {
            return todo;
          }
        }),
      };
    default: {
      return state;
    }
  }
};
