from fastapi import FastAPI, HTTPException
import uvicorn
from helpers import find_todo
from schemas import (
    Todo,
    TodoCreate,
    TodoUpdate,
    datetime
)
from helpers import (
    todos, 
    find_todo, 
    get_next_id
)

app = FastAPI(title="TODO API")

@app.get("/api/todos", response_model=list[Todo])
def list_todos():
    return todos

@app.get("/api/todos/{todo_id}", response_model=Todo)
def get_todo(todo_id: int):
    todo = find_todo(todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo


@app.post("/api/todos", response_model=Todo, status_code=201)
def create_todo(data: TodoCreate):
    new_todo = Todo(
        id=get_next_id(),
        title=data.title,
        completed=data.completed,
        createdAt=datetime.utcnow(),
    )
    todos.append(new_todo)
    return new_todo


@app.put("/api/todos/{todo_id}", response_model=Todo)
def update_todo(todo_id: int, data: TodoUpdate):
    todo = find_todo(todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")

    if data.title is not None:
        todo.title = data.title
    if data.completed is not None:
        todo.completed = data.completed

    return todo


@app.delete("/api/todos/{todo_id}", status_code=204)
def delete_todo(todo_id: int):
    todo = find_todo(todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")

    todos[:] = [t for t in todos if t.id != todo_id]
    return

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)