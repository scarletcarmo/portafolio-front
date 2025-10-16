import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Hamburger.css";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="hamburger-container">
            <div className="navbar-logo">scarlet</div>

            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
            </div>

            <nav className={`menu ${isOpen ? "open" : ""}`}>
                <Link to="/" onClick={closeMenu}>Inicio</Link>
                <Link to="/about" onClick={closeMenu}>Sobre mí</Link>
                <Link to="/projects" onClick={closeMenu}>Proyectos</Link>
                <Link to="/skills" onClick={closeMenu}>Habilidades</Link>
                <Link to="/experience" onClick={closeMenu}>Experiencia</Link>
                <Link to="/contact" onClick={closeMenu}>Contactos</Link>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
