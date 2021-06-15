import React, { Component } from 'react';
import { connect } from 'react-redux';


import TodoList from './TodoList';
import TodoItem from './TodoItem'
import { getTodos } from '../../redux/selectors/todoSelectors';

 class TodoPage extends Component {
    render() {
        return (
            <div className="container">
                <TodoList todos={this.props.todos}/>
                {/* <TodoItem/> */}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: getTodos(state)
    }
}

export default connect(mapStateToProps)(TodoPage);