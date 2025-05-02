import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextInput } from "@mantine/core";

function EditTasks(props) {
	const { id } = useParams();
	const [editTask, setEditTask] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const taskToEdit = props.taskList.find((task) => task.id === parseInt(id));
		if (taskToEdit) {
			setEditTask(taskToEdit.task);
		}
	}, [id, props.taskList]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const updatedTaskList = props.taskList.map((task) =>
			task.id === parseInt(id) ? { ...task, task: editTask } : task
		);
		props.setTaskList(updatedTaskList);
		navigate("/tasks");
	};

	return (
		<div className="to-do-list">
			<form onSubmit={handleSubmit}>
				<label>
					<h1> Edit task:</h1>
					<TextInput
						placeholder="Write your task here..."
						value={editTask}
						onChange={(e) => setEditTask(e.target.value)}
					/>
				</label>
				<Button
					type="submit"
					gradient={{ from: "yellow", to: "violet", deg: 131 }}
				>
					Save
				</Button>
			</form>
		</div>
	);
}

export default EditTasks;
