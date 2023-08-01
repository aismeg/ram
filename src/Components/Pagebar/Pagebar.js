import React from "react";
import './pagebar.css';

export const Pagebar = ({ pages, goToPage, currentPageUrl }) => {
    let pageButtons = [];

    const match = currentPageUrl.match(/page=(\d+)/);

    const currentPage = match[1];

    for (let i = 1; i <= pages; i++) {
        if (i <= 4 || i === 1 ||
            i === pages || Math.abs(currentPage - i) <= 1)
            pageButtons.push(<button className="page-bar-buttons" key={i} onClick={() => goToPage(i)}>{i}</button>);
    }

    return (
        <div className="bar-wrapper">
            <div className="page-bar">
                {pageButtons}
            </div>
        </div>
    )
}