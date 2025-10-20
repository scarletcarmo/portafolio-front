import '../styles/About.css'
import ActionSection from './ActionSection';
import MyStory from './MyStory';

const About = () => {
    return (
        <>
            <section id="about" className="about">
                <div className='container'>
                    <p className="capitalize">Mi nombre es Scarlet Carvaca, Full stack Developer</p>
                    <p>Estoy Apasionada por construir aplicaciones dinámicas y eficientes.
                        Me enfoco en crear soluciones que combinan buen diseño, rendimiento y experiencia de usuario</p>
                    <p>Trabajo principalmente con <strong>React</strong>  y <strong>Express</strong>  a <strong>nivel intermedio</strong>, y tengo un manejo avanzado de <strong>TypeScript</strong>
                        , lo que me permite desarrollar aplicaciones escalables y seguras.
                        También tengo experiencia trabajando con <strong>REST APIs</strong> y bases de datos.</p>
                    <p>Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente. Disfruto colaborar en proyectos que me desafían y me permiten crecer profesionalmente,
                        aportando <strong>código limpio</strong> y <strong>soluciones creativas</strong></p>

                </div>
            </section>
            <div className='story-column'>
                <MyStory />
            </div>
            <ActionSection />
        </>

    );
};

export default About;
