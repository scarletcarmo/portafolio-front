import "../styles/Contact.css";

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-me">
                <h2>Contáctame</h2>
                <form>
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
            </div>
        </section>
    );
};

export default Contact;
