import { Link } from "react-router-dom";

function ErrorPage() {
	const today = new Date().toLocaleDateString;

	return (
		<div className="homepage">
			<p>An error got caught</p>

			<div className="about-buttons">
				<Link to="/">
					<button>Home page</button>
				</Link>
			</div>
		</div>
	);
}

export default ErrorPage;
