import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {

    const [todos, setTodos] = useState([
        { title: 'ejercicio', selected: false, id: '0' },
        { title: 'trabajo', selected: false, id: '1' },
        { title: 'estudio', selected: false, id: '2' },
        { title: 'descanso', selected: false, id: '3' }
    ])

    const onTodoItemClicked = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id)
        todo.selected = !todo.selected
        setTodos(newTodos)
    }

    const deleteSelected = () => {
        const newTodos = todos.filter((todo) => todo.selected === false);
        setTodos(newTodos);
    }
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} onClick={onTodoItemClicked}/>
            ))}
            
            <button className="btn-delete" onClick={deleteSelected}>eliminar</button>
        </div>
    )
}

export default TodoList
