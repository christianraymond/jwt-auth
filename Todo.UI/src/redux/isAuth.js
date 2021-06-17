import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, ADD_TODO, REMOVE_TODO, UPDATE_TODO, SET_TODOS, SET_TODO} from "./reducer/types"

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

 /* ============ */

 export const addTodo = (todo) => {
     return {
         type: ADD_TODO,
         payload: todo,
     }
 }

 export const removeTodo = (id) => {
     return {
         type: REMOVE_TODO,
         payload: id,
     };
 };

 export const updateTodo = (todo) => {
     return {
         type: UPDATE_TODO,
         payload: todo,
     }
 };

 export const setTodos = (todos) => {
     return {
         type: SET_TODOS,
         payload: todos
     }
 };

 export const seTodoById = (todo) => {
     return {
         type: SET_TODO,
         payload: todo,
     }
 }