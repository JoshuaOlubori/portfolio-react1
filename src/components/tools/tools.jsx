import React from 'react';

import { toolsDictionary } from './tools_dict';

const ToolCard = ({ imageUrl }) => (
<div >
      <img src={imageUrl} alt="Tool Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
  
  const ToolGrid = () => (
    // <div className="skills__container container grid">
    <section className="skills section" id="skills">
    <h2 className="section__title">Tools</h2>
    <span className="section__subtitle">I have used at least one of these in a project</span>
    <div className="skills__content container grid">

      <div className="skills__box" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {Object.values(toolsDictionary).map((imageUrl, index) => (
        <ToolCard key={index} imageUrl={imageUrl} />
      ))}
      </div>
      </div>
</section>
  );
export default ToolGrid