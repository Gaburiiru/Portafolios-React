import React, { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BootScreen from "./components/BootScreen";
import Terminal from "./components/Terminal";
import AmbientBackground from "./components/AmbientBackground";

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="scanlines bg-void min-h-screen">
      {!booted && <BootScreen onDone={() => setBooted(true)} />}
      <AmbientBackground />
      <Nav />
      <Hero />
      <About />
      <Personal />
      <Experience />
      <Projects />
      <Stack />
      <Education />
      <Contact />
      <Footer />
      <Terminal />
    </div>
  );
}

export default App;
