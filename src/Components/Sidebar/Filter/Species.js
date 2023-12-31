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

    return (
        <>
            {species.map((species, i) => (
                <div key={i} className="checkbox">
                    <div className="flex-table">
                        <input onClick={(e) => {
                            if (e.target.checked === true) {
                                setSpecies(e.target.id);
                                setPage(1);
                            } else {
                                setSpecies('');
                            }
                        }} className="input-class" type="checkbox" id={species} />
                        <label htmlFor={species}>{species}</label>
                    </div>
                </div>
            ))}
        </>
    )
}