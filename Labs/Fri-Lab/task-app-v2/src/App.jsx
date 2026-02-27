import { useState } from 'react';
import './App.css'
import { Header } from './components/header/Header'
import { TaskForm } from './components/task/TaskForm'
import { TaskDisplay } from './components/task/TaskDisplay';

function App() {

  const username = "Ravi";
  const [taskList, setTaskTitle] = useState([]);
  const [editTaskObj, setEditTaskObj] = useState(null);

  const addTask = (task) => {
    setTaskTitle([...taskList, task]);
    // Logic for edit task (hint: use if condition)
  }

  const deleteTask = (id) => {
      setTaskTitle(taskList.filter(task => task.taskId != id));
  }

  const editTask = (task) => {
    setEditTaskObj(task);
  }
  
  return (
    <>
      <Header username={username}/>
      <TaskForm onTaskAdd={addTask} editTaskObj={editTaskObj}/>
      <TaskDisplay 
        taskList={taskList} 
        onDelete={deleteTask}
        onEdit={editTask}
        />
    </>
  )
}

export default App
