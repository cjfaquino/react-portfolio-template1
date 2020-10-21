import React from 'react';

export default function Project(props) {
  return (
    <div>
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
