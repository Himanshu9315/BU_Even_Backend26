import { TaskCard } from "./TaskCard"

export const TaskList = ({taskList, onDelete, onEdit}) => {
    return (
        <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tasks</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    taskList.map((task) => (
                        <TaskCard 
                            key={task.taskId || task.taskTitle} 
                            task={task}
                            onDelete={onDelete}
                            onEdit={onEdit}/>
                    ))
                }
            </ul>
        </div>
    )
}