const express = require("express");
const todoRouter = express.Router();
const Todo = require("../model/todo");

const { todoRender } = require("../controller/todoController");

todoRouter.get("/todo", todoRender);

todoRouter.post("/todo", async (req, res) => {
  const newTask = new Todo({
    task: req.body.task,
  });
  try {
    await newTask.save();
    res.redirect("/todo");
  } catch (err) {
    res.redirect("/todo");
  }
});

module.exports = todoRouter;
