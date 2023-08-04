import React from "react";
import { Gender } from "./Gender";
import { Species } from "./Species";
import { Status } from "./Status";
import { Type } from "./Type";

export const FilterMobile = ({ setPage, setGender, setStatus, setType, setSpecies }) => (
    <div className="filter-wrapper">
        <div className="title-block">
            <h2 className="filter-title">Filter</h2>
        </div>
        <div className="filter-list">
            <Type setPage={setPage} setType={setType} />
            <details className="filter filter-species">
                <summary className="span-title">Status</summary>
                <div className="break"></div>
                <Status setPage={setPage} setStatus={setStatus} />
            </details>
            <details className="filter filter-gender">
                <summary className="span-title">Gender</summary>
                <div className="break"></div>
                <Gender setPage={setPage} setGender={setGender} />
            </details>
            <details className="filter filter-species">
                <summary className="span-title">Species</summary>
                <div className="break"></div>
                <Species setPage={setPage} setSpecies={setSpecies} />
            </details>
        </div>
    </div>
)