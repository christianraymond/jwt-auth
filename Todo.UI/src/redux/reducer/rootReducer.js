import { combineReducers } from "redux";
import * as fromTodo from './todoReducer'

import authReducer from "../reducer/authReducer";

export const initialState = {
  todos: fromTodo.initialState
};

export default combineReducers({
  auth: authReducer,
  todos: fromTodo.reducer,
});