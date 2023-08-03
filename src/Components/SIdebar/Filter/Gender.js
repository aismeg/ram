import React from "react";
import './filter.css';

export const Gender = ({ setGender, setPage }) => {
    let gender = ['Male', 'Female', 'Genderless', 'Unknown'];

    return (<details className="filter filter-gender">
        <summary>Gender</summary>
        <div className="break"></div>
        {gender.map((gender, i) => (
            <div key={i} className="checkbox">
                <div className="flex-table">
                    <input onClick={(e) => {
                        if (e.target.checked === true) {
                            setGender(e.target.id);
                            setPage(1);
                        } else {
                            setGender('');
                        }
                    }} className="input-class" type="checkbox" id={gender} />
                    <span className="checkmark"></span>
                    <label htmlFor={gender}>{gender}</label>
                </div>
            </div>
        ))}
    </details>)
}