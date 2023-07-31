import React from "react";
import './lastbar.css';
import arrowLeft from '../../img/arrow-left.svg';
import arrowRight from '../../img/arrow-right.svg';

export const Lastbar = ({ nextPage, prevPage, prevPageUrl, nextPageUrl }) => (
    <aside className="buttons">
        <nav className="nav-buttons container">
            <div className="arrows">
                <img onClick={prevPageUrl ? prevPage : null} className="arrow arrow-left" src={arrowLeft} alt="arrow" />
                <img onClick={nextPageUrl ? nextPage : null} className="arrow arrow-right" src={arrowRight} alt="arrow" />
            </div>
        </nav>
    </aside>
)