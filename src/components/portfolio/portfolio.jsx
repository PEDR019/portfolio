import React, { useState } from "react";
import ProjectCard from "./projectcard";
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "React + Node.js shopping platform with cart functionality",
      image: "https://picsum.photos/300/200?random=1",
      link: "https://github.com/project1",
    },
    {
      title: "Task Manager",
      description:
        "Full-stack task management application with real-time updates",
      image: "https://picsum.photos/300/200?random=2",
      link: "https://github.com/project2",
    },
    {
      title: "Weather Dashboard",
      description: "Weather forecast app using external API integration",
      image: "https://picsum.photos/300/200?random=3",
      link: "https://github.com/project3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>My Projects</h2>
      <div className="carousel">
        <ProjectCard {...projects[currentIndex]} />
      </div>
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToProject(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
