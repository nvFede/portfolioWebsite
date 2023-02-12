import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithubAlt,
  FaCodepen,
} from "react-icons/fa";

const Right = () => {
  return (
    <div

      className="hidden fixed  bottom-0 right-10 md:flex flex-col bg-lightnavy px-2 py-5 rounded-t-xl shadow-md "
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <a
        target="_blank"
        href="https://twitter.com/nvfede2"
        className="text-2xl text-white hover:text-green mb-5 "
      >
        <FaTwitter />
      </a>
      <a
        target="_blank"
        href="https://github.com/nvFede"
        className="text-2xl text-white hover:text-green mb-5"
      >
        <FaGithubAlt />
      </a>
      <a
        target="_blank"
        href="https://codepen.io/nvfede"
        className="text-2xl text-white hover:text-green mb-5"
      >
        <FaCodepen />
      </a>
      <a
        target="_blank"
        href="www.linkedin.com/in/gaston-noya"
        className="text-2xl text-white hover:text-green mb-5"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default Right;
