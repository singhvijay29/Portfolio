
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import './Contact.css';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_flhtcte', 'template_04b51x4', form.current, 'user_jEpZ0vTu03Aje92I2PJoH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id="contact" className="relative my-6">
      <h1 className="title mt-5">GET IN TOUCH</h1>
      <div className="container px-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
         
          <div className="contact-cont bg-gray-900 relative flex flex-wrap rounded shadow-md">

      
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
        <form ref={form} onSubmit={sendEmail}

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
