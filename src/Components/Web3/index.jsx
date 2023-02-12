import React from "react";
import Card from "./Card";

const Web3 = () => {
  return (
    <section
      id="web3"
      className="min-h-screen flex flex-row justify-center  text-white mt-10 "
    >
      <div className="basis-4/5 flex flex-col justify-center">
      

        <div className="flex py-10">
          <Card />
        </div>
      </div>{" "}
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className="hidden lg:block  background-text text-lightnavy text-center min-h-screen"
      >
        <p className="uppercase"> 05. Blockchain</p>
      </div>
    </section>
  );
};

export default Web3;
