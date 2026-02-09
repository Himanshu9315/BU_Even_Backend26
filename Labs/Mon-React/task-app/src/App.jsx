import { useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { TaskForm } from './components/task-form/TaskForm'
import { TaskList } from './components/task-list/TaskList';
import { AIChat } from './components/ai-services/AIchat';

function App() {

    const [taskData, setTaskData] = useState([]);

    const addTask = (task) => {
        setTaskData([...taskData, task]);
        console.log("Task Added Successfully...",taskData);
    }

    const deleteTask = (taskId) => {
        setTaskData(taskData.filter((task) => task.taskId !== taskId));
        console.log("Task Deleted Successfully...",taskData);
    }

    return (
        <>
            <Header/>
            <div className="app-container">
                <div className="form-section">
                    <TaskForm onAdd={addTask}/>
                </div>
                <div className="chat-section">
                    <AIChat/>
                </div>
            </div>
            <TaskList 
                taskList={taskData}
                onDelete={deleteTask}
                />
        </>
    )
}

export default App
