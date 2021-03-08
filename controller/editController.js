const Todo = require("../model/todo");
const User = require("../model/user");

const editRender = async (req, res) => {
    res.render("editTodos.ejs");
}

module.exports = {
    editRender
}