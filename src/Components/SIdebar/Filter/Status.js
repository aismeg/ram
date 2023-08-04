import React from "react";
import './filter.css';

export const Status = ({ setStatus, setPage }) => {
    let status = ["Alive", "Dead", "Unknown"];

    return (
        <>
            {status.map((status, i) => (
                <div key={i} className="checkbox">
                    <div className="flex-table">
                        <input onClick={(e) => {
                            if (e.target.checked === true) {
                                setStatus(e.target.id);
                                setPage(1);
                            }
                        }} className="input-class" type="checkbox" id={status} />
                        <label htmlFor={status}>{status}</label>
                    </div>
                </div>
            ))}
        </>
    )
}