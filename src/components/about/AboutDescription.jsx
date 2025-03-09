import React from "react";
import "./AboutDescription.css";

const AboutDescription = () => {
  return (
    <div className="about-content">
      <div className="profile-section">
        <div className="profile-image">
          <img
            src="https://i.postimg.cc/z3msPptL/escritorio.jpg"
            alt="Profile"
          />
        </div>
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi, I'm Pedro! I'm a Full Stack Developer who loves creating
          innovative web solutions. I'm always exploring new technologies
          and tools, especially when it comes to React, Node.js, and modern
          web development. I'm also really into cryptocurrencies,
          blockchain, and everything related to how these technologies are
          changing the game. I currently live in Vancouver, and when I'm not
          coding, you'll probably find me following the NBA. I'm a huge fan,
          and the energy and strategy of the game really inspire me. I also
          love the parallels between basketball and software
          development—whether it's teamwork, quick thinking, or adapting to
          new challenges.
        </p>
      </div>
    </div>
  );
};

export default AboutDescription;
