import { getTodos, deleteTodo, toggleTodo, addNewTodo } from "./api.js";
import { createTodoElement as createTodoLi } from "./ui.js";

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

async function init() {
    todoList.innerHTML = "Loading...";

    try {
        const todos = await getTodos();
        todoList.innerHTML = "";

        todos.forEach(todo => {
            const li = createTodoLi(todo);
            todoList.appendChild(li);
        });
    } catch (err) {
        console.log(err);
    }
}

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = todoInput.value.trim();

    if(!title) {
        return;
    }

    try {
        const todo = await addNewTodo(title);
        const li = createTodoLi(todo);
        todoList.appendChild(li);
        todoInput.value = '';
    } catch (err) {
        console.log(err.message);
    }
});

todoList.addEventListener('click', async (e) => {
    if(e.target.classList.contains('delete-btn')) {
        const todoId = e.target.parentElement.dataset.id;

        try {
            await deleteTodo(todoId);
            e.target.parentElement.remove();
        } catch (err) {
            console.log(err.message);
        }
    }
});

todoList.addEventListener('change', async (e) => {
    if(e.target.classList.contains('toggle-checkbox')) {
        const todoId = e.target.parentElement.dataset.id;
        const checked = e.target.checked;

        try{
            await toggleTodo(todoId, checked);
            e.target.parentElement.classList.toggle('done');
        } catch (err) {
            console.log(err.message);
        }
    }
});

init();