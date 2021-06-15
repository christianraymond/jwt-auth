import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "./reducer/types"

export const logginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    }
}

export const logginFail = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}

export const registerSuccess = (user) => {
    return {
        type: REGISTER_SUCCESS,
        payload: user,
    }
}

export const registernFail = (error) => {
    return {
        type: REGISTER_FAIL,
        payload: error
    }
}

export const logout = () => {
    return {
      type: LOGOUT,
    };
  };