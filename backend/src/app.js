const express = require('express')
const todosRoute = require('./route/todos')

const app = express();

app.use(express.json());

app.use('/api/todos', todosRoute)

app.use('*', (req,res) => {
    res.status(404).json({error: 'Route not found'});
});

module.exports = app;