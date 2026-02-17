Api testing guide

server: http://localhost:3000

Endpoints:
| Method    | Url           | Description           |
| Get       | /api/todos    | Get all data          |
| Get       | /api/todos/:id| Get single data ny id |
| Post      | /api/todos    | Create a todo         |   // must have json data including title and completed
| Put       | /api/todos/:id| Update a single todo  |    // must have json data either title or completed
| Delete    | /api/todos/:id| Delete a todo         |

Sample json success data:
    - Fetching all data
        {
            "success": true,
            "data": [
                {
                    "id": 1,
                    "title": "Buy groceries",
                    "completed": false,
                    "createdAt": "2026-02-17T03:47:54.454Z"
                },
                {
                    "id": 2,
                    "title": "Read a book",
                    "completed": true,
                    "createdAt": "2026-02-17T03:47:54.454Z"
                }
            ]
        }
    - Get one Data
        {
            "success": true,
            "data": {
                "id": 1,
                "title": "Buy groceries",
                "completed": false,
                "createdAt": "2026-02-17T03:47:54.454Z"
            }
        }
    - Created todo
        {
            "success": true,
            "data": {
                "id": 3,
                "title": "Create a new todo",
                "completed": false,
                "createdAt": "2026-02-17T05:05:56.386Z"
            }
        }
    - Updated todo
        {
            "success": true,
            "data": {
                "id": 3,
                "title": "Updated Title",
                "completed": true,
                "createdAt": "2026-02-17T05:05:56.386Z"
            }
        }
    - Deleted todo
        {
            "success": true,
            "message": "Todo 4 deleted"
        }