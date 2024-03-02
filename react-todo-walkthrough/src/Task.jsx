function Task ({ task, key, deleteTaskHandler}) {
    // const task = props.tasks;
    // const key = props.key;
    // const deleteTaskHandler = props.deleteTaskHandler;
    const taskDescription = `ID: ${task.id}, ${task.task}, COMPLETED: ${task.completed ? "Yes" : "No"}`;
    
    
    return (
        <li key = {key}>{taskDescription}<button onClick={() => deleteTaskHandler(task)}>Delete</button></li>
    );
        
      


}
export default Task;