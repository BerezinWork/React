import {API_URL, GET_POSTS, GET_COMMENTS} from "./config.js";

export async function getPosts() {
    const response = await fetch(`${API_URL}${GET_POSTS}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}

export async function getComments (id) {
    const response = await fetch(`${API_URL}/${id}/${GET_COMMENTS}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}

export async function addPost(title, body) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body,
            userId: 1
        }),
    })

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}