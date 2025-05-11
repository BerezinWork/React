import {getPosts, getComments, addPost} from "./api.js";
import {createPost, createComment} from "./ui.js";

const postsContainer = document.querySelector("#postsContainer");
const createContainer = document.querySelector("#createContainer");

const inputTitle = document.querySelector("#inputTitle");
const inputBody = document.querySelector("#inputBody");

async function init() {
    postsContainer.innerHTML = "Loading...";

    try {
        const posts = await getPosts();

        postsContainer.innerHTML = '';

        posts.forEach(post => {
            createPost(post, postsContainer);
        })
    } catch (err) {
        console.log(err);
    }
}

async function renderComments(id) {
    try{
        const comments = await getComments(id);

        const commentsContainer = document.querySelector(`#comments_${id}`);
        commentsContainer.innerHTML = '';

        if(!comments.length) {
            throw new Error('No comments found.');
        }
        comments.forEach(comment => {
            createComment(comment, commentsContainer);
        })
    } catch (err) {
        console.error(err);
    }
}

postsContainer.addEventListener("click", async (e) => {
    if (e.target.id.split('_')[0] === "button") {
        const id = e.target.id.split('_')[1];
        await renderComments(id);
    }
});

createContainer.addEventListener("submit", async (e) => {
    e.preventDefault();

    try{
        if(!inputTitle.value.trim()) {
            throw new Error("Please enter a valid title");
        } else if(!inputBody.value.trim()) {
            throw new Error("Please enter a valid body");
        }
        const title = inputTitle.value;
        const body = inputBody.value;

        const post = await addPost(title, body)

        createPost(post, postsContainer, "afterbegin");

        inputTitle.value = "";
        inputBody.value = "";

        console.log("Posts added!");
    } catch (err) {
        console.error(err);
    }
})

await init();