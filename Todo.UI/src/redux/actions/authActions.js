import axios from "axios";
import { logginSuccess } from "../isAuth";
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT, AUTH_END, LOGIN_FAIL } from "../reducer/types";

const API_URL = "http://localhost:5000";
const API_REG_KEY = `${API_URL}/api/auth/register`;
const API_LOGIN_KEY = `${API_URL}/api/auth`;

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
};

export const register = (username, email, password) => (dispatch) => {
  return axios.post(API_REG_KEY, { username, email, password }).then(
    (response) => {
      dispatch({ type: REGISTER_SUCCESS });
      dispatch({ type: REGISTER_FAIL, payload: response.data.message });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({ type: REGISTER_FAIL });
      dispatch({ type: REGISTER_FAIL, payload: message });
      return Promise.reject();
    }
  );
};

export const login = async (dispatch, username, password) => {
  try {
    const payload = {
      email: username,
      password
    };
    const response = await axios.post(API_LOGIN_KEY, payload);
    dispatch(logginSuccess(response));
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  } finally {
    dispatch({ type: AUTH_END });
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
