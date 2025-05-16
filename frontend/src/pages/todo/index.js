import { useState } from "react";

import TodoForm from "./components/Form";
import TodoList from "./components/List";
import TodoHeader from "./components/Header";

export default function Todo() {
    const [todos, setTodos] = useState([
        {id: 1, text: "Learn React", completed: false, smile: '🤗'},
        {id: 2, text: "Accomplish homework", completed: false, smile: '🤗'},
        {id: 3, text: "Eat the apple", completed: false, smile: '🙃'},
        {id: 4, text: "Eat the apple", completed: false, smile: '🤗'}
    ]);

    const toggleTodo = (id) => {
        setTodos(prevState =>
            prevState.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            ));
    }

    const deleteTodo = (id) => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id));
    }

    const editTodo = (id, newText) => {
        setTodos(prevState =>
            prevState.map(todo =>
                todo.id === id ? {...todo, text: newText} : todo
            ));
    }

    return (
        <>
            <TodoHeader />
            <TodoForm />
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        </>
    )
}