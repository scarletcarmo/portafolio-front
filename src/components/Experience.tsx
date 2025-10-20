import ExperienceCard from "./ExperienceCard";
import "../styles/Experience.css";

const Experience = () => {

  const experiences = [
    {
      role: "Programador Frontend – Dev Jos",
      date: "01-08-2023 – 05-09-2025",
      details: [
        "Mejora de la experiencia de usuario y usabilidad de la aplicación.",
        "Optimización de sitios y aplicaciones web.",
        "Especialización en TypeScript, React y bases de datos SQL."
      ]
    },
    {
      role: "Programador Backend – Integrity",
      date: "01-05-2023 – 01-08-2023",
      details: [
        "Desarrollo de soluciones en C y MySQL en entorno bancario.",
        "Colaboración en proyectos de seguridad e integridad de datos.",
        "Optimización del rendimiento de la aplicación.",
        "Coordinación con equipo Frontend."
      ]
    },
    {
      role: "Programador Backend – GOIT",
      date: "01-12-2021 – 01-03-2023",
      details: [
        "Desarrollo Backend para plataforma de email y SMS marketing.",
        "Implementación con Java Spring Boot, MVC y MySQL."
      ]
    },
    {
      role: "Analista de Datos – Next Code",
      date: "01-09-2020 – 01-12-2020",
      details: [
        "Análisis y diseño de bases de datos.",
        "Creación de diccionarios de datos y diagramas ER."
      ]
    }
  ];

  return (
    <section className="experience-section">
      <h2>Experiencia Laboral</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            role={exp.role}
            date={exp.date}
            details={exp.details}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
