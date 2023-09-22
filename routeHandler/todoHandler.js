const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema')
const Todo = new mongoose.model("Todo", todoSchema);

//get all the todo
router.get('/', (req, res) => {
})

//get a todo by id
router.get('/:id', (req, res) => {
})

//post a todo
router.post('/', (req, res) => {
    const newTodo = new Todo(req.body);

    newTodo.save(err => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error",
            });
        } else {
            res.status(200).json({
                massage: "Todo was inserted successfully",
            });
        }
    });
})

// post all todo
router.post('/all', (req, res) => {
})

// put todo
router.put('/:id', (req, res) => {
})

//delete todo
router.delete('/:id', (req, res) => {
})

module.exports = router;

