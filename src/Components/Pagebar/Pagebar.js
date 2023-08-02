import React from "react";
import './pagebar.css';
import arrowLeft from '../../img/arrow-left.svg';


export const Pagebar = ({ pages, page, setPage }) => {
    let pageButtons = [];

    for (let i = 1; i <= pages; i++) {
        if (i <= 4 ||
            i === pages || Math.abs(page - i) <= 1)
            pageButtons.push(<button className="page-bar-buttons" key={i} onClick={() => setPage(i)}>{i}</button>);
    }

    return (
        <div className="bar-wrapper">
            <div className="page-bar">
                {pageButtons.length > 1 && <img onClick={() => setPage(1)} className="arrow arrow-left" src={arrowLeft} alt="arrow" />}
                {pageButtons}
            </div>
        </div>
    )
}