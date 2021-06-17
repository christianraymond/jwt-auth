import React from "react";

export default function TodoItem({ todo, onTodoUpdating, onTodoDeleting }) {
  return (
    <div>
      <li className="collection-item" key={todo.id}>
        <div>
          <a
            onClick={() =>
              onTodoUpdating({
                id: todo.id,
                description: todo.description,
                isComplete: !todo.isComplete,
              })
            }>
            {todo.isComplete ? (
              <span
                style={{ textDecoration: "line-through" }}
                className="grey-text lighten-2">
                {todo.description}
              </span>
            ) : (
              <span className="black-text darken-2">{todo.description}</span>
            )}
          </a>
          <a
            onClick={() => onTodoDeleting(todo.id)}
            className="secondary-content">
            <i className="badge red-text darken-2">delete</i>
          </a>
        </div>
      </li>
    </div>
  );
}
