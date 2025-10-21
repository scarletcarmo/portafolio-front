import "../styles/Skills.css";

const Skills = () => {
    const skills = [
        {
            category: "Habilidades técnicas (Hard Skills)",
            items: [
                "HTML",
                "CSS",
                "TypeScript",
                "React",
                "Express",
                "PHP",
                "SQL (MySQL, PostgreSQL)",
                "Git",
                "Consumo de APIs REST",
                "Principios de seguridad",
                "Encriptación",
                "Manejo seguro de datos y tokens"
            ]
        },
        {
            category: "Habilidades personales (Soft Skills)",
            items: [
                "Resolución de problemas y lógica",
                "Comunicación",
                "Trabajo en equipo",
                "Gestión del tiempo",
                "Aprendizaje continuo"
            ]
        }
    ];

    return (
        <section className="skills-section">
            {skills.map((group, index) => (
                <div key={index} className="skills-group">
                    <h3 className="skills-title">{group.category}</h3>
                    <div className="skills-container">
                        {group.items.map((item, idx) => (
                            <div key={idx} className="skill-card">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
