import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
    render() {

        const { done, important, label, onDeleted, onToggleImportant, onToggleDone } = this.props;

        let classNames = `todo-list-item`;

        if (done) {
            classNames += ` done`
        }

        if (important) {
            classNames +=  ` important`
        }


        return (
            <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}>
                {label}
            </span>
            <button onClick={onToggleImportant} className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>
            <button onClick={onDeleted} className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
        </span>
        );
    }
};

