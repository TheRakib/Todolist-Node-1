const Todo = require("../model/todo");
const User = require("../model/user");
const todoRender = async (req, res) => {
  const data = await Todo.find();

  res.render("todo.ejs", { todos: data });
};

const createTodo = async (req, res) => {
  try {
    const newTask = await new Todo({
      task: req.body.task
    }).save();
    console.log(newTask._id);
    const user = await User.findOne({_id: req.user.user._id});
    await user.addTodo(newTask._id);

    const userTodos = await User.findOne({_id: req.user.user._id}).populate("todoList");
    console.log(userTodos);
    res.redirect("/todo")
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  todoRender,
  createTodo
};