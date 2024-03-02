import { useState } from 'react'

import './App.css'
import tasksData from './data/tasks.json';
import Task from './Task';

// Get tasks data from json
// Show the list of tasks
// An input and form so a user can create and add a new task and then we see in the list.


function App() {
  const [count, setCount] = useState(0)
  const [showHello, setShowHello] = useState(true)
  const [tasks, setTasks] = useState(tasksData);
  const [newTaskInput, setNewTaskInput] = useState('');
  
  
  // console.log(tasks)


  
  const toggleDisplayMessage = () => setShowHello(!showHello); 
  const renderDisplayMessage = () => showHello ? "Hello" : "Goodbye"
  
  

  

  const addTaskHandler = () => {
    console.log('add task')
    const newTask = { id: tasks.length + 1, task: newTaskInput, completed: false};
    
    setTasks([...tasks, newTask]) // the spread operator combines the current tasks with the new one
  }
  const handleNewTaskInput = (event) => {
    console.log('handleNewTaskInput' , event.target.value);
    setNewTaskInput(event.target.value); // hook up input to component state


  }

  const deleteTaskHandler = (taskToDelete) => {
    const updatedTasks = tasks.filter(task => {
      if(task.id === taskToDelete.id) {
        return false;
      } else {
        return true;
      }

    });
    setTasks(updatedTasks);

  }
  

  

  return (
    <>
      
        <h1>{showHello ? "Hello" : "Goodbye"}</h1> 
        <h1> {renderDisplayMessage()}</h1> 
        <button onClick={toggleDisplayMessage}>Change message</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>Tasks App</h1>
        <ul>
        
          {tasks.map((task, i) => 
            <Task
              task={task}
              key= {i}
              deleteTaskHandler={deleteTaskHandler}
          
            />
          )}
        </ul>
          
        
        <h2>Create New Task</h2>
        <input placeholder={'enter task description'} onChange={handleNewTaskInput} value={newTaskInput}></input> 
        <button onClick={addTaskHandler}>Add New Task</button>
    </>
  )
}

export default App
