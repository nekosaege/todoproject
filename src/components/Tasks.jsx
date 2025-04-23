import tasks from './tasks.json'
import { useState } from 'react';

function Tasks() {
    const [taskList, setTaskList] = useState(tasks);
    
    return (
        <div>
            <h1>Task List</h1>
            {taskList.map((taskObj, index) => (
<div 
    className={`task ${taskObj.completed ? 'completed' : 'incompleted'}`} 
    key={index}
>
    <h2> {taskObj.task}</h2>
    <p>Status: {taskObj.completed ? 'Completed' : 'Not completed'}</p>
</div>
    ))}
        </div>
    );
}

export default Tasks;