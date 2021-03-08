const Todo = require("../model/todo");
const User = require("../model/user");


const createTodo = async (req, res) => {
  try {
    const newTask = await new Todo({
      task: req.body.task,
    }).save();
    console.log(newTask._id);
    const user = await User.findOne({ _id: req.user.user._id });
    await user.addTodo(newTask._id);

    const userTodos = await User.findOne({ _id: req.user.user._id }).populate(
      "todoList"
    );
    console.log(userTodos);
    res.redirect("/todo");
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    const user = await User.findOne({ _id: req.user.user._id });
    await user.deleteTodo(req.params.id);

    res.redirect("/todo");
  } catch (err) {
    console.log(err);
  }
};

const todoRender = async (req, res) => {
  const userTodos = await User.findOne({ _id: req.user.user._id }).populate(
    "todoList"
  );

  res.render("todo.ejs", { data: userTodos.todoList});
};
module.exports = {
  todoRender,
  createTodo,
  deleteTodo,
};
