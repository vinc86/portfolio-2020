import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'

export default function Projects() {
    return (
        <div  className="section projects">
            <div  className="description">
                <p id="projects" className ="tag margin-top">&lt;section&gt;</p> 
                <p className ="text">A few recent projects i have worked on</p>
                <p className ="tag">&lt;/section&gt;</p>
            </div>
            <ProjectCard />
        </div>
    )
}
