const express = require('express');
const router = express.Router();

const data = [
{id: 1, title: 'Wash dishes', completed: false, createdOn: newDate() },
{id: 2, title: 'Wash dishes', completed: false, createdOn: newDate() },
{id: 3, title: 'Wash dishes', completed: false, createdOn: newDate() },
{id: 4, title: 'Wash dishes', completed: false, createdOn: newDate() },
{id: 5, title: 'Wash dishes', completed: false, createdOn: newDate() },
];

router.get('/',(req, res) => {

});