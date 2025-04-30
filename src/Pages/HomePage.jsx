import { Link } from "react-router-dom";

function Home() {
	const today = new Date().toLocaleDateString();

	return (
		<div className="homepage">
			<h1>Welcome to ToDO</h1>
			<p>Today is {today}</p>

			<div className="home-buttons">
				<Link to="/tasks">
					<button style={{ marginRight: "1rem", color: "#333"}}>Access Tasks</button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
