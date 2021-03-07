const Todo = require("../model/todo");

const deleteRender = async (req, res) => {
    await Todo.deleteOne({ _id: req.params.id });
    res.redirect("/todo");
};

module.exports = {
    deleteRender
}