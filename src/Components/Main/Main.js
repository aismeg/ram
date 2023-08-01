import React from "react";
import './main.css';
import { Pagebar } from "../Pagebar/Pagebar";
import { Modal } from "../Modal/Modal";
import { Card } from "../Card/Card"

export const Main = ({ data }) => (
    <main className="main">
        <div className="container content-container">
            <div className="content">
                <Card {...data} />
            </div>
            <Modal {...data} />
        </div>
        <Pagebar {...data} />
    </main>
)