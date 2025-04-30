import logo from "../assets/image.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

export function NavBar() {
	return (
		<nav className="navbar" style={{backgroundColor: "#1e1e1e",
			padding: "1rem",
			display: "flex",
			justifyContent:"space-between",
			alignItems:"center",
			borderBottom: "1px solid #333",
		}}>
			<div className="navbar__logo">
				<img src={logo} alt="logo" />
				<h1> </h1>
			</div>
			<div className="navbar__links">
				<Link to="/">
					<button className="home-button"
						style={{ marginRight: "1rem", color: "#333"}}>
						Home
					</button>
				</Link>
				<Link to="/about">
					<button className="about-button"
						style={{ marginRight: "1rem", color: "#333"}}>
						About
					</button>
				</Link>
				<Link to="/contact">
				<button className="contact-button"
					style={{ marginRight: "1rem", color: "#333"}}>
					Contact
				</button>
				</Link>
			</div>
		</nav>
	);
}
