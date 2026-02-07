# Todo API – Codebility Backend Assessment

A simple RESTful Todo API built with **Node.js** and **Express**.  
This project demonstrates basic CRUD operations, in-memory data storage, and error handling.

---

## Tech Stack

- Node.js
- Express.js
- JavaScript
- In-memory storage (no database)

---

## Setup & Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Steps

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/codebility-assessment.git
cd codebility-assessment/backend
```

2. Initialize the project:
```bash
npm init -y
```

3. Install dependencies:
```bash
npm install express
```

4. Start the server:
```bash
node src/index.js
```

# DUMMY DATA FOR REQUEST BODY ON POSTMAN
# LOCALLY RUN ON HOST OF : http://localhost:4000
[
    {
    "id": "1",
    "title": "Grocery",
    "completed": true
    },
    {
    "id": "2",
    "title": "Shopping",
    "completed": false
    },
    {
    "id": "3",
    "title": "Dancing",
    "completed": true
    },
    {
    "id": "4",
    "title": "Spa",
    "completed": false
    },
    {
    "id": "5",
    "title": "Study",
    "completed": true
    }
]