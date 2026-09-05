import "./App.css";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Skills from "./components/Skills.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Journey from "./components/Journey.js";
import Contact from "./components/Contact.js";

export default function App() {
  return (
    <>
      <Nav />
      <div className="page-wrap">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Journey />
        <Contact />
      </div>
    </>
  );
}
