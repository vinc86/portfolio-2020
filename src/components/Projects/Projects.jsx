import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'

export default function Projects() {
    return (
        <div  className="section projects">
            {/* <div id="projects" ></div> */}
            <p id="projects" className ="text margin-top">A few recent projects i have worked on</p> 
            <ProjectCard />
        </div>
    )
}
