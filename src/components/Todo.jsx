import { Button } from 'react-bootstrap';
import React from 'react';

const Todo = ({ todo, index, markTodo, deleteTodo }) => {
    return (
        // ? : is a ternary operator in JavaScript
        // ? (if) and : (else)
        <div
            className="todo"

        >
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
                <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
                <Button variant="outline-danger" onClick={() => deleteTodo(index)}>✕</Button>
            </div>
        </div>
    );
}
export default Todo;    