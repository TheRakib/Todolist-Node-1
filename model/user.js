const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: String,
    tokenExpiration: Date,
    todoList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "task",
    }]
})

userSchema.methods.addTodo = async function(todoId) {
    this.todoList.push(todoId);
    await this.save();
}

userSchema.methods.deleteTodo = async function(todoId) {
    this.todoList.pull(todoId);
    this.save();
    // använd nån annan algorithm 
    // den kommer att ta bort sista produkten från lista 
}

const User = mongoose.model("user", userSchema);

module.exports = User
