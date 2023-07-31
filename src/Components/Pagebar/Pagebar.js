import React from "react";
import './pagebar.css';

export const Pagebar = ({ pages, goToPage }) => {
    let pageButtons = [];
    for (let i = 1; i <= pages; i++) {
        pageButtons.push(<button className="page-bar-buttons" key={i} onClick={() => goToPage(i)}>{i}</button>);
    }

    return (
        <div className="page-bar">
            {pageButtons}
        </div>
    )
}