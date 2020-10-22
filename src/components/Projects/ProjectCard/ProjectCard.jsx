import React from 'react'
import "./card.css";
import img from "../../../imgs/IMG-20200417-WA0081.jpg"

const projects =[{
    name: "Project-1",
    link: "https://www.github.io/vinc86",
    preview: img
},
{
    name: "Project-2",
    link: "https://www.github.io/vinc86",
    preview: img
},
{
    name: "Project-3",
    link: "https://www.github.io/vinc86",
    preview: img
}]


export default function ProjectCard() {


    return (
        projects.map(item =>{
            const name = item.name.split("");
            console.log(name)
            return(
                <div key={item.name} className="project-card">
                        <div className="project-name" >
                            {name.map(char=>{
                                return(
                                    <span>{char}</span>
                                )
                            })}
                        </div>
                        <div className="rectangle"></div>
                       
                        <div className="img-container">
                            <div className="img-container-cover">
                                <p>Coming soon<p>
                                <p>&</p>
                                </p> Made with LOVE</p>
                                <a className="card-link" href={item.link} rel="noopener noreferrer" target="_blank">Open</a>
                            </div>
                            <img alt="img" src={item.preview}></img>
                        </div>
                </div>
            )
        })
    )
}
