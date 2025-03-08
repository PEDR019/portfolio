import React, { useState } from "react";
import ProjectCard from "./projectcard";
import "./portfolio.css";
import recipesAppGif from "../../images/recipes-app.gif";

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
      title: "Task Manager",
      description: "Full-stack task management application with real-time updates. Users can create, organize, and prioritize tasks across different projects and categories. The app includes features like deadline tracking, progress monitoring, team collaboration tools, and customizable notification settings.",
      image: "https://picsum.photos/300/200?random=2",
      link: "https://github.com/project2",
      liveLink: "https://task-manager-demo.example.com"
    },
    {
      title: "Weather Dashboard",
      description: "Weather forecast app using external API integration. This interactive dashboard provides detailed weather information including current conditions, hourly forecasts, 7-day predictions, and severe weather alerts. The app features interactive maps, location-based services, and customizable display preferences for a personalized user experience.",
      image: "https://picsum.photos/300/200?random=3",
      link: "https://github.com/project3",
      liveLink: "https://weather-app-demo.example.com"
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