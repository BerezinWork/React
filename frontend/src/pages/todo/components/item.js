import React from "react";

import "./TodoItem.css";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleToggle = () => {
        this.props.toggleTodo(this.props.todo.id)
    }

    handleDelete = () => {
        this.props.deleteTodo(this.props.todo.id);
    }

    render() {
        return(
            <div className={`todoItem ${this.props.todo.completed ? 'completed' : ''}`}
                 onClick={this.handleToggle}
                 onDoubleClick={this.handleDelete}>
            >
                {this.props.todo.text}
            </div>
        )
    }
}

export default TodoItem;