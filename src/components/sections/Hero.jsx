import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Button, GradientText, Container } from '../ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faArrowRight,
  faCode,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const rolesList = [
  'AI-driven full stack engineer',
  'React & Node.js systems architect',
  'Building next-gen ERP platforms',
  'Cloud infrastructure specialist',
  'AI/ML integration engineer'
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const currentRole = rolesList[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % rolesList.length);
        }
      }
    }, isDeleting ? 36 : 62);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const stats = [
    { label: 'Projects', value: '15+' },
    { label: 'Tech Stack', value: '25+' },
    { label: 'Focus', value: 'Full Stack' },
  ];

  return (
    <section className="min-h-screen w-full relative overflow-hidden dark:bg-gradient-to-b dark:from-dark-navy dark:to-dark-blue bg-gradient-to-b from-gray-50 to-gray-100 flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 dark:bg-neon-cyan dark:bg-opacity-5 bg-opacity-10 bg-neon-cyan rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 1 }}
          className="absolute bottom-32 right-10 w-96 h-96 dark:bg-neon-blue dark:bg-opacity-5 bg-opacity-10 bg-neon-blue rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Chip badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm"
            >
              <span className="w-2 h-2 dark:bg-accent-green bg-accent-green rounded-full animate-pulse" />
              <span className="dark:text-text-light text-dark-navy">Available for work</span>
            </motion.div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold dark:text-text-light text-dark-navy leading-tight">
                <motion.div className="flex flex-wrap gap-3">
                  {['Hi', 'I\'m', 'Abinanthan V'].map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              </h1>
            </div>

            {/* Role typing */}
            <div className="space-y-2 h-20">
              <p className="text-xl md:text-2xl">
                <span className="gradient-text font-semibold">{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-2 text-neon-cyan"
                >
                  |
                </motion.span>
              </p>
              <p className="dark:text-text-muted text-gray-600 text-lg">
                Building premium digital experiences with modern web technologies
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center"
              >
                View my work <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary inline-flex items-center"
              >
                Get in touch
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t dark:border-dark-border border-gray-200"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="gradient-text text-2xl font-bold">{stat.value}</p>
                  <p className="dark:text-text-muted text-gray-600 text-sm mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Orbiting rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-neon-cyan border-opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-neon-blue border-opacity-10"
              />

              {/* Center orb */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  boxShadow: [
                    '0 0 20px rgba(0, 188, 212, 0.3)',
                    '0 0 40px rgba(0, 188, 212, 0.6)',
                    '0 0 20px rgba(0, 188, 212, 0.3)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-24 dark:bg-gradient-to-br dark:from-neon-cyan dark:to-neon-blue bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full shadow-glow-lg overflow-hidden"
              />

              {/* Add author photo inside the orb */}
              <div className="absolute inset-24 rounded-full overflow-hidden pointer-events-none">
                <img
                  src="/abinanthan-v.jpg"
                  alt="Abinanthan V"
                  className="w-full h-full object-cover rounded-full border-4 border-white/10 dark:border-black/20 shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 mix-blend-overlay" />
              </div>

              {/* Floating icons */}
              {[
                { icon: faCode, delay: 0, angle: 0 },
                { icon: faDatabase, delay: 0.2, angle: 120 },
                { icon: faRobot, delay: 0.4, angle: 240 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.cos((item.angle * Math.PI) / 180) * 80, 0],
                    y: [0, Math.sin((item.angle * Math.PI) / 180) * 80, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="glass rounded-lg p-4 text-neon-cyan text-2xl">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className="dark:text-neon-cyan text-neon-blue text-xl"
          />
        </motion.div>
      </Container>
    </section>
  );
}
