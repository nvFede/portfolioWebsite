import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../data/sideProjects.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-row justify-center  text-white mt-10 "
    >
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className="hidden lg:block  background-text text-lightnavy text-center min-h-screen"
      >
        <p className="uppercase"> 04. Projects</p>
      </div>

      <div className="basis-4/5 flex flex-col justify-center">
       

        <div className="flex py-10">
          <ProjectCard projects={projects} showNumber={3} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
