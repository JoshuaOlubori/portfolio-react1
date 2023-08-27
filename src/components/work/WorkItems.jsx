import React from 'react';
// import {Badge} from 'react-simple-badges';
import './work.css';
import { toolsDictionary } from './Data';

const WorkItems = ({ item }) => {
  const redirectToUnderDevelopmentPage = () => {
    setTimeout(() => {
      window.location.href = 'under_development.html'; // Replace with the actual path to your HTML file
    }, 5000);
  };

      // Assuming you have a list of tools for each item in your 'item' object
  const tools = item.tech || []; // Replace 'tools' with the actual key in your data

  // Function to generate logo URLs for each tool
  const generateToolLogos = () => {
    return tools.map((tool, index) => {
        // Lookup the logo URL for the current tool in the dictionary
        const logoUrl = toolsDictionary[tool];
  
        // Check if a logo URL is found for the tool
        if (logoUrl) {
          return (
            <img
              key={index}
              loading="lazy"
              src={logoUrl}
              alt={tool}
              className="img_ev3q"
            />
          );
        }
  
        // Handle the case when there's no logo URL for the tool
        return null;
      });
    };
  
    return (

        
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <div className="work__filters-link">
            <a href={item.code_link} className="work__button">
                Code <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>

            <a href={item.demo_link} className="work__button-clicky">
                Live Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
           
        {/* Render logos based on tools */}
       
            </div>
            <div className="work__tools">
        {generateToolLogos()}
      </div>
        </div>
    )
}

export default WorkItems



