const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
  },
  date: { type: Date, default: Date.now },
});

const Todo = mongoose.model("task", todoSchema);

module.exports = Todo;