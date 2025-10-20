import { useNavigate } from "react-router-dom";
import "../styles/ActionSection.css";
import { Link } from "react-scroll";
import { FaBriefcase } from "react-icons/fa";

const ActionSection = () => {
    const navigate = useNavigate();

    const handleGoToProjects = () => {
        navigate("/projects");
    };

    return (
        <div className="see-projects">
            <h2>
                ¿Quieres ver todos mis proyectos?{" "}
                <FaBriefcase className="icon-title" />
            </h2>
            <div className="buttoms">
                <Link to="about" smooth={true} duration={500}>
                    Conóceme mejor
                </Link>
                <button onClick={handleGoToProjects}> Ver Portafolio</button>
            </div>
        </div>
    );
};

export default ActionSection;
