import React, { useState } from "react";
import ProjectCard from "./projectcard";
import "./portfolio.css";
import recipesAppGif from "../../images/recipes-app.gif";
import alarmClockGif from "../../images/alarmclock.gif";

const Portfolio = () => {
  const projects = [
    {
      title: "Recipes App",
      description: "This comprehensive recipe management application allows users to discover, save, and organize their favorite recipes. Features include search functionality, categorization, dietary filters, and step-by-step cooking instructions. Built with React and Node.js, this app showcases my full-stack development skills. The project was developed through pair programming in 2020, with the code being pulled from a legacy repository on another GitHub account. However, due to the educational institution setting the repository as private, it is only accessible to members of the class and cannot be viewed by the public. Some features may no longer function as expected due to reliance on an outdated API for data retrieval.",
      image: recipesAppGif,
      link: "https://github.com/PEDR019/recipes-app",
      liveLink: "https://www.naturl.link/greatestrecipes",
      className: "recipes-app"
    },
    {
      title: "AlarmClock",
      description: "The \"AlarmClock\" project is a simple alarm built with React. It allows users to set personalized alarms through an intuitive and user-friendly interface. The application was developed using React's component-based architecture, with state management to handle alarm times and trigger notifications. It demonstrates how React can be used to create interactive applications with minimal complexity.",
      image: alarmClockGif,
      link: "https://github.com/PEDR019/alarm-clock", 
      liveLink: "https://www.naturl.link/alarm-clock", 
      className: "alarm-clock"
    }
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