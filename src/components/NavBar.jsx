import logo from "../assets/image.png";
import "./NavBar.css";

export function NavBar() {
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<img src={logo} alt="logo" />
				<h1> </h1>
			</div>
			<div className="navbar__links">
				<button onClick={() => setSection("todo")}>To do</button>
				<button onClick={() => setSection("done")}>Done</button>
				<button onClick={() => setSection("birthdays")}>
					Birthdays
				</button>
			</div>
		</nav>
	);
}
