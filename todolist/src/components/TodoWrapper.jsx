import React, { useState } from 'react'
import { TodoForm } from './todoform'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './todo';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(),
        task: todo, 
        completed: false, 
        isEditing: false}])
        console.log(todos)
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id
             ? {...todo, completed: !todo.completed} : todo)) }

    const editTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id 
        ? {...todo, isEditing: true} : todo))
    }

    const submitEdit = (newTask, id) => {
        setTodos(todos.map((todo) => todo.id === id
        ? {...todo, task: newTask, isEditing: false} : todo))
    }
    return (
        <div className='TodoWrapper'>
            <h1>To Do List</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                <Todo task={todo} key ={index}
                toggleComplete={toggleComplete}
                deleteTodo={() => deleteTodo(todo.id)}
                editTodo={() => editTodo(todo.id)}
                submitEdit={submitEdit}/>
            ))}
        </div>
    )
}

