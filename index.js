const express = require('express');
const mongoose = require("mongoose");
const todoHandler = require('./routeHandler/todoHandler')

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/todos")
    .then(() => console.log('database connect successfully'))
    .catch((err) => console.log(err))

app.use('/todo', todoHandler);

function errorHandle(err, req, res, next) {
    if (res.headersSent) {
        next(err)
    }
    res.status(500).json({error: err})
}

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`)
})