import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';


function Nav({projects}) {
    const [ dropdownDisplay, setDropdownDisplay ] = useState(false);

    function handleDropdown(event) {
        event.stopPropagation();

        setDropdownDisplay(!dropdownDisplay);
    }

    return (
        <header id="header" className="mb-4">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#about-me">
                        <img id="logo" src="/images/KCDD.png" alt="KC logo"/>
                    </a>

                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
                    <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu" id="navMenu">
                    <div className="navbar-start">
                    </div>

                    <div className="navbar-end">
                        <a className="navbar-item" href="#about-me">About Me</a>
                        <a className="navbar-item" href="#skills">Skills</a>
                        <div className="navbar-item has-dropdown is-hoverable" onClick={handleDropdown}>
                            <a className="navbar-link" href="#projects">
                                Projects
                            </a>

                            {dropdownDisplay && (
                                <div id="navbar-dropdown" className="navbar-dropdown">
                                    {projects.map((project, index) => (
                                        <a href={`#${project.divID}`} className="navbar-item" key={index}>{project.title}</a>
                                    ))}
                                </div>
                            )}
                            
                        </div>
                        <Link to="assets/Kevin_Chewning_Resume.pdf" target="_blank" className="navbar-item" download>Resume</Link>
                        {/* <a href="assets/Kevin_Chewning_Resume.pdf" download="Kevin Chewning Resume" className="navbar-item">Resume</a> */}
                        <a href="#contact-me" className="navbar-item">Contact Me</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;