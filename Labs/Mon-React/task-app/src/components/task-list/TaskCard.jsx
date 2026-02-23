export const TaskCard = ({task, onDelete, onEdit}) => {
    const priorityColorMap = {
        'High': 'bg-red-100 text-red-800 border-red-300',
        'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-300',
        'Low': 'bg-green-100 text-green-800 border-green-300'
    };

    const priorityColor = priorityColorMap[task.taskPriority] || 'bg-gray-100 text-gray-800';

    return (
        <li className="bg-white rounded-lg shadow-md p-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Task ID: {task.taskId}</span>
            </div>
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900 flex-1">{task.taskTitle}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${priorityColor}`}>
                    {task.taskPriority}
                </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{task.taskDesc}</p>
            
            <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Start Date</span>
                    <p className="text-gray-900 font-medium">{task.taskStartDate}</p>
                </div>
                <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">End Date</span>
                    <p className="text-gray-900 font-medium">{task.taskEndDate}</p>
                </div>
            </div>

            <div className="pt-3 border-t border-gray-200 mb-3">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Assigned To</span>
                <p className="text-gray-900 font-medium">{task.taskEmp}</p>
            </div>

            <div className="flex justify-between">
                <button 
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 w-full"
                    onClick={() => onDelete(task.taskId)}
                >
                    Delete
                </button>

                <button 
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 w-full"
                    onClick={() => onEdit(task)}
                >
                    Edit
                </button>
            </div>
        </li>
    )
}