import tasks from "../components/tasks.json";
import { useState } from "react";

function Tasks() {
	const [taskList, setTaskList] = useState(tasks);
	const [newTask, setNewTask] = useState("");

	function handleInputChange(e) {
		setNewTask(e.target.value);
	};
	function addTask() {
		if (newTask.trim() === "") return;
		setTaskList([...taskList, { task: newTask, completed: false }]);
		setNewTask("");
	}
	function deleteTask(index) {
		const tasksUpdated = taskList.filter((_, i) => i !== index);
		setTaskList(tasksUpdated);
	};

	function setAsComplete(index) {
		const updatedTasks = [...taskList];
		updatedTasks[index].completed = !updatedTasks[index].completed;
		setTaskList(updatedTasks);
	};
	const handleFormSubmit=(e)=>{
		e.preventDefault();
		addTask();
	};
	return (
		<div>
			<div className="to-do-list">
				<h1>Task List</h1>
				<form onSubmit={handleFormSubmit}>
					<input
						type="text"
						placeholder="Add your new task"
						value={newTask}
						onChange={handleInputChange}
					/>
					<button className="add-button" onClick={addTask} style={{ marginRight: "1rem", color: "#333"}}>
						Add
					</button>
				</form>
			</div>

			<ol className="blabla">
				{taskList.map((taskObj, index) => (
					<li key={taskObj.id}>
						<span className={taskObj.completed ? "text completed" : "text"}>
							{taskObj.task}
						</span>
						<button className="delete-button" onClick={() => deleteTask(index)} style={{ marginRight: "1rem", color: "#333"}}>
							❌
						</button>

						<button
							className="check-button"
							onClick={() => setAsComplete(index)}style={{ marginRight: "1rem", color: "#333"}}>
							✔️
						</button>
					</li>
				))}
			</ol>
		</div>
	);
}

export default Tasks;
