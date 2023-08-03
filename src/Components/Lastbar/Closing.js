import React from "react";
import './lastbar.css';
import cross from '../../img/cross.svg';

export const Closing = ({ setOpenItem }) => (
    <aside className="buttons">
        <nav className="nav-buttons container">
            <img onClick={() => setOpenItem(null)} className="cross" src={cross} alt="arrow" />
        </nav>
    </aside>
)