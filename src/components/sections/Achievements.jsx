import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Section, Card, AnimatedHeading, GradientText } from '../ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCertificate, faMedal } from '@fortawesome/free-solid-svg-icons';

const achievements = [
  {
    id: 1,
    title: 'Design of Computing Systems',
    issuer: 'NPTEL',
    date: 'Dec 2023',
    skills: ['Computer Architecture', 'Systems Design'],
    icon: faCertificate,
    color: 'from-neon-cyan to-neon-blue',
  },
  {
    id: 2,
    title: 'Microsoft Azure Developer',
    issuer: 'Microsoft & LinkedIn',
    date: 'Jan 2024',
    skills: ['Cloud Services', 'Azure'],
    icon: faMedal,
    color: 'from-neon-blue to-neon-purple',
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    issuer: 'LinkedIn Learning',
    date: 'Feb 2024',
    skills: ['Frontend', 'Backend', 'Databases'],
    icon: faTrophy,
    color: 'from-neon-purple to-neon-pink',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <Section id="achievements" className="dark:bg-dark-blue bg-gray-50">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <AnimatedHeading level="h2">
              Certifications &amp; <GradientText>Achievements</GradientText>
            </AnimatedHeading>
            <p className="dark:text-text-muted text-gray-600 max-w-2xl mx-auto text-lg">
              Professional credentials and accomplishments in continuous learning
            </p>
          </motion.div>

          {/* Achievement Wall */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
              >
                <motion.div
                  onClick={() => setSelectedAchievement(achievement.id)}
                  whileHover={{ y: -12 }}
                  className="glass-card space-y-4 cursor-pointer group relative h-full"
                >
                  {/* Icon badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center`}
                  >
                    <FontAwesomeIcon
                      icon={achievement.icon}
                      className="text-white text-2xl"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-neon-cyan group-hover:text-neon-blue transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="dark:text-text-muted text-gray-600 text-sm">
                      {achievement.issuer}
                    </p>
                    <p className="dark:text-text-muted text-gray-600 text-xs">
                      {achievement.date}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {achievement.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 dark:bg-dark-card bg-gray-100 text-neon-cyan text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievement Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center pt-8 border-t dark:border-dark-border border-gray-200"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <p className="gradient-text text-4xl font-bold">
                {achievements.length}+
              </p>
              <p className="dark:text-text-muted text-gray-600 mt-2">
                Professional Certifications Earned
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Modal for details */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-dark rounded-xl max-w-md w-full mx-4"
            >
              {/* Modal content would go here */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
