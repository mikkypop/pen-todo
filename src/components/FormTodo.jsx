import React from 'react';
import { Button, Form } from 'react-bootstrap';

/*
We declared FormTodo and passed in the parameter addTodo that will add a new item to the list
*/
const FormTodo = ({ addTodo }) => {
    const [value, setValue] = React.useState("");

    /* Handle Submit is invoked when the form is submitted */
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        // Pass in onSubmit
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control type="text" className="input" value={value}
                    onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
            </Form.Group><br />
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default FormTodo;