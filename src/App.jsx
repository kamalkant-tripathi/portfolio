import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Capabilities from "./components/Capabilities";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Capabilities />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;