import "../styles/Projects.css";
import "../styles/Filter.css";

import Filter from "./Filter";

const Projects = () => {
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
      <Filter />
    </>
  )
}

export default Projects
