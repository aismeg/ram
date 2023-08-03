import React from "react";
import './modal.css';

export const Modal = ({ openItem, setOpenItem }) => (
    <div
        onClick={(e) => {
            if (e.target.className === 'overlay')
                setOpenItem(null)
        }}
        className="overlay">
        <div className="modal-wrapper">
            <article className="extended">
                <div className="extended-absolute">
                    <img className="character-modal" src={openItem.image} alt="character" />
                    <div className="info">
                        <h2 className="name">{openItem.name}</h2>
                        <span className="gender-species">{openItem.gender} - {openItem.species}</span>
                    </div>
                    <div className="status">
                        <span className="top">Status:</span>
                        <span className="bottom">{openItem.status}</span>
                    </div>
                </div>
                <section className="more-about">
                    <div className="ma-wrapper">
                        <div className="info info-extended">
                            <h2 className="name">Location:</h2>
                            <span className="gender-species gs-extended">{openItem.location.name}</span>
                        </div>
                        <div className="info info-extended">
                            <h2 className="name">Origin:</h2>
                            <span className="gender-species gs-extended">{openItem.origin.name}</span>
                        </div>
                        <div className="info info-extended">
                            <h2 className="name">Species:</h2>
                            <span className="gender-species gs-extended">{openItem.species}</span>
                        </div>
                        {openItem.type !== '' ? <div className="info info-extended">
                            <h2 className="name">Type:</h2>
                            <span className="gender-species gs-extended">{openItem.type}</span>
                        </div>
                            :
                            null
                        }
                    </div>
                </section>
            </article>
        </div>
    </div>
)