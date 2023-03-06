import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className=" flex flex-col md:flex-row min-h-screen justify-center align-middle relative"
    >
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className="hidden lg:block  background-text text-lightnavy text-center min-h-screen"
      >
        <h3> 02. ABOUT ME</h3>
      </div>

      <div className="basis-auto md:basis-2/5 z-10 flex flex-col justify-center">
        <h2 className="text-white text-4xl font-bold uppercase ">
          Me, Myself <span>&</span> I
        </h2>
        <p className="my-2">
          I am a fullstack developer with certifications in Ethereum
          development, cryptocurrency auditing and blockchain development.
          Currently, I am living in the beautiful city of Malaga in Spain.
        </p>
        <p className="mb-2">
          Over the years, I have worked with various technologies and languages
          in developing websites and applications. I am always looking for new
          opportunities to learn and grow, and I am particularly interested in
          exploring cutting-edge technologies that can help me improve my
          skills.
        </p>
        <p className="mb-2">
          Apart from my passion for technology, I am also interested in finance
          and trading. When I am not coding, you can find me outdoors, exploring
          new cultures, playing paddle, practising meditation or enjoying good
          food.
        </p>
      </div>
      <div className="basis-2/5 ">
        <div className="p-6 flex align-middle justify-center flex-col h-full">
          <h3
            data-aos="fade-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="text-cherry text-3xl text-right font-bold uppercase bg-lightnavy px-5 py-3"
          >
            Skills
          </h3>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-delay="300"
            data-aos-anchor="#about"
            data-aos-duration="1000"
            className="my-2 bg-lightnavy zoom-in px-5 py-3  text-right"
          >
            <h4 className=" text-xl mb-2 ">Programming Languages</h4>
            <p className="text-gray italic">
              JavaScript (ES6), TypeScript, HTML, CSS / Sass / Stylus, GraphQL,
              Python, PHP, Solidity
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-delay="500"
            data-aos-anchor="#about"
            data-aos-duration="1000"
            className="my-2 bg-lightnavy zoom-in px-5 py-3  text-right"
          >
            <h4 className=" text-xl mb-2">Libraries & Frameworks</h4>
            <p className="text-gray italic">
              jQuery, React, VueJS, Svelte, Next
            </p>
            <p className="text-gray italic">
              Tailwind, Bootstrap, Pico.css, Bulma
            </p>
            <p className="text-gray italic">Chackra UI, Material UI</p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-delay="700"
            data-aos-anchor="#about"
            data-aos-duration="1000"
            className="my-2 bg-lightnavy zoom-in px-5 py-3  text-right"
          >
            <h4 className=" text-xl mb-2">Tools & Platforms</h4>
            <p className="text-gray italic">
              Git, Gulp, Webpack, Netlify, Heroku, Wordpress
            </p>
            <p className="text-gray italic">AWS, Docker, Kubernetes</p>
            <p className="text-gray italic">Remix, Truffle, Hardhat, Brownie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
