export function createPost(post, container, position = "beforeend") {
    container.insertAdjacentHTML(position, `
    <h2>${post.title}</h2>
    <div>${post.body}</div>
    <button id="button_${post.id}">Show comments</button>
    <div id="comments_${post.id}"></div>
    `);
}

export function createComment(comment, container) {
    container.innerHTML += `
    <br>
    <div>Name: ${comment.name}</div>
    <div>Email: ${comment.email}</div>
    <div>${comment.body}</div>
    <br>
    `
}