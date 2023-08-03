import React from "react";

export const Type = ({ setType, setPage }) => {

    return (<details className="filter filter-type">
        <summary>Type</summary>
        <div className="break"></div>
        <div className="search-bar">
            <input type="search" onChange={(e) => {
                setType(e.target.value);
                setPage(1);
            }} placeholder="Search for a type" />
        </div>
    </details>)
}