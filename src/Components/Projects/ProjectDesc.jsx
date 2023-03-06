import React from "react";

const ProjectDesc = ({ project, index }) => {
  return (
    <div
      className={`description basis-1/2  my-5 bg-lightestnavy shadow-md  flex flex-col p-5 justify-between ${
        index % 2 === 0 ? "md:-ml-6 z-10 text-left" : "md:-mr-6 z-10 text-right"
      }`}

      data-aos="fade-left"
      data-aos-duration={600}
      data-aos-easing="ease-out-cubic"
      data-anchor="#projects"

    >
      <h4 className="text-green text-sm font-light">{project.tech}</h4>
      <h2 className="text-3xl">{project.title}</h2>
      <p className="text-gray-100 font-light text-sm mt-2">
        {project.description}
        
      </p>
      <a
        href={project.link}
        rel="noreferrer"
        target="_blank"
        className={`font-light border-spacing-1 border  mt-auto
           border-green uppercase text-green p-2  w-24 text-xs text-center hover:bg-greentint
           ${index % 2 === 0 ? "self-end" : "self-start"}`}
      >
        Go to
      </a>
    </div>
  );
};

export default ProjectDesc;
