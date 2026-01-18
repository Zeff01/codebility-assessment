const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

//Middleware to parse json body
app.use(express.json());

//In-memory todo Storage
let todos=[];
let nextId=1;
// Test route
app.get("/", (req, res) => {
  res.send("Todo API is running!");
});

//  1 GET api/todos List all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});
// 2 GET /api/todos/:id-GET single todo
app.get("/api/todos/:id",(req,res)=>{
  const id=Number(req.params.id);
  const todo=todos.find(t=>t.id===id);
  if(!todo){
    return res.status(404).json({message:"Todo not found"});
  }
  res.json(todo);
});
// 3 POST /api/todos-Create todo
app.post("/api/todos",(req,res)=>{
  const {title}=req.body;
  if(!title || title.trim()===""){
    return res.status(400).json({message:"Title is required"});
  }
  const todo={
    id:nextId++,
    title,
    completed:false,
    createdAt:new Date().toISOString()
  };
  todos.push(todo);
  res.status(201).json(todo);
});
//update todo
app.put("/api/todos/:id",(req,res)=>{
  const todo=todos.find(t=>t.id===parseInt(req.params.id));
  if(!todo){
    return res.status(404).json({message:"Todo not found"});
  }
  todo.title=req.body.title ?? todo.title;
  todo.completed=req.body.completed ?? todo.completed;
  res.json(todo);
});
//delete todo
app.delete("/api/todos/:id",(req,res)=>{
  const index=todos.findIndex(t=>t.id===parseInt(req.params.id));
  if(index===-1){
    return res.status(404).json({message:"Todo not find"});

  }
  todos.splice(index,1);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
