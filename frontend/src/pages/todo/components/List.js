import React from "react";

import TodoItem from "./item";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todos, toggleTodo, deleteTodo } = this.props
        return(
            <div>
                {todos.map((todo) => {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                })}
            </div>
        )
    }
}

export default TodoList;