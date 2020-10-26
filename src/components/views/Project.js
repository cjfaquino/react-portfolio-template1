import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from './../projects.json';

export default function Project(props) {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${props.name} | Your Name`;
  });
  const i = props.id;
  const j = projects.length - 1;
  const lastPage = i - 1;
  const nextPage = i + 1;
  const lastProject = projects[lastPage];
  const nextProject = projects[nextPage];
  return (
    <div className="project fade-in">
      <h1 className="projectTitle">{props.name}</h1>
      <div className="projectLinks">
        <a href={props.repo}>source</a>
        <a href={props.link}>live</a>
      </div>
      <div className="grid">
        <div className="projectDesc">{props.desc}</div>
      </div>
      <div className="projectImg">
        <img src={props.img} alt="" className="mainImg-project" />
      </div>
      {i > 0 && (
        <div className="lastPage">
          <p>Previous project</p>
          <Link to={lastProject.routeProps.path}>{lastProject.name}</Link>
        </div>
      )}
      {i < j && (
        <div className="nextPage">
          <p>Next project</p>
          <Link to={nextProject.routeProps.path}>{nextProject.name}</Link>
        </div>
      )}
    </div>
  );
}
