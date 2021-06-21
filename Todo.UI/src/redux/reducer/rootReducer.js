import { combineReducers } from "redux";
import * as fromTodo from './todoReducer'

import authReducer from "../reducer/authReducer";
import todoReducer from "../reducer/todoReducer";


export const initialState = {
  todos: fromTodo.initialState
};

export default combineReducers({
  auth: authReducer,
  todos: todoReducer,
  // todos: fromTodo.reducer,
});