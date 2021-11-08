import React from "react";
import { useState } from "react";

export default function Skills () {
    const languages = ["JavaScript ES6+", "CSS3", "HTML5", "SQL", "NoSQL"];
    const applications =["GitHub", "MongoDB", "MySQL", "Insomniac", "Amazon Web Services"];
    const tools = ["Node", "Express", "React", "Redux", "jQuery", "Bootstrap", "Bulma", "JWT", "GraphQL", "Apollo Server/Client", "REST APIs"];

    const [ languagesActive, setLanguagesActive ] = useState(true);
    const [ toolsActive, setToolsActive ] = useState(false);
    const [ applicationsActive, setApplicationsActive ] = useState(false);

    const languagesSelect = (event) => {
        if(!languagesActive) {
            setLanguagesActive(true);
            setApplicationsActive(false);
            setToolsActive(false);
        }
    }

    const applicationsSelect = (event) => {
        if(!applicationsActive) {
            setApplicationsActive(true);
            setLanguagesActive(false);
            setToolsActive(false);
        }
    }

    const toolsSelect = (event) => {
        if(!toolsActive) {
            setToolsActive(true);
            setApplicationsActive(false);
            setLanguagesActive(false);
        } 
    }

    return (
        <div className="box is-fluid m-4 smt" id="skills">
            <h2 className="title">Skills</h2>
            <div className="tabs is-boxed">
                <ul>
                    <li className={languagesActive ? "is-active" : ""} onClick={languagesSelect}>
                        {/* <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span> */}
                        <a><span>Languages</span></a>
                    </li>
                    <li className={applicationsActive ? "is-active" : ""} onClick={applicationsSelect}>
                        {/* <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span> */}
                        <a><span>Applications</span></a>
                    </li>
                    <li className={toolsActive ? "is-active" : ""} onClick={toolsSelect}>
                        {/* <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span> */}
                        <a><span>Tools</span></a>
                    </li>
                </ul>
            </div>
            <div className="container is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
            {languagesActive && 
                languages.map((el, index) => (
                    <div className="tag is-info m-1" key={index}>{el}</div>
                ))
            }
            {applicationsActive && 
                applications.map((el, index) => (
                    <div className="tag is-info m-1" key={index}>{el}</div>
                ))
            }
            {toolsActive && 
                tools.map((el, index) => (
                    <div className="tag is-info m-1" key={index}>{el}</div>
                ))
            }
            </div>
        </div>
    );
}