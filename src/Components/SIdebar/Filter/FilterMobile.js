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
            <div className="filter filter-species">
                <span className="span-title">Status</span>
                <div className="break"></div>
                <Status setPage={setPage} setStatus={setStatus} />
            </div>
            <div className="filter filter-gender">
                <span className="span-title">Gender</span>
                <div className="break"></div>
                <Gender setPage={setPage} setGender={setGender} />
            </div>
            <div className="filter filter-species">
                <span className="span-title">Species</span>
                <div className="break"></div>
                <Species setPage={setPage} setSpecies={setSpecies} />
            </div>
        </div>
    </div>
)