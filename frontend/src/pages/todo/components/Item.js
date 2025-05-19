import { useState, useContext } from 'react';

import { ThemeContext } from "../../../contexts/ThemeContext";
import { TodoContext } from "../../../contexts/TodoContext";

import './TodoItem.css';

export default function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const { theme } = useContext(ThemeContext);
    const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);

    const handleToggle = () => {
        toggleTodo(todo.id);
    }

    const handleDelete = () => {
        deleteTodo(todo.id);
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleChange = (e) => {
        setNewText(e.target.value);
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            saveEdit();
        }
    }

    const saveEdit = () => {
        newText.trim() ?
            editTodo(todo.id, newText)
            :
            setNewText(todo.text);

        setIsEditing(false);
    }

    return (
        <div
            className={`todoItem ${todo.completed ? 'completed' : ''}`}
            style={{
                color: theme === 'light' ? '#000000' : '#ffffff',
                backgroundColor: theme === 'light' ? '#8fe182' : '#3d0a0a',
            }}
            onClick={handleToggle}
            onDoubleClick={handleEdit}
        >
            {isEditing ?
                <input
                    type='text'
                    placeholder='New text for todo...'
                    value={newText}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onBlur={saveEdit}
                />
                :
                <div>
                    <span>{todo.text} {todo.smile}</span>
                    <button onClick={handleDelete}>X</button>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            }
        </div>
    )
}