import { TaskCard } from "./TaskCard";

export const TaskDisplay = ({ taskList, onDelete, onEdit }) => {
    return (
        <section className="mx-auto max-w-6xl px-4 py-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Your Pending Tasks</h2>

            <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {taskList.map((item, index) => (
                    <TaskCard 
                        key={index} 
                        task={item} 
                        onDelete={onDelete}
                        onEdit={onEdit}/>
                ))}
            </ul>
        </section>
    );
};