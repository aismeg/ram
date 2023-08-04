import React from "react";
import './modal.css';

export const Modal = ({ openItem, setOpenItem }) => (
    <div
        onClick={(e) => {
            if (e.target.className === 'overlay')
                setOpenItem(null)
        }}
        className="overlay">
        <article className="extended">
            <div className="extended-absolute">
                <img className="character-modal" src={openItem.image} alt="character" />
                <div className="info info-modal">
                    <h2 className="name name-modal">{openItem.name}</h2>
                    <span className="gender-species">{openItem.gender} - {openItem.species}</span>
                </div>
                <div className="status status-modal">
                    <span className="top">Status:</span>
                    <span className="bottom">{openItem.status}</span>
                </div>
            </div>
            <section className="more-about">
                <div className="ma-wrapper">
                    <div className="info info-extended">
                        <h2 className="name name-modal">Location:</h2>
                        <span className="gender-species gs-extended">{openItem.location.name}</span>
                    </div>
                    <div className="info info-extended">
                        <h2 className="name name-modal">Origin:</h2>
                        <span className="gender-species gs-extended">{openItem.origin.name}</span>
                    </div>
                    <div className="info info-extended">
                        <h2 className="name name-modal">Species:</h2>
                        <span className="gender-species gs-extended">{openItem.species}</span>
                    </div>
                    {openItem.type !== '' ? <div className="info info-extended">
                        <h2 className="name name-modal">Type:</h2>
                        <span className="gender-species gs-extended">{openItem.type}</span>
                    </div>
                        :
                        null
                    }
                </div>
            </section>
        </article>
    </div>
)