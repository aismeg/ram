import React from "react";
import './modal.css';

export const Modal = ({ characters }) => {

    return (
        <div className="overlay">
            {/* <article className="extended">
                <img className="character" src={char.image} alt="character" />
                <div className="info">
                    <h2 className="name">{char.name}</h2>
                    <span className="gender-species">{char.gender} - {char.species}</span>
                </div>
                <div className="status">
                    <span className="top">Status:</span>
                    <span className="bottom">{char.status}</span>
                </div>
            </article> */}
        </div>
    )
}