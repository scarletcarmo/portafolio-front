import "../styles/MyStory.css";
import TblSkill from "./TblSkill";

const MyStory = () => {
    return (
        <section className="my-story">
            <div className="about-container">
                <div className='about-column'>
                    <h2>Cómo comenzó mi historia</h2>
                    <p>
                        Mi nombre es <strong>Scarlet Carvaca</strong>, soy desarrolladora <strong>Fullstack</strong> apasionada por la
                        tecnología y la creación de aplicaciones eficientes y escalables.vida en el navegador.
                    </p>
                    <p>
                        Desde mis primeros proyectos, me he enfocado en desarrollo web y aplicaciones, especializándome en 
                        <strong>TypeScript</strong>, <strong>React</strong>, <strong>Express</strong> y <strong>Java Spring Boot</strong>, 
                        así como en bases de datos <strong>MySQL</strong>. Con experiencia intermedia en <strong>microservicios</strong> y <strong>WebSockets</strong>, 
                        y conocimientos básicos en <strong>Docker</strong>, he trabajado tanto en <strong>frontend</strong> como <strong>backend</strong>, aportando soluciones seguras y optimizadas.
                    </p>
                </div>
                <div className='story-column'><TblSkill /></div>
            </div>
        </section>
    )
}

export default MyStory
