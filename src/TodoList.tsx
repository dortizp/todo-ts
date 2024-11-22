import './style.css'
import React from 'react'

interface Todo {
    id: number,
    name: string,
}

const todoList = [
    {
        id: 1,
        name: "first todo"
    }
]

const TodoList = () => {
    return (
        <div className="container">
            <h1>Todo App</h1>
            <div className="input-section">
                <input 
                    type="text" 
                    id="todoInput" 
                    placeholder="Add a new task..."
                />
                <button>Add</button>
            </div>
            <ul className="todo-list">
                {
                    todoList.map(
                        (todo) => <TodoItem key={todo.id} todo={todo}/>
                    )
                }
            </ul>
        </div>
    )
}

interface TodoProps {
    todo: Todo
}

const TodoItem = ({todo}: TodoProps) => {
    return (
        <li className="todo-item">
            <span>{todo.name}</span>
            <button className="delete-btn">Delete</button>
        </li>
    )
}

export default TodoList