import React from "react";
import TodoForm from "./components/Form"
import TodoList from "./components/List";
import TodoHeader from "./components/Header";

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id:1, text: "Text 1", completed: false},
                {id:2, text: "Text 2", completed: false},
                {id:3, text: "Text 3", completed: false},
            ]
        }
    }

    toggleTodo = (id) => {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, completed: !todo.completed }
                }

                return todo;
            })

            return {todos: updatedTodos}
        })
    }

    deleteTodo = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter(todo => todo.id !== id)
        }))
    }

    render() {
        return(
            <div>
                <TodoHeader/>
                <TodoForm/>
                <TodoList
                    todos={this.state.todos}
                    toggleTodo={this.toggleTodo}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        )
    }
}

export default Todo;