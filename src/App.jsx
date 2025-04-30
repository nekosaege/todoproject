import { useState } from "react";
import { NavBar } from "./components/NavBar";
import Tasks from "./Pages/Tasks";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import ErrorPage from "./ErrorPage";
import { Footer } from "./components/Footer";
import Contact from "./Contact";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
			
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>



			<Footer />
        </>
    );
}

export default App;