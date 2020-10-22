import React from 'react'
import { Link } from 'react-router-dom';
import "./main.css";

export default function Main() {
    return (
        <div className="section">
            <div className="main-heading">
                <div className="name-container">
                    <div className="top"></div>
                    <h3 className="first-name">Vincenzo</h3>
                    <div className="bottom">
                        <h2 className="last-name">Mancuso</h2>
                    </div>
                </div>
                <p className="welcome">
                    Welcome in my Portfolio Website
                </p>
            </div>
            <div className="cta-section">
                <div className="cta-before"></div>
                <a href="#projects">DISCOVER</a>
            </div>
        </div>
    )
}
