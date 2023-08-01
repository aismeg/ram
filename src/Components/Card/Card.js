import React from "react";
import './card.css';

export const Card = ({ characters }) => (
    <>
        {characters.map((char, i) => (
            <article key={i} className="card">
                <img className="character" src={char.image} alt="character" />
                <div className="info">
                    <h2 className="name">{char.name}</h2>
                    <span className="gender-species">{char.gender} - {char.species}</span>
                </div>
                <div className="status">
                    <span className="top">Status:</span>
                    <span className="bottom">{char.status}</span>
                </div>
            </article>
        ))}
    </>
)