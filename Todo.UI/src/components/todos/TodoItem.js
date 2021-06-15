import React from 'react'

export default function TodoItem({ todo }) {
    return (
        <div>
            <li className="collection-item" key={todo.id}>
                <div>
                    <a href="#!">
                        {todo.isComplete ?
                            <span style={{ textDecoration: "line-through" }} className="grey-text lighten-2">
                                {todo.description}
                            </span>
                            :
                            <span className="black-text darken-2">{todo.description}</span>
                        }
                    </a>
                    <a href="#!" className="secondary-content">
                        <i className="badge red-text darken-2">delete</i>
                    </a>
                </div>
            </li>
        </div>
    )
}
