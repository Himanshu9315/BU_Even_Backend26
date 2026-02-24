import { useState } from 'react';
import './App.css'
import { Header } from './components/header/Header'
import { TaskForm } from './components/taskOperations/TaskForm';
import { TaskList } from './components/taskOperations/TaskList';

function App() {
  const username = "Ravi";

  const [taskList, setTaskList] = useState([]);
  const [editTaskObj, setEditTaskObj] = useState(null);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  }

  const deleteTask = (taskId) => {
      setTaskList(taskList.filter(task => task.taskId != taskId));
  }

  const editTask = (task) => {
    setEditTaskObj(task);
  }

  return (
    <>
      <Header username={username}/>
      <TaskForm onAdd={addTask} editTaskObj={editTaskObj}/>
      <TaskList 
        taskList={taskList} 
        onDelete={deleteTask}
        onEdit={editTask}/>
    </>
  )
}

export default App
