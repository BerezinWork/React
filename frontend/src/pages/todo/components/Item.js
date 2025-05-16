import { useState } from 'react';

import './TodoItem.css';

export default function TodoItem({
                                     todo,
                                     toggleTodo,
                                     deleteTodo,
                                     editTodo
                                 }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

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