import React from "react";

import "./todo-list.css";
import TodoListItem from "../todo-list-item";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = todos.map(item => {
        const { id, ...itemsProps } = item;
        return (
            <li className="list-group-item" key={id}>
                <TodoListItem
                    {...itemsProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)} />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;