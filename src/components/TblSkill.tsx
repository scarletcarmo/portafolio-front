import "../styles/TblSkill.css";

const TblSkill = () => {
    return (
        <div className="tbl-skill-container">
            <table className="tbl-skill">
                <caption>Herramientas</caption>
                <thead>
                    <tr>
                        <th>Herramienta</th>
                        <th>Nivel</th>
                        <th>Años de experiencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>React</td>
                        <td>Intermedio</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Express</td>
                        <td>Intermedio</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>TypeScript</td>
                        <td>Avanzado</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Spring Boot</td>
                        <td>Básico</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Git</td>
                        <td>Intermedio</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TblSkill
