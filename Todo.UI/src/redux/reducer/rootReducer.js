import { combineReducers } from "redux";

import authReducer from "../reducer/authReducer";
import todoReducer from '../reducer/todoReducer'

export default combineReducers({
  auth: authReducer,
  todos: todoReducer,
});