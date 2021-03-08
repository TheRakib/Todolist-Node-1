const Todo = require("../model/todo");
const User = require("../model/user");

const redirectRender = (req, res) => {
  res.redirect("/1");
}

const createTodo = async (req, res) => {
  try {
    const newTask = await new Todo({
      task: req.body.task,
    }).save();
    const user = await User.findOne({ _id: req.user.user._id });
    await user.addTodo(newTask._id);

    const userTodos = await User.findOne({ _id: req.user.user._id }).populate(
      "todoList"
    );
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
  const dataPerPage = 5;
  const page = req.params.page || 1;

  let sortDate = req.query.sortDate;
  let sort = {};

  if (sortDate) {
    sort.date = sortDate;
  }
  try {
    const userTodos = await User.findOne({ _id: req.user.user._id }).populate({
      path: "todoList",
      options: {
        collation: {locale: "en"},
          sort: sort,
          skip: ((dataPerPage * page) - dataPerPage),
          limit: dataPerPage,
        },
      },
    );


    const userTodoList = await User.findOne({ _id: req.user.user._id}).limit(dataPerPage).populate("todoList");
    const count = userTodoList.todoList.length;
    
    res.render("todo.ejs", {
       data: userTodos.todoList,
       user: req.user.user.username,
       totalPages: Math.ceil((count / dataPerPage)),
       currentPage: page, 
      });
  }
  catch (err) {
    console.log(err);
  }
  
};
module.exports = {
  todoRender,
  createTodo,
  deleteTodo,
  redirectRender
};
