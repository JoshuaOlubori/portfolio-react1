import React from 'react';
import './about.css';
import AboutImg from '../../assets/profile_images/profile_a.jpeg';
import CV from '../../assets/resume.pdf';

import Info from './Info';

const About = () => {
    const description = 'You can trust me to help you make data-driven decisions.'
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">{description}</p>
                   
                </div>
            </div>
        </section>
    )
}

export default About