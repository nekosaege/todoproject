import tasks from "../components/tasks.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Button, TextInput, Card } from "@mantine/core";

function Tasks({ taskList, setTaskList }) {
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
	const handleFormSubmit = (e) => {
		e.preventDefault();
		addTask();
	};
	return (
		<div>
			<div className="to-do-list">
				<h1>Task List</h1>
				<form onSubmit={handleFormSubmit}>
					<TextInput
						placeholder="Write your task here..."
						value={newTask}
						onChange={handleInputChange}
					/>
					<Button
						className="add-button"
						onClick={addTask}
						variant="gradient"
						gradient={{ from: "yellow", to: "violet", deg: 131 }}
					>
						Add
					</Button>
				</form>
			</div>

			<Flex gap="md" justify="flex-start" align="flex-start" wrap="wrap">
				{taskList.map((taskObj, index) => (
					<Card
						key={taskObj.id}
						shadow="sm"
						padding="lg"
						radius="md"
						withBorder
						style={{ width: 250 }}
					>
						<Card.Section>
							<span
								style={{
									textDecoration: taskObj.completed ? "line-through" : "none",
									fontWeight: "bold",
									fontSize: "1.2rem",
								}}
							>
								{taskObj.task}
							</span>
						</Card.Section>

						<Flex
							gap="sm"
							justify="center"
							align="center"
							direction="row"
							wrap="wrap"
							mt="md"
						>
							<Button
								onClick={() => deleteTask(index)}
								variant="gradient"
								gradient={{ from: "yellow", to: "violet", deg: 131 }}
							>
								❌
							</Button>
							<Button
								onClick={() => setAsComplete(index)}
								variant="gradient"
								gradient={{ from: "yellow", to: "violet", deg: 131 }}
							>
								✔️
							</Button>
							<Link to={`/edittask/${taskObj.id}`}>
								<Button
									variant="gradient"
									gradient={{ from: "yellow", to: "violet", deg: 131 }}
								>
									Edit
								</Button>
							</Link>
						</Flex>
					</Card>
				))}
			</Flex>
		</div>
	);
}

export default Tasks;
