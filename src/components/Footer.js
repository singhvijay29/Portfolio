import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer headerTop p-3 flex justify-between bg-gray-800 items-center">
      <div className="container">
          <h3>Copyright © {year} Vijay Kumar Singh. All rights reserved</h3>
        </div>

        <div className="footer-body flex justify-between text-2xl">
          <a href="https://github.com/singhvijay29" target="_blank" className="mx-2.5 "> <i class="fab fa-github"></i></a>

          <a href="https://twitter.com/VijayKumar609" target="_blank" className="mx-2.5 text-2xl">
            <i class="fab fa-twitter-square"></i>
          </a>

          <a href="https://www.linkedin.com/in/vijay-kumar-singh-675270203/" target="_blank" className="mx-3.5 ">
            <i class="fab fa-linkedin"></i>
          </a>

          <a href="https://www.instagram.com/singh_vijay294/" target="_blank" className="mx-3.5 text-2xl">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>

  );
};
export default Footer;
