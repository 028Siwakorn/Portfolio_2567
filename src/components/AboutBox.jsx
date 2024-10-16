import React from "react";
import cv_siwakorn from "../assets/download/cv_siwakorn.pdf";
const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        {/** About me */}
        <div className="col">
          <div className="about-info">
            <h3>My Introduction</h3>
            <p>
              I'm Siwakorn, a passionate programmer with a love for creating
              efficient and user-friendly applications. I specialize in [React
              JS], and I have experience working on a variety of projects
            </p>
            <div className="about-btn">
              <a href={cv_siwakorn} target="_blank"></a>
            </div>
          </div>
        </div>

        {/** Skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Boostrap</span>
              <span>Tailwind</span>
              <span>React</span>
            </div>
            <div className="skills-header">
              <h3>Backtend</h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>Node.js</span>
              <span>Javascript</span>
              <span>Python</span>
              <span>Java</span>
            </div>
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MYSQL</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
