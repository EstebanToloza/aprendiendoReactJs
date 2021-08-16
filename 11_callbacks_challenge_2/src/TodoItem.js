import React from 'react'

const getClassName = (selected) => {
    if (selected) {
        return 'todo-item-container selected'
    } else {
        return 'todo-item-container'
    }
}

const TodoItem = ({ todo, onClick }) => {

    return (
        <div className={getClassName(todo.selected)} onClick={() => onClick(todo.id)}>
            <p>{todo.title}</p>
        </div>
    )
}

export default TodoItem
