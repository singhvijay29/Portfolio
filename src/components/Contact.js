import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_flhtcte",
        "template_04b51x4",
        form.current,
        "user_jEpZ0vTu03Aje92I2PJoH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="gradient-to-black w-[100vw] overflow-hidden">
    <section id="contact" className="relative pb-[80px]">
      <h1 className="title mt-5">GET IN TOUCH</h1>
      <div className="container mx-auto flex flex-col lg:flex-row ">
        <div className="rounded-lg lg:mr-10 p-10 flex items-end justify-start relative">
          <div className="contact-cont relative flex flex-wrap ">
            <div className="content">
              <div className="contact-info text-[16px] md:text-[28px]">
                <ul>
                  <li>
                    <a className="circle2">
                      <i class="fas fa-phone-square-alt"></i>+91 9082027900
                    </a>
                  </li>
                  <li className="mx-auto flex sm:flex-nowrap">
                    <a
                      href="mailto:singhvijay8529@gmail.com"
                      className="circle"
                    >
                      <i class="fas fa-envelope-square"></i>
                    </a>
                    singhvijay8529@gmail.com
                  </li>
                  <li>
                    <a
                      href="https://github.com/singhvijay29"
                      target="_blank"
                      rel="noreferrer"
                      className="circle"
                    >
                      <i class="fab fa-github"></i>Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/singh-vijay294/"
                      target="_blank"
                      rel="noreferrer"
                      className="circle"
                    >
                      <i class="fab fa-linkedin"></i>LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/@singhvijay8529"
                      target="_blank"
                      rel="noreferrer"
                      className="circle"
                    >
                      <i class="fab fa-medium"></i>Medium
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/VijayKumar609"
                      target="_blank"
                      rel="noreferrer"
                      className="circle"
                    >
                      <i class="fab fa-twitter"></i>Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          name="contact"
          className="flex flex-col lg:w-1/2 lg:ml-auto lg:py-12 mt-8 lg:mt-0 mr-5 ml-5"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>

          <div className="relative mb-4 flex flex-col">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 flex flex-col">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 flex flex-col">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
</div>
  );
}
