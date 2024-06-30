import React from "react";
import uniqid from "uniqid";
import {projects} from '../../../Projects.js'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="Project-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project)=>{
            return(
                <div key={uniqid} data-aos="flip-up" className="project-card">
                    <figure className="p-img">
                        <img src={project.img} alt={project.name} />
                    </figure>
                    <div className="p-title">
                        <h3 className="p-name">{project.name}</h3>
                    </div>
                    <div className="p-description">
                        <p className="p-desc">{project.description}</p>
                    </div>
                    <div className="btns p-btns">
                        <a className="btn" href={project.sourceCode}>Source Code</a>
                        <a className="btn" href={project.livePreview}>LivePreview</a>
                    </div>
                </div>
            )
        })}
      </div>
    </section>
  );
}
