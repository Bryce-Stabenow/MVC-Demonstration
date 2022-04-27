const mongoose = require('mongoose')

//This Object Data Mapping schema is utilized by the todos.js controller to make a request to the server for information. It only takes in certain parameters so that our requests are uniform when they are sent to the server.

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
