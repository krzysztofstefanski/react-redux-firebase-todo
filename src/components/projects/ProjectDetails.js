import React from "react";

const ProjectDetails = (props) => {
 const id = props.match.params.id
  
  return (
    <div className="container section project-details">
      <div className="card z-depth-1 ">
        <div className="card-content black-text">
  <span className="card-title">Project title-{id}</span>
          <p>lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
      </div>
      <div className="card-action darken-3 black-text">
        <div>Posted by sisteme</div>
        <div>26 december 2019</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
