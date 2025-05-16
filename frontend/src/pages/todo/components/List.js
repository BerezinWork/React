import TodoItem from "./Item";

export default function TodoList({
                                     todos = [],
                                     toggleTodo = () => {},
                                     deleteTodo = () => {},
                                     editTodo = () => {}
                                 }) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            ))}
        </div>
    )
}