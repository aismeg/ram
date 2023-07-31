import React from "react";
import './loading.css';
import sorry from '../../img/sorry.svg';

export const Loading = () => (
    <div className="loading main container" >
        <span className="loading-text">Loading...</span>
        <img className="sorry" src={sorry} alt="outage" />
    </div>
)