import React from "react";

const ProjectImg = ({ project }) => {
  return (
    <div className="project-card-image  basis-1/2 border-2 border-green shadow-sm"
    data-aos="flip-left"
    data-aos-duration={600}
    data-aos-easing="ease-out-cubic"
    data-anchor="#projects"
    >
      <img
        className="object-cover h-full w-full"
        src={require(`../../images/projects/${project.imageUrl}`)}
        alt={project.altImg}
        
      />
    </div>
  );
};

export default ProjectImg;
