import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./nav.css";

export default function Navigation() {
    const [open, setOpen]= useState(false);
    
    const openMenu =()=>{
        setOpen(!open);
    }
    let className = "menu-list";
    let buttonClass= "menu-button";
    className += open ? " show" : " ";
    buttonClass += open? " rotate" : " ";
    return (
       <nav className="navigation">
           <ul className={className}>
               <div className="social-media-section">
                    <div className="social-icon">
                        <a href="https://github.com/vinc86" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/vincenzo-mancuso-47829072/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.xing.com/profile/Vincenzo_Mancuso8/cv" rel="noopener noreferrer" target="_blank"><i className="fab fa-xing"></i></a>
                    </div>
               </div>
               <div className="link-section">
                    <li>
                        <a onClick={openMenu}  href="#home">Home</a>
                    </li>
                    <li>
                        <a onClick={openMenu} href="#projects">Projects</a>
                    </li>
                    <li>
                        <a onClick={openMenu}  href="#about">About</a>
                    </li>
                    <li>
                        <a onClick={openMenu} href="#contact">Get in touch</a>
                    </li>
               </div>
           </ul>
           <div className="menu-button-section">
                <button onClick={()=>openMenu()} className={buttonClass}><i className="fa-solid fa-ellipsis fa-2x"></i></button>
           </div>
       </nav>
    )
}
