import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="content-wrapper">
          <div className="maple-photo">
            <div 
              className="profile-image"
              style={{
                position: 'relative',
                width: '300px',
                height: '300px',
                margin: '0 auto',
                animation: 'bubbleEffect 3s ease-in-out infinite'
              }}
            >
              <img
                src="https://i.postimg.cc/z3msPptL/escritorio.jpg"
                alt="Profile"
                style={{
                  width: '360px',
                  height: '360px',
                  objectFit: 'cover',
                  objectPosition: 'center 22px',
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
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
        
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-list">
            <span className="react">React</span>
            <span className="javascript">JavaScript</span>
            <span className="html">HTML5</span>
            <span className="css">CSS3</span>
            <span className="nodejs">Node.js</span>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .profile-image::before {
          content: '';
          position: absolute;
          inset: -5px;
          background: linear-gradient(135deg,
            rgba(255, 215, 0, 0.6),
            rgba(255, 0, 0, 0.4),
            rgba(255, 215, 0, 0.6)
          );
          -webkit-mask-image: url("https://upload.wikimedia.org/wikipedia/commons/6/6d/Maple_leaf_--_NDP.svg");
          mask-image: url("https://upload.wikimedia.org/wikipedia/commons/6/6d/Maple_leaf_--_NDP.svg");
          -webkit-mask-size: contain;
          mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
          animation: colorShift 3s ease-in-out infinite;
          z-index: 2;
        }
        
        @keyframes bubbleEffect {
          0%, 100% {
            transform: scale(1.01) translateY(0);
          }
          50% {
            transform: scale(1.04) translateY(-3px);
          }
        }
        
        @keyframes colorShift {
          0%, 100% {
            background: linear-gradient(135deg,
              rgba(255, 215, 0, 0.6),
              rgba(255, 140, 0, 0.4),
              rgba(255, 215, 0, 0.6)
            );
            filter: brightness(1.1);
          }
          50% {
            background: linear-gradient(135deg,
              rgba(255, 0, 0, 0.6),
              rgba(255, 69, 0, 0.4),
              rgba(255, 0, 0, 0.6)
            );
            filter: brightness(1.3);
          }
        }
      `}</style>
    </section>
  );
};

export default About;