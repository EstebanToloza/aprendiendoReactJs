import React, { useState } from 'react'

const TaskForm = () => {

    const [task, setTask] = useState({
        title: '',
        description: '',
    })

    const handleChange = (e) => {
        //console.log(e.target.value)
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="flex justify-center items-center h-3/4">
            <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
                <h2 className="mb-7 text-3x1">Add Task</h2>
                <div className="mb-5">
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Write a title" 
                        onChange={handleChange}
                        className="py-3 px-4 focus:text-gray-100 focus:outline-none bg-gray-700 w-full"
                    />
                </div>
                <div className="mb-5">
                    <textarea 
                        name="description" 
                        placeholder="Write a description" 
                        onChange={handleChange}
                        row="2"
                        className="py-3 px-4 focus:text-gray-100 focus:outline-none bg-gray-700 w-full"
                    />
                </div>
                <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
                    Create Task
                </button>
            </form>
        </div>
    )
}

export default TaskForm
