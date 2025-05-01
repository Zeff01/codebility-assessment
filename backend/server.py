from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

todos = []
next_id = 1

def find_todo(todo_id): #get a single to do & update to do
    return next((todo for todo in todos if todo['id'] == todo_id), None)

@app.route('/api/todos', methods=['GET']) #list to do
def list_todos():
    return jsonify(todos), 200

@app.route('/api/todos/<int:todo_id>', methods=['GET']) #get single to do
def get_todo(todo_id):
    todo = find_todo(todo_id)
    if not todo:
        return jsonify({'error': 'Todo not found'}), 404
    return jsonify(todo), 200

@app.route('/api/todos', methods=['POST']) #create new to do
def create_todo():
    global next_id
    data = request.get_json()
    if not data or 'title' not in data:
        return jsonify({'error': 'Title is required'}), 400
    
    if not data['title'].strip(): #to check if the title is just spaces or empty
        return jsonify({'error': 'Title cannot be empty'}), 400

    todo = {
        'id': next_id,
        'title': data['title'],
        'completed': False,
        'createdAt': datetime.utcnow().isoformat()
    }
    todos.append(todo)
    next_id += 1
    return jsonify(todo), 201

@app.route('/api/todos/<int:todo_id>', methods=['PUT']) #update a to do
def update_todo(todo_id):
    todo = find_todo(todo_id)
    if not todo:
        return jsonify({'error': 'Todo not found'}), 404

    data = request.get_json()
    if not data:
        return jsonify({'error': 'Invalid data'}), 400

    todo['title'] = data.get('title', todo['title'])
    todo['completed'] = data.get('completed', todo['completed'])
    return jsonify(todo), 200

@app.route('/api/todos/<int:todo_id>', methods=['DELETE']) #to delete to do
def delete_todo(todo_id):
    todo = find_todo(todo_id)
    if not todo:
        return jsonify({'error': 'Todo not found'}), 404
    todos.remove(todo)
    return jsonify(todo), 200

if __name__ == '__main__':
    app.run(debug=True)

