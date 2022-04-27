const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

//This app gets requests from the server and splits them into separate routes. If a POST request is made a /todos/createTodo, it runs the todosController.createTodos method, which is imported on line 3.

router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router