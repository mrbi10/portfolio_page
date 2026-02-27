import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import ScrollToTop from "./components/ScrollToTop";
import MnMjecERP from "./pages/MnMjecERP";

import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const rotatingTexts = [
  "ERP Developer from Chennai",
  "React and Node.js Engineer",
  "Creator of MNMJEC ERP",
  "Full Stack Developer",
  "Computer Science Engineering Student"
];

const textVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="hero-section" id="hero">
        <div className="hero-background-fx"></div>

        <div className="hero-content">
          <motion.h1
            className="name"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            Abinanthan V
          </motion.h1>

          <motion.p
            className="subtitle"
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {rotatingTexts[index]}
          </motion.p>

          <motion.a
            href="#projects"
            className="cta-button"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Explore My Work →
          </motion.a>
        </div>
      </header>

      <main>
        <About />
        <Timeline />
        <Projects />
        <Achievements />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mnmjec-erp" element={<MnMjecERP />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;