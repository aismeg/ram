import React from "react";
import './main.css';
import { Content } from "../Content/Content";

export const Main = () => (
    <main className="main">
        <div className="container">
            <div className="content">
                <Content />
                <Content />
                <Content />
                <Content />
            </div>
        </div>
    </main>
)