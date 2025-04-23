import express from "express";
import env from "dotenv";

env.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Local Storage
const database = [
  {
    id: 0,
    title: "Write code",
    completed: false,
    createdAt: "Home",
  },
  {
    id: 1,
    title: "Test code",
    completed: false,
    createdAt: "Visual Studio Code",
  },
  {
    id: 2,
    title: "Validate code",
    completed: false,
    createdAt: "Visual Studio Code",
  },
  {
    id: 3,
    title: "Test code again",
    completed: false,
    createdAt: "Postman",
  },
  {
    id: 4,
    title: "Push code",
    completed: true,
    createdAt: "GitHub",
  },
];

// Changes 'true' or 'false' string into boolean value.
function checkBoolean(query) {
  if (query === "true") {
    query = true;
  } else {
    query = false;
  }

  return query;
}

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Get all API items.
app.get("/api/todos", (req, res) => {
  try {
    res.json(database);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Something went wrong with the request!" });
  }
});

// Get specific API item.
app.get("/api/todos/:id", (req, res) => {
  try {
    // Gets link parameter (:id) and finds the item inside the database data.
    const id = parseInt(req.params.id);
    const item = database.find((data) => data.id === id);

    // If item is found result is shown otherwise, results in error.
    if (item) {
      res.json(item);
    } else {
      console.log("Item not found!");
      res.status(404).json({ error: "Item not found!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Something went wrong with the request!" });
  }
});

// POST Request (TODOS).
app.post("/api/todos", (req, res) => {
  try {
    // Gets query parameters from Postman and assigns the different values.
    const data = {
      id: parseInt(req.query.id),
      title: req.query.title,
      completed: checkBoolean(req.query.completed),
      createdAt: req.query.createdAt,
    };

    // Pushes the data into the database.
    database.push(data);

    console.log(database);
    res.send({
      message: "New todo item added!",
      database,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Something went wrong with the request!" });
  }
});

// PUT Request (TODOS).
app.put("/api/todos/:id", (req, res) => {
  try {
    // Gets link parameter (:id) and finds the item inside the database.
    const id = parseInt(req.params.id);
    const item = database.find((data) => data.id === id);

    // If no item with the same id was found, returns nothing.
    if (!item) {
      return res.status(404).send({ error: "Item not found!" });
    }

    // Gets query parameters from Postman and assigns the different values.
    const data = {
      id: parseInt(req.query.id),
      title: req.query.title,
      completed: checkBoolean(req.query.completed),
      createdAt: req.query.createdAt,
    };

    // Changes the values in the database (except id) to user's query inputs.
    item.id = id;
    item.title = data.title;
    item.completed = data.completed;
    item.createdAt = data.createdAt;

    console.log(database);
    res.send({ message: "Todo item updated!", database });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Something went wrong with the request!" });
  }
});

// DELETE Request (TODOS).
app.delete("/api/todos/:id", (req, res) => {
  try {
    // Gets link parameter (:id) and finds the item inside the database.
    const id = parseInt(req.params.id);
    const itemIndex = database.findIndex((data) => data.id === id);

    // If no item with the same id was found, returns nothing.
    if (itemIndex === -1) {
      return res
        .status(404)
        .send({ error: "Index is not/no longer in database!" });
    }

    // Removes the item index from database.
    database.splice(itemIndex, 1)[0];

    console.log(database);
    res.send({ message: "Item removed from database!", database });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Something went wrong with the request!" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
