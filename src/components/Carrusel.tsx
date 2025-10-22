import rk1 from "../assets/rikoba/rk1.jpeg";
import rk2 from "../assets/rikoba/r2.jpeg";
import rk3 from "../assets/rikoba/r3.jpeg";

import "../styles/Carrusel.css";

interface CarruselProps {
    filter: string;
}
interface Project {
    id: number;
    type: string;
    title: string;
    description: string;
    tech: string[];
    images: string[];
}

const Carrusel = ({ filter }: CarruselProps) => {
    const projects: Project[] = [
        {
            id: 1,
            type: "WEB",
            title: "RIKOBA",
            description: "Plataforma web desarrollada en PHP, HTML y CSS para gestión de ventas.",
            tech: ["PHP", "JS", "HTML", "MySQL"],
            images: [rk1, rk2, rk3],
        },
        {
            id: 2,
            type: "WEB",
            title: "TravelMate",
            description: "Plataforma web para una agencia de viajes que permite buscar destinos, reservar paquetes turísticos y gestionar itinerarios.",
            tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
            images: [], 
        },
    ];

    const filteredProjects =
        filter === "ALL"
            ? projects
            : projects.filter((project) => project.type === filter);

    const scroll = (direction: "left" | "right") => {
        const container = document.querySelector(".carrusel-cards") as HTMLElement;
        const scrollAmount = 320; // ancho de cada card + margen
        if (direction === "left") container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        else container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    return (
        <div className="carrusel-wrapper">
            <button className="btn-prev" onClick={() => scroll("left")}>
                &#10094;
            </button>
            <div className="carrusel-cards">
                {filteredProjects.map((project) =>
                    project.images.map((img, index) => (
                        <div key={index} className="card">
                            <img src={img} alt={`${project.title} ${index + 1}`} />
                            <div className="card-content">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="techs">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <button className="btn-next" onClick={() => scroll("right")}>
                &#10095;
            </button>
        </div>
    );
};

export default Carrusel;
