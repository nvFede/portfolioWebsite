import React from "react";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center text-white">
      <h1 className="text-3xl md:text-5xl my-2 font-bold tracking-wide  " id="trigge-show">
        Hi,
        <br /> I'm <span className="text-green">Fede</span><span className="text-cherry">rico</span>,
        <br />
        <br className="block md:hidden" />
        <span className="inline-flex h-20 pt-2 
        overflow-x-hidden animate-type group-hover:animate-type-reverse
         whitespace-nowrap text-brand-accent will-change-transform">
          Web Developer.
        </span>
        <span className="box-border inline-block w-1 h-8 ml-2 -mb-2 bg-white  md:h-12 animate-cursor will-change-transform"></span>
      </h1>

      <h2
        className="text-xl mb-8"
        data-aos="fade-up"
        data-aos-delay="1200"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-anchor="#home"
      >
        Fullstack Web Developer <span className="text-green">&#x2B29; </span>
        Wordpress Expert <span className="text-green">&#x2B29; </span> Web3 & Blockchain Enthusiast
      </h2>

      <a
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-delay="1000"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-anchor="#home"
        href="#contact"
        className=" font-bold border-2  border-green p-3 uppercase text-green my-3 w-48 text-center hover:bg-greentint"
      >
        Contact Me
      </a>

      <button
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-delay="1500"
        data-aos-anchor="#trigger-show"
        data-aos-duration="1000"
        className="arrow_down border-2 rounded-full self-end   border-white p-3 uppercase text-white my-3 w-14 h-14 text-center hover:bg-greentint"
      >
        <span className="material-symbols-outlined">arrow_downward</span>
      </button>
    </section>
  );
};

export default Home;
