const Todo = require("../model/todo");
const User = require("../model/user");

const editRender = async (req, res) => {
    const todo = await Todo.findOne({_id: req.params.id});
    res.render("editTodos.ejs", {todo: todo});
}

const editPost = async (req, res) => {
    try {
        await Todo.updateOne({ _id: req.body.id, task: req.body.task});
        res.redirect("/todo");
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    editRender,
    editPost
}