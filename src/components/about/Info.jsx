import React from 'react';
import './about.css'
import Da_Badge from '../../assets/blog_images/DA - Badge with outline.png';
import SQL_Badge from '../../assets/blog_images/SQL Associate - badge with outline.png';
import Google_Badge from '../../assets/blog_images/Google Data Analytics Specialization.png';


const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                {/* <i className="bx bx-award bx-tada about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">3 years</span> */}
                 <a href='https://www.datacamp.com/certificate/SQA0017128051368'><img src={SQL_Badge} alt="DataCamp SQL Associate Certification Badge" /></a>
            </div>

             <div className="about__box">
                {/* <i className="bx bx-briefcase-alt-2 bx-tada about__icon" ></i>
                <h3 className="about__title">Reliable</h3>
                <span className="about__subtitle">Real-world experience</span> */}
                <a href='https://coursera.org/share/8a35ef7a5a2b72c40624bf6394bdec31'><img src={Google_Badge} alt="Google Data Analyst Certification Badge" /></a>
            </div>

            <div className="about__box">
                {/* <i className="bx bxs-rocket bx-tada bx-rotate-180 about__icon"></i>
                <h3 className="about__title">Skilled</h3>
                <span className="about__subtitle">Continuous learning</span> */}
            <a href='https://www.datacamp.com/certificate/DA0020869522693'><img src={Da_Badge} alt="DataCamp Data Analyst Certification Badge" /></a>
            </div> 
        </div>
    )
}

export default Info