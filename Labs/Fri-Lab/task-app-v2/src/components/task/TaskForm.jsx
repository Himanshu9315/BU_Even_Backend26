import { useEffect } from "react";
import { useState } from "react"

export const TaskForm = ({onTaskAdd, editTaskObj}) => {

    const [taskObj, setTaskObj] = useState({
        taskId: 0,
        taskTitle: "",
        taskDescription: "",
        startDate: "",
        endDate: "",
        priority: "",
        employee: ""
    });
    const [taskIdCounter, setTaskIdCounter] = useState(1);

    // const taskTitleHandler = (event) => {
    //     setTaskTitle(event.target.value);
    // }

    useEffect(() => {
        if(editTaskObj){
            setTaskObj(editTaskObj)
        }
    }, [editTaskObj]);

    const taskHandler = (event) => {
        const value = event.target.value;
        const key = event.target.name;
        setTaskObj({...taskObj, [key]: value});
    }

    const addTask = (event) => {
        event.preventDefault();     // wil stop page reloading on form submit
        setTaskIdCounter(taskIdCounter + 1);
        // setTaskObj({...taskObj, taskId: taskIdCounter});
        onTaskAdd(taskObj);
        setTaskObj({
            taskId: taskIdCounter,
            taskTitle: "",
            taskDescription: "",
            startDate: "",
            endDate: "",
            priority: "",
            employee: ""
        })
    }

    return (
        <section className="max-w-3xl mx-auto mt-8 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Task</h2>
                
                <form className="space-y-6" onSubmit={addTask}>
                    {/* Task Title */}
                    <div>
                        <label htmlFor="taskTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                            Task Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="taskTitle"
                            placeholder="Enter task title"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            onChange={taskHandler}
                            name="taskTitle"
                            value={taskObj.taskTitle}
                        />
                    </div>

                    {/* Task Description */}
                    <div>
                        <label htmlFor="taskDescription" className="block text-sm font-semibold text-gray-700 mb-2">
                            Task Description
                        </label>
                        <textarea
                            id="taskDescription"
                            placeholder="Enter task description"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                            onChange={taskHandler}
                            name="taskDescription"
                            value={taskObj.taskDescription}
                        ></textarea>
                    </div>

                    {/* Dates Row */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Start Date */}
                        <div>
                            <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
                                Start Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                id="startDate"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                onChange={taskHandler}
                                name="startDate"
                                value={taskObj.startDate}
                            />
                        </div>

                        {/* End Date */}
                        <div>
                            <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700 mb-2">
                                End Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                id="endDate"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                onChange={taskHandler}
                                name="endDate"
                                value={taskObj.endDate}
                            />
                        </div>
                    </div>

                    {/* Priority and Employee Row */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Task Priority */}
                        <div>
                            <label htmlFor="priority" className="block text-sm font-semibold text-gray-700 mb-2">
                                Priority <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="priority"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                onChange={taskHandler}
                                name="priority"
                                value={taskObj.priority}
                            >
                                <option value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="urgent">Urgent</option>
                            </select>
                        </div>

                        {/* Employee */}
                        <div>
                            <label htmlFor="employee" className="block text-sm font-semibold text-gray-700 mb-2">
                                Assign Employee <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="employee"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                onChange={taskHandler}
                                name="employee"
                                value={taskObj.employee}
                            >
                                <option value="">Select Employee</option>
                                <option value="John Doe">John Doe</option>
                                <option value="Jane Smith">Jane Smith</option>
                                <option value="Mike Johnson">Mike Johnson</option>
                                <option value="Sarah Williams">Sarah Williams</option>
                            </select>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                        >
                            Create Task
                        </button>
                        <button
                            type="reset"
                            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
                        >
                            Clear Form
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}