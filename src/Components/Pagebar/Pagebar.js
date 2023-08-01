import React from "react";
import './pagebar.css';
import arrowLeft from '../../img/arrow-left.svg';

export const Pagebar = ({ pages, goToPage, currentPageUrl, nextPage, prevPage, prevPageUrl, nextPageUrl }) => {
    let pageButtons = [];

    const match = currentPageUrl.match(/page=(\d+)/);

    let currentPage = match[1];

    for (let i = 1; i <= pages; i++) {
        if (i <= 0 ||
            i === pages || Math.abs(currentPage - i) <= 1)
            pageButtons.push(<button className="page-bar-buttons" key={i} onClick={() => goToPage(i)}>{i}</button>);
    }

    return (
        <div className="bar-wrapper">
            <div className="page-bar">
                {pageButtons.length > 1 && <img onClick={() => goToPage(1)} className="arrow arrow-left" src={arrowLeft} alt="arrow" />}
                {pageButtons}
            </div>
        </div>
    )
}