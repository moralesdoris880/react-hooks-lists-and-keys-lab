import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {addSpan(technologies)}
      </div>
    </div>
  );
}

const addSpan=(technologies)=>{ return (technologies.map(technology => {return <span>{technology}</span>}))
}

export default ProjectItem;
