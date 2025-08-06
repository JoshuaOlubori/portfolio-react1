import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import './DarkModeToggle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="toggle-container">
      <input 
        type="checkbox" 
        className="checkbox" 
        id="dark-mode-checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="dark-mode-checkbox" className="checkbox-label">
      <FontAwesomeIcon icon="fa-solid fa-moon"/>
      <FontAwesomeIcon icon="fa-solid fa-sun" style={{color: 'orange'}}/>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle; 