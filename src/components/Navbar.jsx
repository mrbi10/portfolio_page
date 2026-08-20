import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
  faFileArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

const resumeUrl =
  'https://drive.google.com/file/d/13C-nCC3EKQBgxHNIIdqnmsJxAetfG61y/view?usp=sharing';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDark, toggleTheme } = useTheme();

  /* --------------------------------
     Scroll handling
  -------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 140;

      let currentSection = '';

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* --------------------------------
     Lock body scroll on mobile menu
  -------------------------------- */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const getSectionId = (href) => href.replace('#', '');

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-300
          ${
            isScrolled
              ? `
                dark:bg-dark-navy/90
                bg-white/90
                backdrop-blur-xl
                border-b
                dark:border-dark-border
                border-gray-200
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
              `
              : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* --------------------------------
                Logo
            -------------------------------- */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex-shrink-0"
              aria-label="Abinanthan V home"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <span
                  className="
                    text-xl
                    sm:text-2xl
                    font-extrabold
                    tracking-tight
                    gradient-text
                  "
                >
                  Abinanthan V
                </span>

              </motion.div>
            </Link>

            {/* --------------------------------
                Desktop Navigation
            -------------------------------- */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = getSectionId(link.href);
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ y: -2 }}
                    className={`
                      relative
                      px-3
                      py-2
                      rounded-lg
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        isActive
                          ? `
                            dark:text-neon-cyan
                            text-cyan-600
                          `
                          : `
                            dark:text-text-muted
                            text-gray-700
                            hover:text-neon-cyan
                            dark:hover:text-neon-cyan
                          `
                      }
                    `}
                  >
                    {link.label}

                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active"
                        className="
                          absolute
                          left-3
                          right-3
                          -bottom-0.5
                          h-0.5
                          rounded-full
                          bg-gradient-to-r
                          from-neon-cyan
                          to-neon-blue
                        "
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}

              {/* Resume */}
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  ml-3
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-lg
                  bg-gradient-to-r
                  from-neon-cyan
                  to-neon-blue
                  text-dark-navy
                  font-bold
                  text-sm
                  shadow-[0_0_20px_rgba(0,188,212,0.15)]
                  hover:shadow-[0_0_28px_rgba(0,188,212,0.3)]
                  transition-all
                "
              >
                <FontAwesomeIcon icon={faFileArrowDown} />
                Resume
              </motion.a>
            </div>

            {/* --------------------------------
                Right actions
            -------------------------------- */}
            <div className="flex items-center gap-2">

              {/* Theme toggle */}
              <motion.button
                type="button"
                onClick={toggleTheme}
                whileHover={{
                  scale: 1.08,
                  rotate: isDark ? 12 : -12,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                aria-label={
                  isDark
                    ? 'Switch to light theme'
                    : 'Switch to dark theme'
                }
                title={
                  isDark
                    ? 'Switch to light theme'
                    : 'Switch to dark theme'
                }
                className="
                  relative
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  border
                  dark:border-dark-border
                  border-gray-200
                  dark:bg-dark-card/80
                  bg-white/80
                  dark:text-neon-cyan
                  text-cyan-600
                  hover:border-neon-cyan/50
                  hover:shadow-[0_0_18px_rgba(0,188,212,0.15)]
                  transition-all
                "
              >
                <FontAwesomeIcon
                  icon={isDark ? faSun : faMoon}
                />
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                whileTap={{ scale: 0.92 }}
                aria-label={
                  isOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={isOpen}
                className="
                  md:hidden
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  border
                  dark:border-dark-border
                  border-gray-200
                  dark:bg-dark-card/80
                  bg-white/80
                  dark:text-neon-cyan
                  text-cyan-600
                  transition-all
                "
              >
                <FontAwesomeIcon
                  icon={isOpen ? faTimes : faBars}
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* --------------------------------
            Mobile menu
        -------------------------------- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              className="
                md:hidden
                overflow-hidden
                border-t
                dark:border-dark-border
                border-gray-200
                dark:bg-dark-navy/95
                bg-white/95
                backdrop-blur-xl
              "
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

                <div className="space-y-1">
                  {navLinks.map((link, index) => {
                    const sectionId = getSectionId(link.href);
                    const isActive = activeSection === sectionId;

                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        onClick={handleNavClick}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        className={`
                          flex
                          items-center
                          justify-between
                          px-4
                          py-3
                          rounded-xl
                          text-sm
                          font-medium
                          transition-all
                          ${
                            isActive
                              ? `
                                dark:bg-neon-cyan/10
                                bg-cyan-50
                                dark:text-neon-cyan
                                text-cyan-700
                              `
                              : `
                                dark:text-text-light
                                text-gray-700
                                hover:bg-gray-100
                                dark:hover:bg-dark-card
                                hover:text-neon-cyan
                              `
                          }
                        `}
                      >
                        <span>{link.label}</span>

                        {isActive && (
                          <span
                            className="
                              w-2
                              h-2
                              rounded-full
                              bg-neon-cyan
                              shadow-[0_0_10px_rgba(0,188,212,0.8)]
                            "
                          />
                        )}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Mobile resume */}
                <motion.a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  whileTap={{ scale: 0.98 }}
                  className="
                    mt-4
                    w-full
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-neon-cyan
                    to-neon-blue
                    text-dark-navy
                    font-bold
                    text-sm
                  "
                >
                  <FontAwesomeIcon icon={faFileArrowDown} />
                  View Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default Navbar;