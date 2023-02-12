import React from "react";
import projects from "../../data/web3Projects.json";

const Card = () => {
  return (
    <div>
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="col bg-lightestnavy p-5 my-3"
            data-aos="fade-left"
            data-aos-duration={800}
            data-aos-delay={100 * (index + 1)}
            data-aos-easing="ease-in-out"
            data-anchor="#web3"
          >
            <h2 className="text-2xl mb-2">{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="text-green hover:cursor-pointer hover:text-greentint"
            >
              View code
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
