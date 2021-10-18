import React from 'react';

function Projects({ projects }) {
    return (
        <>
        {projects.map((project, index) => (
            <div id={`${project.divID}`} className="column is-half-tablet is-one-third-desktop smt snap" key={index}>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-5by3">
                            <img src={`${project.imageSource}`} alt={`${project.imageAlt}`}/>
                        </figure>
                    </div>
                    <div className="card-header">
                        <div className="card-header-title is-centered">
                            <h2 className="title">{project.title}</h2>
                        </div>
                    </div>
                    <div className="card-content">
                        {project.description}
                        <br/>
                        <br/>
                        View repo on <a href={`${project.repositoryURL}`} target="_blank" rel="noreferrer">Github</a>. {project.deploymentURL && (<a href={`${project.deploymentURL}`} target="_blank" rel="noreferrer">Deployment.</a>)}
                    </div>
                </div>
            </div>
        ))}
        </>
    );
};

export default Projects;