const Todo = require("../model/todo");


const todoRender = async (req, res) => {
    const data = await Todo.find();

    res.render('todo.ejs', {todos: data});
};

module.exports= {
    todoRender
};