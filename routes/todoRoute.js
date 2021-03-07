const express = require("express");
const todoRouter = express.Router();
const Todo = require("../model/todo");
const verifyUser = require("../middleware/verifyUser");

const { todoRender, createTodo, deleteTodo } = require("../controller/todoController");

todoRouter.get("/todo", verifyUser, todoRender);
todoRouter.get("/delete/:id", verifyUser, deleteTodo)

todoRouter.post("/todo", verifyUser, createTodo);
 

module.exports = todoRouter;
