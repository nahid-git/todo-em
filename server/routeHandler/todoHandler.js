const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema')
const Todo = new mongoose.model("Todo", todoSchema);


//get all the todo
// router.get('/', (req, res) => {
// })

//get a todo by id
// router.get('/:id', (req, res) => {
// })

//post a todo
router.post('/', async (req, res) => {
    if(req.body.userObject.date === ''){
        req.body.userObject.date = Date.now()
    }
    try {
        const todoData = new Todo(req.body.userObject);
        await todoData.save();
        res.status(200).json({
            message: "Todo was inserted successfully",
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error",
        });
    }
});


// // post all todo
// router.post('/all', (req, res) => {
// })
//
// // put todo
// router.put('/:id', (req, res) => {
// })
//
// //delete todo
// router.delete('/:id', (req, res) => {
// })

module.exports = router;

