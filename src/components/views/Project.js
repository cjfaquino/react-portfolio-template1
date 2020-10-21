import React, { useEffect } from 'react';

export default function Project(props) {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${props.name} | Your Name`;
  });

  return (
    <div className="project fade-in">
      <h1 className="projectTitle">{props.name}</h1>
      <div className="grid">
        <div className="projectDesc">{props.desc}</div>
      </div>
      <div className="projectImg">
        <img src={props.img} alt="" className="mainImg-project" />
      </div>
    </div>
  );
}
