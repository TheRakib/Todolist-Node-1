const express = require("express");
const todoRouter = express.Router();
const Todo = require("../model/todo");
const verifyUser = require("../middleware/verifyUser");

const { editRender, editPost } = require("../controller/editController");

const {
  todoRender,
  createTodo,
  deleteTodo,
  redirectRender
} = require("../controller/todoController");

todoRouter.get("/todo", verifyUser, redirectRender);
todoRouter.get("/:page", verifyUser, todoRender);
todoRouter.get("/delete/:id", verifyUser, deleteTodo);
todoRouter.get("/edit/:id", verifyUser, editRender);

todoRouter.post("/todo", verifyUser, createTodo);
todoRouter.post("/edit", verifyUser, editPost);

module.exports = todoRouter;
