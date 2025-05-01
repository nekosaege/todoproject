import { Link } from "react-router-dom";
import { Button } from '@mantine/core';

function About() {
	return (
		<div className="homepage">
			<h1>About:</h1>
			<p>
				Welcome to ToDo! To address your task management needs, we have
				developed ToDO, a user-friendly tool designed to streamline your
				workflow. If you're looking to organise your tasks and have a better way
				to see or daily schedules, our tool is designed with simplicity and
				functionality in mind. Our mission is to make life easier for everyone.
				This project was developed by Neko using React. We’re constantly
				improving and would love your feedback.
			</p>

			<div className="about-buttons">
				<Link to="/">
					<Button variant="gradient">Home page</Button>
				</Link>
				<Link to="/tasks">
					<Button gradient={{ from: "yellow", to: "violet", deg: 131 }}>
						Access Tasks
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default About;
