import "../styles/Projects.css";
import Filter from "./Filter";
import { useState } from "react";
import Carrusel from "./Carrusel";
const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  console.log(selectedFilter);

  const onChangeFilter = (filter: string) => {
    setSelectedFilter(filter);
  }

  return (
    <>
      <section className="projects" id="projects">
        <div className="overlay">
          <h2>Portafolio</h2>
          <p>
            Conoce mi portafolio. Estos son algunos de los proyectos en los que he participado como freelance.
            Cada proyecto refleja mi pasión por crear soluciones eficientes y funcionales, combinando diseño y desarrollo web.
          </p>
        </div>
      </section>
      <Filter onFilterChange={onChangeFilter} />
      <div className="project-section">
        <Carrusel filter={selectedFilter}></Carrusel>
      </div>
    </>
  )
}

export default Projects
