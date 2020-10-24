import React from 'react'
import "./main.css";

export default function Main() {
    return (
        <div className="section">
            <div className="main-heading">
                <div className="name-container">
                    <div className="top"></div>
                   {/*  <h3 className="first-name">Vincenzo</h3> */}
                    <div className="bottom">
                       {/*  <h2 className="last-name">Mancuso</h2> */}
                    </div>
                </div>
                <div className="welcome">
                    <p className ="tag">&lt;html&gt;</p> 
                    <p style={{marginLeft:"20px"}} className ="tag">&lt;title&gt;</p> 
                    <h2 className="intro">Hi!</h2> 
                    <h1 className="intro">I'm Vincenzo</h1>
                    <p style={{marginLeft:"20px"}} className ="tag">&lt;/title&gt;</p>
                    <p style={{marginLeft:"20px"}} className ="tag">&lt;head&gt;</p>
                    <h3 className="down-title">MERN-Stack | UX/UI Design</h3>
                    <p style={{marginLeft:"20px"}} className ="tag">&lt;/head&gt;</p>
                    <p className ="tag">&lt;/html&gt;</p>
                    {/* <p className ="more" >
                    More about <strong><a style={{textDecoration:"underline"}} href="#about">ME</a></strong>
                    </p> */}
                    
                    
                </div>
            </div>
            <div className="cta-section">
                <div className="cta-before"></div>
                <a href="#projects">DISCOVER</a>
            </div>
        </div>
    )
}
