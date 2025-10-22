import { useState } from "react";
import "../styles/Filter.css";

interface FilterProps {
    onFilterChange: (filter: string) => void;
}
const Filter = ({ onFilterChange }: FilterProps) => {

    const filters = ["ALL", "IOS", "ANDROID", "WEB"];
    const [activeFilter, setActiveFilter] = useState("ALL");

    const handleClick = (filter: string) => {
        console.log("activo-now", filter);
        
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    return (
        <div className="filters">
            {filters.map((item) => (
                <button
                    key={item}
                    className={activeFilter === item ? "active" : ""}
                    onClick={() => handleClick(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    )
}

export default Filter
