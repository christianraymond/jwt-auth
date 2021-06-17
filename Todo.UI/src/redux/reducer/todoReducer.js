import { SET_TODOS, ADD_TODO, REMOVE_TODO, UPDATE_TODO, } from "./types";

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.todos,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state, action.todo],
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
