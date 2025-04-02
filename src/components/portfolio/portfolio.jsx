import React, { useState, useRef, useEffect } from "react";
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
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);

  // Função para navegar para o próximo projeto
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Função para navegar para o projeto anterior
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Manipuladores de eventos para deslizar com o dedo
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    
    const currentX = e.changedTouches[0].clientX;
    const diff = startX - currentX;
    
    // Se o deslize for significativo (mais de 50px), mude de slide
    if (diff > 50) {
      nextProject(); // Deslizou para a esquerda -> próximo projeto
    } else if (diff < -50) {
      prevProject(); // Deslizou para a direita -> projeto anterior
    }
    
    setIsDragging(false);
  };

  // Manipuladores de eventos para mouse (desktop)
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    
    const diff = startX - e.clientX;
    
    // Se o deslize for significativo (mais de 50px), mude de slide
    if (diff > 50) {
      nextProject(); // Deslizou para a esquerda -> próximo projeto
    } else if (diff < -50) {
      prevProject(); // Deslizou para a direita -> projeto anterior
    }
    
    setIsDragging(false);
  };

  // Limpa o estado de arrastar se o mouse sair da área do carrossel
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>My Projects</h2>
      
      <div className="carousel-container">
        <div 
          className="carousel"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="carousel-content">
            <div className="project-card-wrapper">
              <ProjectCard {...projects[currentIndex]} />
              
              {/* Setas de navegação */}
              <button className="carousel-arrow prev-arrow" onClick={prevProject}>
                {"<"}
              </button>
              
              <button className="carousel-arrow next-arrow" onClick={nextProject}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;