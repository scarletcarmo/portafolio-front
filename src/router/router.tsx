import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../components/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />, 
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/about", element: <About /> },
            { path: "/projects", element: <Projects /> },
            { path: "/skills", element: <Skills /> },
            { path: "/experience", element: <Experience /> },
            { path: "/contact", element: <Contact /> },
        ],
    },
]);

export default router;
