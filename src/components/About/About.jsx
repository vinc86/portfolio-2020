import React from 'react'
import profile from "../../imgs/profile.jpeg";

export default function About() {
    return (
        <div id="about" className="section margin-top">
            <div className="about-container">
                <div className="about-header">
                    <div className="img-container">
                        <img src={profile} alt="profile-img"/>
                    </div>
                    <h2>About</h2>
                </div>
                <div className="text-section">
                    <p>
                    I am a web developer student, current based in Berlin. I love to create beautiful designs and experiences. I like to learn and play around with different technologies in order to create amazing products.
                    </p>
                </div>
            </div>
        </div>
    )
}
