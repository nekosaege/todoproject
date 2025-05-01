import { useState } from "react";
import { NavBar } from "./components/NavBar";
import Tasks from "./Pages/Tasks";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import ErrorPage from "./ErrorPage";
import { Footer } from "./components/Footer";
import Contact from "./Contact";
import EditTasks from "./Pages/EditTasks";
import tasks from "./components/tasks.json";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
function App() {
    const [taskList, setTaskList] = useState(tasks);
return (
    <MantineProvider>
        <>
            <NavBar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks taskList={taskList} setTaskList={setTaskList} />} />
                <Route path="/About" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/edittask/:id" element={<EditTasks taskList={taskList} setTaskList={setTaskList} />} />           
            </Routes>
            


            <Footer />
        </>
    </MantineProvider>
    );
}

export default App;