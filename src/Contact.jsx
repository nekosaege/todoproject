import { Link } from "react-router-dom";
import { Button } from '@mantine/core';


function Contact() {
	return (
		<div className="contact">
			<h1>You can find us on:</h1>
			<p>+33782335311</p>
			<p>todotasks@icloud.com</p>

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

export default Contact;
