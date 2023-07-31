import React from "react";
import './lastbar.css';
import arrow from '../../img/arrow.svg';

export const Lastbar = () => (
    <aside className="buttons">
        <nav className="nav-buttons container">
            <div className="arrows">
                <img className="arrow arrow-right" src={arrow} alt="arrow" />
                <img className="arrow arrow-left" src={arrow} alt="arrow" />
            </div>
        </nav>
    </aside>
)