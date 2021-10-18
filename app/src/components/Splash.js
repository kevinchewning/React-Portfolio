import React from 'react';

function Splash({ backgroundClass, title, subtitle, link }) {
    return (
        <section className={`hero is-fullheight is-align-items-center snap ${backgroundClass}`}>
            <div className="hero-body is-justify-content-center">
                <div className="hero-text is-full">
                    <p className="title has-text-white has-text-centered">
                    {title}
                    </p>
                    {subtitle && (
                        <p className="subtitle has-text-white has-text-centered">
                        {subtitle}
                        </p>
                    )}
                </div>
            </div>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            {link && (<a href={`#${link}`} id="down-arrow"></a>)}
        </section>
    );
};

export default Splash;