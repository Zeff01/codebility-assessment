const express = require('express');
const router = express.Router();

const data = [
{id: 1, title: 'Wash dishes', completed: false, createdOn: new Date() },
{id: 2, title: 'Clean the room', completed: false, createdOn: new Date() },
{id: 3, title: 'Brush my teeth', completed: false, createdOn: new Date() },
{id: 4, title: 'Finish my homework', completed: false, createdOn: new Date() },
{id: 5, title: 'Go to church', completed: false, createdOn: new Date() },
];

router.get('/',(req, res) => {
    try {
        res.status(200).json(data);
    } catch (error) {
        console.log("Error in getProducts function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
    
});

module.exports = router;