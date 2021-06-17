import axios from "axios";
import {
  addTodo,
  removeTodo,
  setTodos,
  updateTodo,
  seTodoById,
} from "../../redux/isAuth";
const API_URL = "http://localhost:5000";
const TODO_API_KEY = `${API_URL}/api/todos`;

const userToken = (token) => {
  return {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
};

export const startAddingTodo = (todo, token) => {
  return (dispatch, getState) => {
    axios
      .post(`${TODO_API_KEY}`, { ...todo }, userToken(token))
      .then((response) => {
        dispatch(addTodo(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const startDeletingTodo = (id) => {
  return (dispatch, getState) => {
    axios
      .delete(`${TODO_API_KEY}/${id}`)
      .then((response) => {
        dispatch(removeTodo(id));
      })
      .catch((error) => console.log(error));
  };
};

export const startUpdatingTodo = (todo) => {
  return (dispatch, getState) => {
    axios
      .put(`${TODO_API_KEY}/${todo.id}/IsComplete`, todo)
      .then((response) => {
        dispatch(updateTodo(todo));
      })
      .catch((error) => console.log(error));
  };
};

export const startSettingTodos = () => {
  return (dispatch, getState) => {
    axios
      .get(`${TODO_API_KEY}`)
      .then((response) => {
        dispatch(setTodos(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const startSettingTodoById = (id) => {
  return (dispatch, getState) => {
    axios
      .get(`${TODO_API_KEY}/${id}`)
      .then((response) => {
        dispatch(seTodoById(response.data));
      })
      .catch((error) => console.log(error));
  };
};
