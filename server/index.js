const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const todoHandler = require('./routeHandler/todoHandler')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/TodoApp")
    .then(() => console.log('database connect successfully'))
    .catch((err) => console.log(err))

app.use('/todo', todoHandler);

function errorHandle(err, req, res, next) {
    if (res.headersSent) {
        next(err)
    }
    res.status(500).json({error: err})
}

app.listen(5000, () => {
    console.log(`Server is running at http://localhost:5000`)
})