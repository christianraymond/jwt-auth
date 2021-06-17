
import React from 'react'
import TodoItem from './TodoItem';

export default function TodoList({ todos, onTodoUpdating, onTodoDeleting }) {
    const todoList = todos.length
    ? (
        todos.map((todo, index) => (
            <TodoItem key={index} todo={todo}
            onTodoUpdating={onTodoUpdating}
            onTodoDeleting={onTodoDeleting}
            />
        ))
    ) :
    (
        <p className="center">You don't have any todos :)</p>
    )
    return (
        <div>
            <h1 className="center gray-text">Todos</h1>
            <ul className="collection">
               {todoList}
            </ul>
        </div>
    )
}

