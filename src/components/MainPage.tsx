import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

const MainPage = () => {
    return (
        <>
            <section id="home"><Intro /></section>
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="skills"><Skills /></section>
            <section id="experience"><Experience /></section>
            <section id="contact"><Contact /></section>
        </>
    );
}

export default MainPage