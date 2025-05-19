import { createContext, useState, useCallback, useMemo } from "react";

export const TodoContext = createContext(null);

export default function TodoProvider({ children }) {
    const [todos, setTodos] = useState([
        {id: 1, text: "Learn React", completed: false, smile: '🤗'},
        {id: 2, text: "Accomplish homework", completed: false, smile: '🤗'},
        {id: 3, text: "Eat the apple", completed: false, smile: '🙃'},
        {id: 4, text: "Eat the apple", completed: false, smile: '🤗'}
    ]);
    const [smiles, setSmiles] = useState([
        {id: 1, smile: '🤗', votes: 0},
        {id: 2, smile: '🤗', votes: 0},
    ]);

    const toggleTodo = useCallback((id) => {
        setTodos(prevState =>
            prevState.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            ));
    }, []);

    const deleteTodo = useCallback((id) => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id));
    }, []);

    const editTodo = useCallback((id, newText) => {
        setTodos(prevState =>
            prevState.map(todo =>
                todo.id === id ? {...todo, text: newText} : todo
            ));
    }, []);

    const contextValue = useMemo(() => ({
        todos,
        toggleTodo,
        deleteTodo,
        editTodo
    }), [todos, toggleTodo, deleteTodo, editTodo]);

    return(
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )
}