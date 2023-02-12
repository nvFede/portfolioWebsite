import React, { useEffect } from "react";
import ProjectDesc from "./ProjectDesc";
import ProjectImg from "./ProjectImg";

const ProjectCard = ({ projects, showNumber }) => {
  useEffect(() => {
    projects = projects.slice(0, showNumber + 1);
  }, []);

  return (
    <div className="flex flex-col">
      {projects.map((project, index) => {
        return (
          <div key={index} className="project-card flex  md:my-5 ">
            {index % 2 === 0 ? (
              <div className="flex flex-col md:flex-row">
                <ProjectImg project={project} />
                <ProjectDesc project={project} index={index} />
              </div>
            ) : (
              <div className="flex flex-col-reverse md:flex-row">
                <ProjectDesc project={project} index={index} />
                <ProjectImg project={project} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
