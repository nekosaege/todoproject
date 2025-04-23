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
				<button
					onClick={() => setSection("todo")}
					style={{
						padding: "10px 20px",
						backgroundColor: "#ac6464",
						color: "white",
						border: "1px solid rgb(81, 200, 213)",
						borderRadius: "5px",
						cursor: "pointer",
            fontFamily: "autography",
            fontSize: "30px",

					}}
				>
					Tasks
				</button>
				<button onClick={() => setSection("done")}
          style={{
						padding: "10px 20px",
						backgroundColor: "#ac6464",
						color: "white",
						border: "1px solid rgb(81, 200, 213)",
						borderRadius: "5px",
						cursor: "pointer",
            fontFamily: "autography",
            fontSize: "30px"
					}}>Appointments</button>
				<button onClick={() => setSection("birthdays")}
          style={{
						padding: "10px 20px",
						backgroundColor: "#ac6464",
						color: "white",
						border: "1px solid rgb(81, 200, 213)",
						borderRadius: "5px",
						cursor: "pointer",
            fontFamily: "autography",
            fontSize: "30px",
					}}>Birthdays</button>
			</div>
		</nav>
	);
}
