import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer focused on creating solutions
              through code.
            </p>
            <p>
              With experience in web development, I love turning ideas into
              reality using modern technologies.
            </p>
          </div>
          <div className="skills">
            <h3>My Skills</h3>
            <div className="skills-list">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
