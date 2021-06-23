import React, {useEffect} from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onTodoUpdating, onTodoDeleting }) => {

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoList = todos.length ? (
    Object(
      todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onTodoUpdating={onTodoUpdating}
          onTodoDeleting={onTodoDeleting}
        />
      ))
    )
  ) : (
    <p className="center">You don't have any todos :)</p>
  );
  return (
    <div>
      <h1 className="center gray-text">Todos</h1>
      <ul className="collection">{todoList}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    todos: state.todos.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
