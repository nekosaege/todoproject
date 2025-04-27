import tasks from "./tasks.json";
import { useState } from "react";

function Tasks() {
	const [taskList, setTaskList] = useState(tasks);
	const [newTask, setNewTask] = useState("");

	function handleInputChange(e) {
		setNewTask(e.target.value);
	}
	function addTask() {
		if (newTask.trim() === "") return;
		setTaskList([...taskList, { task: newTask, completed: false }]);
		setNewTask("");
	}
	function deleteTask(index) {
		const tasksUpdated = taskList.filter((_, i) => i !== index);
		setTaskList(tasksUpdated);
	}

	function setAsComplete(index) {
		const updatedTasks = [...taskList];
		updatedTasks[index].completed = !updatedTasks[index].completed;
		setTaskList(updatedTasks);
	}
	return (
		<div>
			<div className="to-do-list">
				<h1>Task List</h1>
				<input
					type="text"
					placeholder="Add your new task"
					value={newTask}
					onChange={handleInputChange}
				/>
				<button className="add-button" onClick={addTask}>
					🆕
				</button>
			</div>

			<ol>
				{taskList.map((taskObj, index) => (
					<li key={index}>
						<span className={taskObj.completed ? "text completed" : "text"}>
							{taskObj.task}
						</span>
						<button className="delete-button" onClick={() => deleteTask(index)}>
							❌
						</button>

						<button
							className="check-button"
							onClick={() => setAsComplete(index)}
						>
							✔️
						</button>
					</li>
				))}
			</ol>
		</div>
	);
}

export default Tasks;
