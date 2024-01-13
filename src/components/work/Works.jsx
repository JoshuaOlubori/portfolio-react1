import React, { useState, useEffect } from 'react';
import { projectsData } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Set initial projects to all projects
        setProjects(projectsData);
    }, []);

    return (
        <div>
            {/* Removed the section for rendering tabs/categories */}
            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
        </div>
    );
}

export default Works;
