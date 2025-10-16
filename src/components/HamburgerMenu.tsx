import { useState } from "react";
import "../styles/Hamburger.css";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="hamburger-container">
            <div className="navbar-logo">scarlet</div>

            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
            </div>

            <nav className={`menu ${isOpen ? "open" : ""}`}>
                <a href="#home" onClick={toggleMenu}>Inicio</a>
                <a href="#about" onClick={toggleMenu}>Sobre mí</a>
                <a href="#projects" onClick={toggleMenu}>Proyectos</a>
                <a href="#skills" onClick={toggleMenu}>Habilidades</a>
                <a href="#experience" onClick={toggleMenu}>Experiencia</a>
                <a href="#contact" onClick={toggleMenu}>Contactos</a>
            </nav>

        </div>
    )
}

export default HamburgerMenu 
