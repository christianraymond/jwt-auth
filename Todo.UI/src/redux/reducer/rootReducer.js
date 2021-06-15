import { combineReducers } from "redux";
import auth from "../reducer/authReducer";

import authReducer from "../reducer/authReducer";

export default combineReducers({
  auth: authReducer,
});