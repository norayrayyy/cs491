import React, { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
            <Form.Control
            type="text"
            placeholder="Fill in your tasks for today."
            value={value}
            onChange={(e) => setValue(e.target.value)} />
            <Button type="submit" variant="primary">Add</Button>
            </InputGroup>
        </Form>
    )
}
//using CSS instead of Bootstrap
        // <form className='TodoForm' onSubmit={handleSubmit}>
        //     <input type="text" 
        //     className='todo-input' 
        //     placeholder='Fill in your tasks for today.'
        //     value={value}
        //     onChange={(e) => {
        //         // console.log(e.target.value);
        //         setValue(e.target.value)}} />  
        //     <button type='submit' className='todo-button'>Add Task</button>
        // </form>
