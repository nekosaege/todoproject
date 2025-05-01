import logo from "../assets/image.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Button } from '@mantine/core';


export function NavBar() {
	return (
		<nav className="navbar" style={{
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
					<Button className="home-button"
						variant="gradient"
						gradient={{ from: 'yellow', to: 'violet', deg: 131 }}>
						Home
					</Button>
				</Link>
				<Link to="/about">
					<Button className="about-button"
						variant="gradient"
						gradient={{ from: 'yellow', to: 'violet', deg: 131 }}>
						About
					</Button>
				</Link>
				<Link to="/contact">
				<Button className="contact-button"
					variant="gradient"
					gradient={{ from: 'yellow', to: 'violet', deg: 131 }}>
					Contact
				</Button>
				</Link>
			</div>
		</nav>
	);
}
