import { useState } from "react";
import "../styles/Navbar.css";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="logo">Scarlet</div>

            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
            </div>

            <nav className={`menu ${isOpen ? "open" : ""}`}>
                <a href="#inicio">Inicio</a>
                <a href="#sobre-mi">Sobre mí</a>
                <a href="#portfolio">Proyectos</a>
                <a href="#blog">Habilidades</a>
                <a href="#contacto">Contactos</a>
            </nav>
        </div>
    )
}

export default HamburgerMenu 
