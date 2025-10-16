
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="overlay">
        <h2>Portafolio</h2>
        <p>
          Conoce mi portafolio. Estos son algunos de los proyectos en los que he participado como freelance.
        </p>
      </div>

      <div className="filter">
        <button className="active">ALL</button>
        <button>IOS</button>
        <button>ANDROID</button>
        <button>WEB</button>
      </div>
    </section>
  )
}

export default Projects
