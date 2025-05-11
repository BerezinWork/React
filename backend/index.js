const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

const todos = [
    {
        userId: 1,
        id:1,
        title: "First Todo",
        completed: false
    },
    {
        userId: 1,
        id:2,
        title: "Second Todo",
        completed: true
    },
    {
        userId: 1,
        id:3,
        title: "Third Todo",
        completed: false
    },
];

app.get("/todos", (req, res) => {
    res.json(todos);
})
app.get("/todos/:id", (req, res) => {
    const todoId = +req.params.id;

    const todo = todos.find(todo => todo.id === todoId);

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({error: "Not Found"});
    }
});

app.post("/todos", (req, res) => {
    const {title, completed} = (req.body);

    if(!title || typeof completed !== "boolean") {
        res.status(400).json({error: "Not all information given"});
    }

    const newTodo = {
        userId: 1,
        id: Math.floor(Math.random() * 1000000) + Date.now(),
        title,
        completed,
    }

    todos.push(newTodo);

    res.status(201).json(newTodo);
});

app.patch("/todos/:id", (req, res) => {
    const todoId = +req.params.id;
    const { completed } = req.body;

    const todo = todos.find(todo => todo.id === todoId);
    if (!todo) {
        return res.status(404).json({ error: "Not Found" });
    }

    if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: "Invalid data" });
    }

    todo.completed = completed;
    res.json(todo);
});

app.put("/todos/:id", (req, res) => {
    const todoId = +req.params.id;

    const {title, completed} = (req.body);

    const todoIndex = todos.findIndex(todo => todo.id === todoId);

    if(todoIndex === -1) {
        res.status(404).json({error: "Not Found"});
    }

    if(!title || typeof completed !== "boolean") {
        res.status(400).json({error: "Not all information given"});
    }

    todos[todoIndex] = {id: todoId, title, completed};

    res.status(200).json(todos[todoIndex]);
});

app.delete("/todos/:id", (req, res) => {
    const todoId = +req.params.id;

    const todoIndex = todos.findIndex(todo => todo.id === todoId);

    if (todoIndex === -1) {
        return res.status(404).json({ error: "Not Found" });
    }

    todos.splice(todoIndex, 1);

    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log("Server started on port: " + PORT);
});