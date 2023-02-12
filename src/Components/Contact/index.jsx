import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-400 h-screen w-full flex flex justify-center items-center px-5"
    >
      <div className="hidden md:flex flex-col basis-2/5 ">
        <h3 className="text-2xl text-cherry">Let's start working together to build something awesome</h3>


      
      </div>
      <div className="flex flex-col md:basis-2/5">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Let's talk
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          If you have any queries or questions, please don't hesitate in contact me.
          
        </p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full bg-lightestnavy   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-lightestnavy   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            class="w-full bg-lightestnavy   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <p class="text-xs  text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
        <button class="text-green  border border-green uppercase py-2 px-6 focus:outline-none hover:bg-greentint text-lg">
          Send!
        </button>
       
      </div>

      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className="hidden lg:block  background-text text-lightnavy text-center min-h-screen"
      >
        <p> 05.CONTACT</p>
      </div>
    </section>
  );
};

export default Contact;
