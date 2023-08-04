import React from "react";
import { Gender } from "./Gender";
import { Species } from "./Species";
import { Status } from "./Status";
import { Type } from "./Type";

export const Filter = ({ setPage, setGender, setStatus, setType, setSpecies }) => (
    <div className="filter-wrapper">
        <div className="title-block">
            <h2 className="filter-title">Filter</h2>
        </div>
        <div className="filter-list">
            <Type setPage={setPage} setType={setType} />
            <Status setPage={setPage} setStatus={setStatus} />
            <Gender setPage={setPage} setGender={setGender} />
            <Species setPage={setPage} setSpecies={setSpecies} />
        </div>
    </div>
)