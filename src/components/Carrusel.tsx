import rk1 from "../assets/rikoba/rk1.jpeg";
import rk2 from "../assets/rikoba/r2.jpeg";
import rk3 from "../assets/rikoba/r3.jpeg";
import h1 from "../assets/hotel/h1.png";

import "../styles/Carrusel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

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
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            type: "WEB",
            title: "RIKOBA",
            description: "Plataforma web desarrollada en PHP, HTML y CSS para gestión de ventas.",
            tech: ["PHP", "JS", "HTML", "MySQL"],
            images: [rk1],
        },
        {
            id: 2,
            type: "WEB",
            title: "TravelMate",
            description: "Plataforma web para una agencia de viajes que permite buscar destinos, reservar paquetes turísticos y gestionar itinerarios.",
            tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
            images: [h1],
        },
        {
            id: 3,
            type: "WEB",
            title: "SimpleChat",
            description: "Aplicación web de chat en tiempo real desarrollada con una arquitectura de microservicios en NestJS y frontend en React. Permite la comunicación instantánea entre usuarios mediante WebSockets.",
            tech: ["React", "TypeScript", "NestJS", "Socket.io", "Microservicios", "Node.js"],
            images: [rk3],
        },
    ];

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const filteredProjects =
        filter === "ALL"
            ? projects
            : projects.filter((project) => project.type === filter);

    return (
        <>
            <div className="carrusel-wrapper">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={false}
                    customLeftArrow={<button className="btn-prev">{"<"}</button>}
                    customRightArrow={<button className="btn-next">{">"}</button>}
                >
                    {filteredProjects.map((item) => (
                        <div key={item.id} className="card">
                            <img src={item.images[0]} alt={item.title} />
                            <div className="card-content">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="techs">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="tech">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </Carousel>
            </div>
        </>

    );
};

export default Carrusel;
