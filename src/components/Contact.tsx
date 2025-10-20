import "../styles/Contact.css";
const Contact = () => {
    return (
        <>
            <section className="contact-me">
                <h2>Contáctame</h2>
                <form action="">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Hola,..."
                        required
                    />
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </>
    )
}

export default Contact
