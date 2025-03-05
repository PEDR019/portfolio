import React from "react";
import "./header.css";

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">Your Name</div>
        <ul className="nav-links">
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("portfolio")}>Portfolio</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
