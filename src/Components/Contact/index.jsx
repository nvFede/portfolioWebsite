import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
//import env from "dotenv";

const Contact = () => {
  const form = useRef();

  const [message, setMessage] = useState('');

  console.log('REACT_APP_SERVICE_KEY: ', process.env.REACT_APP_SERVICE_KEY)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(
            "Your mail was sent successfully. I will reply to you asap."
          );
        },
        (error) => {
          console.log(error.text);
          setMessage(" There was an error, please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-slate-400 h-screen w-full flex justify-center items-center px-5"
    >
      <div className="hidden md:flex flex-col basis-2/5 ">
        <h3 className="text-2xl text-cherry">
          Let's start working together to build something awesome
        </h3>
      </div>

      <div className="flex flex-col md:basis-2/5">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Let's talk
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          If you have any queries or questions, please don't hesitate in contact
          me.
        </p>
        <div className="relative mb-4">
          <form ref={form} onSubmit={sendEmail}>
            <label className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              name="from_name"
              className="w-full bg-lightestnavy   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="to_name"
              className="w-full bg-lightestnavy   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <label className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              name="message"
              className="w-full bg-lightestnavy   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
            <p className="text-xs  text-gray-500 mt-3">
            
              {message}
            
            </p>
            <input
              type="submit"
              value="Send"
              className="text-green  border border-green uppercase py-2 px-6 focus:outline-none hover:bg-greentint text-lg"
            />
          </form>
        </div>
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

