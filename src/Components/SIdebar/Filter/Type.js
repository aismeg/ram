import React from "react";

export const Type = ({ setType, setPage }) => {

    return (<div className="filter filter-type">
        <div className="search-bar type-bar">
            <input type="search" onChange={(e) => {
                setType(e.target.value);
                setPage(1);
            }} placeholder="Search for a type" />
        </div>
    </div>)
}