import React from "react";
import ContactMeForm from "./ContactMeForm";

export default function ContactMe() {
    return (
        <section id="contact-me" class="hero is-fullheight is-align-items-center phone-bg snap">
            <div class="hero-body is-justify-content-center full-width">
                <div class="hero-text is-full full-width">
                    <p class="title has-text-white">
                    Contact Me
                    </p>
                    <ContactMeForm/>
                    <div class="columns">
                        <a href="tel:5863390568" class="column is-narrow is-flex is-align-items-center">
                            <figure class="image is-48x48 inline-block mr-2">
                                <img src="/images/phone-icon.png" alt="Phone"/>
                            </figure>
                            <p class="subtitle has-text-white inline-block">(586)339-0568</p>
                        </a>
                        <a href="mailto:klcbusiness@hotmail.com" class="column is-narrow is-flex is-align-items-center">
                            <figure class="image is-48x48 inline-block mr-2">
                                <img class="bottom" src="/images/email-logo.png" alt="E-mail"/>
                            </figure>
                            <p class="subtitle has-text-white inline-block">klcbusiness@hotmail.com</p>
                        </a>
                        <a href="https://github.com/kevinchewning" class="column is-narrow is-flex is-align-items-center">
                            <figure class="image is-48x48 inline-block mr-2">
                                <img src="/images/github-logo.png" alt="Github"/>
                            </figure>
                            <p class="subtitle has-text-white inline-block">Github</p>
                        </a>
                        <a href="https://www.linkedin.com/in/kevin-chewning-63973715/" class="column is-narrow is-flex is-align-items-center">
                            <figure class="image is-48x48 inline-block mr-2">
                                <img src="/images/linked-in-logo.png" alt="Linked In"/>
                            </figure>
                            <p class="subtitle has-text-white inline-block">Linked In</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};