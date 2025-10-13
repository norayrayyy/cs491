import React, { useState } from 'react'

export const Todo = ({ task, editTodo, deleteTodo, toggleComplete, submitEdit}) => {
    const [newTask, setNewTask] = useState(task.task)

    const handleEditSubmit = (e) => {
        e.preventDefault();
        submitEdit(newTask, task.id);
    }
    return (
        <div className='Todo'>
            {task.isEditing ? (
                <form onSubmit={handleEditSubmit} style={{display: 'flex', gap: "10px"}}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        />
                    <button type="submit">Save</button>
                </form> ) : ( <>

            <p onClick={() => toggleComplete(task.id)}
            className={`${task.completed ? 'completed': ""}`} >{task.task}</p>
            <div>
                <button onClick={editTodo}>Edit</button>
                <button onClick={deleteTodo}>Delete</button>
            </div>
        </>
        )}
    </div>
)}

