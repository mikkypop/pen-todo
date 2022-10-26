import React from "react";
import { Card } from 'react-bootstrap';
import Todo from "./Todo";
import FormTodo from "./FormTodo";

const TodoMain = () => {
    const [todos, setTodos] = React.useState([
        {
            text: "This is a sampe todo",
            isDone: false
        }
    ]);

    // To Add Todo
    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    // To Mark Todo
    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };

    // To Delete Todo
    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <div className="app">
                <div className="container">
                    <h1 className="text-center mb-4">Todo List</h1>
                    <FormTodo addTodo={addTodo} />
                    <div>
                        {todos.map((todo, index) => (
                            <Card>
                                <Card.Body>
                                    <Todo
                                        key={index}
                                        index={index}
                                        todo={todo}
                                        markTodo={markTodo}
                                        deleteTodo={deleteTodo}
                                    />
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoMain;