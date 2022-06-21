import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from './projects.json';

export default function Projects() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Home | Christian Aquino`;
  });

  const projectCard = projects.map((project, index) => (
    <div className="cardProject fade-in" key={index + 1}>
      <Link to={project.routeProps.path}>
        <div className="cardImg">
          <img src={project.thumb} alt="" className="mainImg" />
        </div>
        <div className="cardInfo">
          <div className="cardTitle">{project.name}</div>
          <div className="cardDesc">{project.shortDesc}</div>
        </div>
      </Link>
    </div>
  ));
  return <div className="projects cardGrid gridWrapper">{projectCard}</div>;
}
