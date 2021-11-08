import React from 'react';

function AboutMe() {
    return (
        <div id="about-me" className="box m-4 smt snap">
            <section className="columns">
                <div className="column is-12">
                    <div className=" media is-flex-wrap-wrap">
                        <div className="container is-flex  image-box">
                            <figure id="about-me-image" className="image is-128x128">
                                <img src="/images/Self-Portrait.jpg" alt="Kevin Chewning Portrait"/>
                            </figure>
                        </div>
                        <h2 id="about-me-title" className="meda-content container title mt-4">Hello!<br/><span className="is-size-4-mobile">My name is Kevin.</span></h2>
                        <p className="container mt-4">I am a Full-Stack Web Developer located in Detroit, Michigan. I have a passion for creating intuitive, responsive, and dynamic user experiences.
                        <br/>
                        <br/>
                        A multi-unit manager in the hospitality industry turned developer, I am a well-organised problem solver with high attention to detail. In my spare time, a guitar enthusiast, an avid gamer, animal lover, and a fan of the outdoors. Also a new father with a happy and wonderful 1 year old boy at home.
                        <br/>
                        <br/>
                        I find the developer industry fascinating and engaging. I am always interested in learning new languages and libraries, as well as working on ambitious projects with positive people.
                        <br/>
                        <br/>
                        <a href="#contact-me">Let's create something unique.</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;