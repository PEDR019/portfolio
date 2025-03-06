import React from "react";
import "./App.css";
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <main className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
