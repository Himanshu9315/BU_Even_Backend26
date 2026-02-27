export const TaskCard = ({ task, onDelete, onEdit }) => {
    const { taskId, taskTitle, taskDescription, startDate, endDate, employee, priority } = task || {};

    const priorityClasses = (p) => {
        if (!p) return 'bg-gray-200 text-gray-800';
        switch (p.toLowerCase()) {
            case 'urgent':
            case 'critical':
                return 'bg-red-600 text-white';
            case 'high':
                return 'bg-orange-500 text-white';
            case 'medium':
                return 'bg-yellow-400 text-gray-900';
            case 'low':
                return 'bg-green-500 text-white';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    };

    return (
        <li className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-150 overflow-hidden">
            <div className="border-l-4 border-blue-600 dark:border-blue-500 p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400">#{taskId}</p>
                <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300">{taskTitle}</h3>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">{taskDescription}</p>

                <div className="mt-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs text-gray-700 dark:text-gray-200">
                        {employee ? employee.charAt(0).toUpperCase() : '–'}
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-200">{employee || 'Unassigned'}</span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                    <div>
                        <span>{startDate || '-'} → {endDate || '-'}</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${priorityClasses(priority)}`}>{priority || 'None'}</div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                    <button onClick={() => onEdit(task)} className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded hover:bg-blue-600 transition-colors">
                        Edit
                    </button>
                    <button onClick={() => onDelete(taskId)} className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded hover:bg-red-600 transition-colors">
                        Delete
                    </button>
                </div>

            </div>
        </li>
    );
};