import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title">Welcome to the about project by Nikanor Burlaku!</h1>
            <p className="about__description">
                This project is designed to showcase a collection of posts from various authors. With about, you can explore a diverse range of topics, from technology and science to arts and culture.
            </p>
            <p className="about__updates">Stay tuned for regular updates and new posts!</p>
            <a className="about__link" href="https://github.com/NikanorBurlaku">Check out the source code on GitHub</a>
        </div>
    );
}

export default About;
