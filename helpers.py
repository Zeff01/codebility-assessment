from typing import Optional
from schemas import Todo

todos: list[Todo] = []
current_id: int = 1


def find_todo(todo_id: int) -> Optional[Todo]:
    """Return the Todo with the given id, or None if not found."""
    for t in todos:
        if t.id == todo_id:
            return t
    return None


def get_next_id() -> int:
    """Increment and return the next ID."""
    global current_id
    cid = current_id
    current_id += 1
    return cid