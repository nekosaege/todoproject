import { useState } from "react";
import { NavBar } from "./components/NavBar";
import Tasks from "./components/Tasks";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavBar />
			<Tasks />
		</>
	);
}

export default App;
