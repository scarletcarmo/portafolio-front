import { Link } from "react-scroll";
import "../styles/Home.css";
import { FiChevronDown } from "react-icons/fi";
const Home = () => {

    return (
        <>
            <section className="home">
                <div className="overlay">
                    <h2>Hola, Soy Scarlet</h2>
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
