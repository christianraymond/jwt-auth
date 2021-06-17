import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { getTodos } from "../../redux/selectors/todoSelectors";
import {
  startAddingTodo,
  startDeletingTodo,
  startSettingTodos,
  startUpdatingTodo,
} from "../../redux/actions/todoActions";

class TodoPage extends Component {
  componentDidMount(){
    this.props.startAddingTodo();
  }
  render() {
    return (
      <div className="container">
        <TodoList
          todos={this.props.todos}
          onTodoUpdating={this.props.startAddingTodo}
          onTodoDeleting={this.props.startDeletingTodo}
        />
        <AddTodoForm handleSubmit={this.props.startAddingTodo}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddingTodo: bindActionCreators(startAddingTodo, dispatch),
  startDeletingTodo: bindActionCreators(startDeletingTodo, dispatch),
  startUpdatingTodo: bindActionCreators(startUpdatingTodo, dispatch),
  startSettingTodos: bindActionCreators(startSettingTodos, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
