from flask import Flask,jsonify,request
from datetime import datetime

app = Flask(__name__)

todos = []
next_id = 1

@app.route('/api/todos',methods=['GET'])
def get_todos():
    return jsonify(todos),200


@app.route('/api/todos/<int:todo_id>',methods=['GET'])
def get_todo(todo_id):
    todo = next((t for t in todos if t['td'] == todo_id),None)
    if not todo:
        return jsonify({'error':'Todo not found'}),404
    return jsonify(todo),200

@app.route('/api/todos',methods=['POST'])
def create_todo():
    global next_id

    data = request.get_json()

    if not data or 'title' not in data:
        return jsonify({"error":'Title is required'}),400
    
    todo = {
        'id':next_id,
        'title':data['title'],
        'completed':data.get('completed',False),
        'createdAt':datetime.utcnow().isoformat()
    }

    todos.append(todo)
    next_id += 1
    return jsonify(todo),201


@app.route('/api/todos/<int:todo_id>',methods=['PUT'])
def update_todo(todo_id):
    data = request.get_json()
    todo = next((t for t in todos if t['id'] == todo_id),None)

    if not todo:
        return jsonify({'error':'Todo not found'}),404
    
    todo['title'] = data.get('title',todo['title'])
    todo['completed'] = data.get('completed',todo['completed'])
    return jsonify(todo),200


@app.route('/api/todos/<int:todo_id>',methods=['DELETE'])
def delete_todo(todo_id):
    global todos
    todo = next((t for t in todos if t['id'] == todo_id),None)
    if not todo:
        return jsonify({'error':'Todo not found'}),404
    
    todos = [t for t in todos if t['id'] != todo_id]
    return jsonify({"message":f'Todo {todo_id} deleted'}),200

if __name__ == '__main__':
    app.run(debug=True)