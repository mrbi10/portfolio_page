import React, { useEffect, useState } from 'react';
import './App.css';
import About from './About'; 
import Projects from './Projects';
import Timeline from "./components/Timeline";
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import Achievements from './components/Achievements';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion'; 

const rotatingTexts = [
  "Software Engineer",
  "Design-Minded Developer",
  "Lover of Clean Code",
  "Built in Chennai",
  "Open Source Enthusiast"
];

const textVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

// const subtitleVariants = {
//   initial: { opacity: 0, scale: 0.95 },
//   animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } }
// };

function App() {
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
      <Navbar />
      <div className="hero-section" id="hero">
        <div className="hero-background-fx"></div> 
        
        <div className="hero-content">
          <motion.h1 
            className="name"
            initial="initial"
            animate="animate"
            variants={textVariants}
            key="name" 
          >
            ABINANTHAN V
          </motion.h1>
          
          <motion.p 
            className="subtitle"
            key={index} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} 
            transition={{ duration: 0.4 }}
          >
            {rotatingTexts[index]}
          </motion.p>
          
          <motion.button
            className="cta-button"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work &nbsp; &rarr;
          </motion.button>
          
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            ↓ Scroll to explore
          </motion.div>
        </div>
      </div>
      <About />
      <Timeline />
      <Projects id="projects" /> 
      <Achievements />
      <TechStack />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;