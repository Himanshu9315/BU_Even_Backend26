import { useEffect, useState } from "react"

export const TaskForm = ({onAdd, editingTask}) => {

    const [taskObj, setTaskObj] = useState({
        taskId: 0,
        taskTitle: "",
        taskDesc: "",
        taskStartDate: "",
        taskEndDate: "",
        taskPriority: "Low",
        taskEmp: ""
    });
    const [taskIdCounter, setTaskIdCounter] = useState(1);

    // const [taskTitle, setTaskTitle] = useState();
    useEffect(() => {
        if(editingTask) {
            setTaskObj(editingTask);
        }
    }, [editingTask]);
    // without useEffect form will never update when a new task is selected for editing
    // React does not auto-sync props into state
    // useState runs only once at component load
    // without useEffect form remains empty even after we click on edit task button
    // whenever editingTask changes, update form state
    // useEffect is like a bridge between selected component and input boxes.

    const taskHandler = (e) => {
        e.preventDefault();
        // setTaskObj({...taskObj, taskId: taskIdCounter});
        setTaskIdCounter(taskIdCounter + 1);
        // onAdd(taskTitle);
        onAdd(taskObj);
        // console.log(taskData);
        setTaskObj({
            taskId: taskIdCounter,
            taskTitle: "",
            taskDesc: "",
            taskStartDate: "",
            taskEndDate: "",
            taskPriority: "",
            taskEmp: ""
        });
    }

    const textChangeHandler = (e) => {
        // setTaskTitle(e.target.value);
        // console.log("Task Title:",taskTitle);
        setTaskObj({...taskObj, [e.target.name]: e.target.value});
    }

    return (
        <form onSubmit={taskHandler} className="max-w-2xl mt-8 mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Task</h2>
            
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Task Title</label>
                <input 
                    type="text" 
                    id="title" 
                    placeholder="Enter task title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    name="taskTitle"
                    value={taskObj.taskTitle}
                    onChange={textChangeHandler}
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Task Description</label>
                <textarea 
                    id="description" 
                    placeholder="Enter task description" 
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={textChangeHandler}
                    value={taskObj.taskDesc}
                    name="taskDesc"
                ></textarea>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                    <input 
                        type="date" 
                        id="startDate"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={textChangeHandler}
                        value={taskObj.taskStartDate}
                        name="taskStartDate"
                    />
                </div>
                
                <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                    <input 
                        type="date" 
                        id="endDate"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={textChangeHandler}
                        value={taskObj.taskEndDate}
                        name="taskEndDate"
                    />
                </div>
            </div>
            
            <div className="mb-6">
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select 
                    id="priority"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={textChangeHandler}
                    name="taskPriority"
                    value={taskObj.taskPriority}
                >
                    <option value="">Select priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <div className="mb-6">
                <label htmlFor="emp" className="block text-sm font-medium text-gray-700 mb-2">Select Employee</label>
                <select 
                    id="emp"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={textChangeHandler}
                    name="taskEmp"
                    value={taskObj.taskEmp}
                >
                    <option value="">Select employee</option>
                    <option value="John">John</option>
                    <option value="Max">Max</option>
                    <option value="Alex">Alex</option>
                </select>
            </div>
            
            <button 
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
                Add Task
            </button>
        </form>
    )
}