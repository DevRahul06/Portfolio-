import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
// import {Routes,Route} from "react-router-dom"
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About.jsx"
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <React.Fragment>

        <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact/>
      </main>

      <footer>
        <Footer/>
      </footer>

    </React.Fragment>
  );
}

export default App;
