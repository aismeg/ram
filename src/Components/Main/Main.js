import React from "react";
import './main.css';

export const Main = () => (
    <main className="main">
        <div className="container">
            <div className="content">
                <article className="card">
                    <img className="character" src="https://rickandmortyapi.com/api/character/avatar/81.jpeg" alt="character" />
                    <div className="info">
                        <h2 className="name">character</h2>
                        <span className="gender-spec">male - unknown</span>
                    </div>
                    <div className="status">
                        <span className="top">status:</span>
                        <span className="bottom">unknown</span>
                    </div>
                </article>
            </div>
        </div>
    </main>
)