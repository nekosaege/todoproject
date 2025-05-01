import { Link } from "react-router-dom";
import { Button } from '@mantine/core';


function Home() {
	const today = new Date().toLocaleDateString();

	return (
		<div className="homepage">
			<h1>Welcome to ToDo</h1>
			<p>Today is {today}</p>

			<div className="home-buttons">
				<Link to="/tasks">
					<Button
						variant="gradient"
						gradient={{ from: "yellow", to: "violet", deg: 131 }}>
						Access Tasks
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
