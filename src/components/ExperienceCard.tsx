
interface CardProps {
    role: string;
    date: string;
    details: string[];
}

const ExperienceCard: React.FC<CardProps> = ({ role, date, details }) => {
    return (
        <div className='experience-card'>
            <div className='card-header'>
                <h3>{role}</h3>
                <span className='exp-date'>{date}</span>
            </div>
            <ul>
                {details.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceCard;
