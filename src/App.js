import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Timeline } from './components/sections/Timeline';
import { Contact } from './components/sections/Contact';
import { Timetable } from './pages/Timetable';
import MnMjecERP from './pages/MnMjecERP';

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Achievements />
      <Timeline />
      <Contact />
    </motion.div>
  );
}

function PageWrapper({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen dark:bg-dark-navy bg-white dark:text-text-light text-gray-900">
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/mnmjec-erp"
                element={
                  <PageWrapper>
                    <MnMjecERP />
                  </PageWrapper>
                }
              />
              <Route
                path="/timetable"
                element={
                  <PageWrapper>
                    <Timetable />
                  </PageWrapper>
                }
              />
              <Route
                path="*"
                element={
                  <PageWrapper>
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-5xl font-bold gradient-text mb-4">
                          404 - Page Not Found
                        </h1>
                        <p className="dark:text-text-muted text-gray-600 mb-8">
                          The page you're looking for doesn't exist.
                        </p>
                        <a
                          href="/"
                          className="inline-block px-6 py-3 btn-primary rounded-lg"
                        >
                          Go Home
                        </a>
                      </div>
                    </div>
                  </PageWrapper>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;