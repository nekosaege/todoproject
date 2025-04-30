import { Link } from "react-router-dom";

function About() {

	return (
		<div className="homepage">
			<h1>About:</h1>
            <p>Welcome to ToDo!
            
    To address your task management needs, we have developed ToDO, a user-friendly tool designed to streamline your workflow. If you're looking to organise your tasks and have a better way to see or daily schedules, our tool is designed with simplicity and functionality in mind.

Our mission is to make life easier for everyone. This project was developed by Neko using React.

We’re constantly improving and would love your feedback.</p>

			<div className="about-buttons">
				<Link to="/">
					<button style={{ marginRight: "1rem", color: "#333"}}>Home page</button>
				</Link>
                <Link to="/tasks">
					<button style={{ marginRight: "1rem", color: "#333"}}>Access Tasks</button>
				</Link>
			</div>
		</div>
	);
}

export default About;
