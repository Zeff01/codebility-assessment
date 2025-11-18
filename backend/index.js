const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");

app.use(express.json())
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))


let todolist = {}
let currentID = 1

// Basic route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public","home.html"))
});

//Add todo
app.post("/api/todos" ,(req , res)=>{
   const {title} = req.body;
   if(!title){
    return res.status(400).json({message: "Title is required"})
   }
   const id = currentID++;
   const newTodo = {
    title,
    id,
    completed: false,
    createdAt: new Date()
   }
   todolist[id] = newTodo;
   res.json({
    message: "Task Saved",
    data: newTodo
   })
})

// List all todo
app.get("/api/todos", (req, res)=>{
  res.json(Object.values(todolist))
})

//update todo 

app.put("/api/todos/:id", (req, res)=> {
  const todo = todolist[req.params.id]
  if (!todo) return res.status(400).json({message: "Todo not found"})
  todo.completed = true
  res.json({message:"todo updated", data: todo})
})

//get a single todo 

app.get("/api/todos/:id", (req, res) => {
  const id  = req.params.id;
  const todo = todolist[id];
  
  if (!todo){
    return res.status(400).json({message: "Todo not found"})
  }

  res.json(todo)
})

//delete

app.delete("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  if(!todolist[id]) return res.status(404).json({message:"Not Found"})

  delete  todolist[id]
  res.json({message: "todo deleted"})
})

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
