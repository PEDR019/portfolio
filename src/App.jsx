import React from "react";
import "./App.css";
import Header from "./components/header/header";
import About from "./components/about/about";

export default function App() {
  return (
    <main className="App">
      <Header />
      <About />
    </main>
  );
}
