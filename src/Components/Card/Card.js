import React from "react";
import './card.css';
import { Loading } from "../Loading/Loading";


export const Card = ({ characters, setOpenItem }) => (
    <div className="content">
        {characters ?
            <>
                {characters.map(char => (
                    <article
                        key={char.id}
                        className="card"
                        onClick={() => setOpenItem(char)}
                    >
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
            </> :
            <div className="nope">
                <span className="nope-text">There is no character like this one</span>
            </div>
        }
    </div>
)
