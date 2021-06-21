import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_END,
  LOGOUT,
} from "./types";

const initialState = {
  token: localStorage.getItem("token"),
  user: {},
  isLoggedIn: !!localStorage.getItem("token"),
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        token: action.payload.data.token,
        user: action.payload.data,
        isLoggedIn: true,
        error: false,
        loading: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
        loading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        token: action.payload.data.token,
        isLoggedIn: true,
        user: action.payload,
        loading: false,
        error: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
        loading: true,
      };
    case AUTH_END:
      return { ...state, loading: false };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
