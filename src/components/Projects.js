import React from 'react';
import { Link } from 'react-router-dom';
import projects from './projects.json';

export default function Projects() {
  const projectCard = projects.map((project, index) => (
    <div className="projectCard" key={index + 1}>
      <Link to={project.link}>
        <div className="cardImg">
          <img src={project.img} alt="" className="mainImg" />
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
