
import React from "react";
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <h1 class="title">GET IN TOUCH</h1>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
         
          <div className="contact-cont bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">

          <div className="blur"></div>
<div className="content">
  
  <div className="contact-info">
    <ul className="circle-cont">
      <li><a className="circle2"><i class="fas fa-phone-square-alt"></i>+91 9082027900</a></li>
      <li><a className="circle"><i class="fas fa-envelope-square"></i></a>singhvijay8529@gmail.com</li>
      <li><a href="https://github.com/singhvijay29" className="circle"><i class="fab fa-github"></i>Github</a></li>
      <li><a href="https://www.linkedin.com/in/vijay-kumar-singh-675270203/" className="circle"><i class="fab fa-linkedin"></i>LinkedIn</a></li>
      <li><a href="https://medium.com/@singhvijay8529" className="circle"><i class="fab fa-medium"></i>Medium</a></li>
      <li><a href="https://twitter.com/VijayKumar609" className="circle"><i class="fab fa-twitter"></i>Twitter</a></li>
  
    </ul>
  </div>
</div>


      </div>
        </div>
        <form

          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
        
          <div className="relative mb-4">
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
          <div className="relative mb-4">
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
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
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
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
