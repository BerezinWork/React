import TodoList from "./components/List";
import TodoHeader from "./components/Header";

import TodoProvider from "../../contexts/TodoContext";

export default function Todo() {
    return (
        <TodoProvider>
            <TodoHeader />
            <TodoList />
        </TodoProvider>
    )
}