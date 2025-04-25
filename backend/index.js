const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let items = [];

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

function getFormattedDate() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-based
  const day = String(now.getDate()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


// List all todos (GET)
app.get('/api/todos', (req, res) => {
  res.status(200).json({
    message: 'Items successfully fetched.',
    data: items // Return the deleted item (first element of the array)
  });
});

// Get a single todo (GET)
app.get('/api/todos/:id', (req, res) => {
  const { id } = req.params;
 
    const item = items.find(i => i.id === parseInt(id));
    if (!item) return res.status(404).send('Item not found');
  
    res.status(200).json({
      message: 'Item successfully fetched.',
      data: item // Return the deleted item (first element of the array)
    });
});

//  Create a new todo (POST)
app.post('/api/todos', (req, res) => {
  const { title, completed } = req.body;

  const newItem = {
      id: items.length + 1, // Simple ID generation
      title: title,
      completed: completed,
      createdAt: getFormattedDate()
  };

  items.push(newItem);

  res.status(200).json({
    message: 'Item successfully created.',
    data: newItem // Return the deleted item (first element of the array)
  });
});


//  Update a todo (PUT)
app.put('/api/todos/:id', (req, res) => {
  const { title, completed } = req.body;
  const { id } = req.params;

  const item = items.find(i => i.id === parseInt(id));
  if (!item) return res.status(404).send('Item not found');

  item.title = title;
  item.completed = completed;
  
  res.status(200).json({
    message: 'Item successfully updated.',
    data: item // Return the deleted item (first element of the array)
  });
});

// Delete a todo (DELETE)
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex(i => i.id === parseInt(id));

  if (itemIndex === -1) return res.status(404).send('Item not found');

  const deletedItem = items.splice(itemIndex, 1);

  res.status(200).json({
    message: 'Item successfully deleted.',
    data: deletedItem // Return the deleted item (first element of the array)
  });
});


// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
