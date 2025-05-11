import { API_URL } from "./config.js";

export async function getTodos() {
    const response = await fetch(`${API_URL}`);

    if(!response.ok) {
        throw new Error(`Failed to load Todos: ${response.statusText}`);
    }

    return await response.json();
}

export async function addNewTodo(title) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            completed: false,
            userId: 1
        })
    });

    if(!response.ok) {
        throw new Error(`Failed to add Todo: ${response.statusText}`);
    }

    return await response.json();
}

export async function toggleTodo(id, completed) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({completed})
    });

    if(!response.ok) {
        throw new Error(`Failed to toggle Todos status: ${response.statusText}`);
    }

    return await response.json();
}

export async function deleteTodo(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error(`Failed to delete Todo: ${response.statusText}`);
    }

    return null;
}
