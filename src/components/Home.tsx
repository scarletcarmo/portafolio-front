import { Link } from "react-scroll";
import "../styles/Home.css";
import { FiChevronDown } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Home = () => {

    return (
        <>
            <section className="home">
                <div className="overlay">
                    <h2>Hola, Soy Scarlet</h2>
                    <div className="social-links">
                        <a href="https://github.com/scarletcarmo" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/scarlet-carvaca-313255206/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/sd.carmo" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                    <Link
                        to="about"
                        smooth={true}
                        duration={800}
                        className="scroll-down"
                    >
                        <FiChevronDown size={40} />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Home;
