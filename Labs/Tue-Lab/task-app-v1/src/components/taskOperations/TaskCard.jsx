export const TaskCard = ({task, index, onDelete, onEdit}) => {
    const getPriorityColor = (priority) => {
        switch(priority?.toLowerCase()) {
            case 'critical':
                return 'bg-red-100 text-red-800 border-red-300';
            case 'high':
                return 'bg-orange-100 text-orange-800 border-orange-300';
            case 'medium':
                return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'low':
                return 'bg-green-100 text-green-800 border-green-300';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    const getPriorityBadge = (priority) => {
        switch(priority?.toLowerCase()) {
            case 'critical':
                return '🔴';
            case 'high':
                return '🟠';
            case 'medium':
                return '🟡';
            case 'low':
                return '🟢';
            default:
                return '⚪';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200 p-6 overflow-hidden">
            <div>
                TaskID : {task.taskId}
            </div>
            {/* Header with Priority Badge */}
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800 flex-1 pr-2">{task.taskTitle || 'Untitled Task'}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(task.priority)} whitespace-nowrap`}>
                    {getPriorityBadge(task.priority)} {task.priority?.charAt(0).toUpperCase() + task.priority?.slice(1)}
                </span>
            </div>

            {/* Description */}
            {task.taskDescription && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{task.taskDescription}</p>
            )}

            {/* Employee Name */}
            {task.empName && (
                <div className="mb-3 pb-3 border-b border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Assigned To</p>
                    <p className="text-sm font-semibold text-blue-600">{task.empName}</p>
                </div>
            )}

            {/* Dates Section */}
            {(task.startDate || task.endDate) && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                    {task.startDate && (
                        <div className="bg-gray-50 rounded p-2">
                            <p className="text-xs text-gray-500 uppercase">Start Date</p>
                            <p className="text-sm font-semibold text-gray-700">{new Date(task.startDate).toLocaleDateString()}</p>
                        </div>
                    )}
                    {task.endDate && (
                        <div className="bg-gray-50 rounded p-2">
                            <p className="text-xs text-gray-500 uppercase">End Date</p>
                            <p className="text-sm font-semibold text-gray-700">{new Date(task.endDate).toLocaleDateString()}</p>
                        </div>
                    )}
                </div>
            )}

            {/* Action Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 text-sm">
                View Details
            </button>

            <div>
                <div className="grid grid-cols-2 gap-3 my-2">
                    <button onClick={() => onDelete(task.taskId)}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 text-sm">
                        Delete Task
                    </button>
                    <button onClick={() => onEdit(task)}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 text-sm">
                        Edit Task
                    </button>
                </div>
                
            </div>

        </div>
    )
}