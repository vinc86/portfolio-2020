import React from 'react'
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
                <div className="welcome">
                    <h3>Hello!</h3> 
                    <p >
                        I'm a Full-Stack Web Developer living in Berlin.
                    </p>
                    <p >
                    Read more about <strong><a style={{textDecoration:"underline"}} href="#about">ME</a></strong>
                    </p>
                    
                    
                </div>
            </div>
            <div className="cta-section">
                <div className="cta-before"></div>
                <a href="#projects">DISCOVER</a>
            </div>
        </div>
    )
}
