import "../styles/MyStory.css";
import TblSkill from "./TblSkill";

const MyStory = () => {
    return (
        <section className="my-story">
            <div className="about-container">
                <div className='about-column'>
                    <h2>Cómo comenzó mi historia</h2>
                    <p>
                        Comencé mi carrera en 2021, iniciándome con conceptos básicos de <strong>desarrollo backend</strong>  y <strong>bases de datos</strong>.
                        Poco a poco fui introduciéndome en el desarrollo frontend, aprendiendo tecnologías como <strong>React</strong> y <strong>TypeScript</strong>.
                    </p>
                    <p>
                        Durante este tiempo, he trabajado en proyectos que me han permitido mejorar la experiencia de usuario,
                        optimizar aplicaciones web y fortalecer mis habilidades en programación  <strong>fullstack</strong>, combinando lógica del servidor
                        con interfaces atractivas y funcionales
                    </p>
                </div>
                <div className='story-column'><TblSkill /></div>
            </div>
        </section>
    )
}

export default MyStory
