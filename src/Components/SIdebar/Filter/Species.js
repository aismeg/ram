import React from "react";
import './filter.css';

export const Species = ({ setSpecies, setPage }) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
    ];

    return (<details className="filter filter-species">
        <summary>Species</summary>
        <div className="break"></div>
        <div>
            {species.map((species, i) => (
                <div key={i} className="checkbox">
                    <input onClick={(e) => {
                        if (e.target.checked === true) {
                            setSpecies(e.target.id);
                            setPage(1);
                        } else {
                            setSpecies('');
                        }
                    }} className="input-class" type="checkbox" id={species} />
                    <span className="checkmark"></span>
                    <label htmlFor={species}>{species}</label>
                </div>
            ))}
        </div>
    </details>)
}