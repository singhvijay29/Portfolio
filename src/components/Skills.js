import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="Skills" class="skills-section">
      <div class="container">
        
      </div>
      <h1>Skills</h1>
        <h2>Tech Stacks</h2>
      <div class="skills-div">
        <div class="skills-card">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt=""
          />
          <h3>React</h3>
        </div>
        <div class="skills-card">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png"
            alt=""
          />
          <h3>Node</h3>
        </div>
        <div class="skills-card">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <h3>JavaScript</h3>
        </div>

        <div class="skills-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            alt=""
          />
          <h3>CSS</h3>
        </div>
        <div class="skills-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
            alt=""
          />
          <h3>HTML</h3>
        </div>
        <div class="skills-card">
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt=""
          />
          <h3>Git</h3>
        </div>
        <div class="skills-card">
          <img
            src="http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"
            alt=""
          />
          <h3>Redux</h3>
        </div>
        <div class="skills-card">
          <img
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
            alt=""
          />
          <h3>MongoDB</h3>
        </div>
        <div class="skills-card">
          <img
            src="https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
            alt=""
          />
          <h3>Postman</h3>
        </div>
      </div>
      <h2>Proficiency</h2>
      <div class="container">
      </div>
      <div class="skills-div">
        <div class="skills-card">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt=""
          />
          <h3>React</h3>
        </div>
        <div class="skills-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Front-end-logo-color%402x.png"
            alt=""
          />
          <h3>Frontend</h3>
        </div>
        <div class="skills-card">
          <img
            src="https://cdn.icon-icons.com/icons2/1852/PNG/512/iconfinder-cloudserver-4417106_116641.png"
            alt=""
          />
          <h3>Backend</h3>
        </div>
        <div class="skills-card">
          <img
            src="https://hackr.io/tutorials/data-structures-algorithms/logo-data-structures-algorithms.svg?ver=1587721467"
            alt=""
          />
          <h3>DSA</h3>
        </div>
      </div>
    </section>
  );
}
