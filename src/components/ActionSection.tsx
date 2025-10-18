import { useNavigate } from "react-router-dom";
import "../styles/ActionSection.css"
import { Link } from "react-scroll";

const ActionSection = () => {
    const navigate = useNavigate();

    /* const handleScrollToAbout = () => {
         const aboutSection = document.getElementById("about");
         if (aboutSection) {
             aboutSection.scrollIntoView({ behavior: "smooth" });
         }
     };*/

    const handleGoToProjects = () => {
        navigate("/projects");
    };


    return (
        <div className="see-projects">
            <h2>¿Quieres ver todos mis proyectos?</h2>
            <div className="buttoms">
                <Link to="about" smooth={true} duration={500}>
                    Conóceme mejor
                </Link>
                <button onClick={handleGoToProjects}>Ver Portafolio</button>
            </div>
        </div>
    )
}

export default ActionSection
