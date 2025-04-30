import { Link } from "react-router-dom";

function Contact() {

	return (
		<div className="contact">
			<h1>You can find us on:</h1>
            <p>+33782335311</p>
            <p>todotasks@icloud.com</p>

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

export default Contact