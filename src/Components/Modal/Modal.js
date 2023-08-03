import React from "react";
import './modal.css';

export const Modal = ({ openItem }) => {
    return (
        <div className="overlay">
            <div className="modal-wrapper">
                <article className="extended">
                    <img className="character" src={openItem.image} alt="character" />
                    <div className="info">
                        <h2 className="name">{openItem.name}</h2>
                        <span className="gender-species">{openItem.gender} - {openItem.species}</span>
                    </div>
                    <div className="status">
                        <span className="top">Status:</span>
                        <span className="bottom">{openItem.status}</span>
                    </div>
                </article>
                <section className="more-about">

                </section>
            </div>
        </div>
    )
}