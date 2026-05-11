import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section, Card, AnimatedHeading, GradientText } from '../ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNode,
  faJs,
  faGitAlt,
  faDocker,
  faAws,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const techCategories = [
  {
    name: 'Frontend',
    icon: faReact,
    color: 'from-neon-cyan to-neon-blue',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML5'],
  },
  {
    name: 'Backend',
    icon: faNode,
    color: 'from-neon-blue to-neon-purple',
    skills: ['Node.js', 'Express', 'REST API', 'JWT', 'Socket.io'],
  },
  {
    name: 'Database',
    icon: faDatabase,
    color: 'from-neon-purple to-neon-pink',
    skills: ['MySQL', 'MongoDB', 'Redis', 'Query Optimization'],
  },
  {
    name: 'DevOps',
    icon: faDocker,
    color: 'from-neon-pink to-neon-cyan',
    skills: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Git'],
  },
  {
    name: 'Tools',
    icon: faGitAlt,
    color: 'from-accent-green to-neon-cyan',
    skills: ['VS Code', 'Postman', 'Git', 'Figma', 'Linux'],
  },
  {
    name: 'Languages',
    icon: faPython,
    color: 'from-neon-blue to-accent-green',
    skills: ['JavaScript', 'Python', 'SQL', 'HTML/CSS', 'Bash'],
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function TechStack() {
  return (
    <Section id="tech" className="dark:bg-dark-blue bg-gray-50">
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
              Technical <GradientText>Skillset</GradientText>
            </AnimatedHeading>
            <p className="dark:text-text-muted text-gray-600 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for building modern applications
            </p>
          </motion.div>

          {/* Tech categories grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {techCategories.map((category, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-card space-y-4 h-full"
                >
                  {/* Category header */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <FontAwesomeIcon
                      icon={category.icon}
                      className="text-white text-xl"
                    />
                  </div>

                  {/* Category name */}
                  <h3 className="text-xl font-semibold text-neon-cyan">
                    {category.name}
                  </h3>

                  {/* Skills list with animation */}
                  <motion.div
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {category.skills.map((skill, j) => (
                      <motion.div
                        key={j}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="flex items-center gap-2 dark:text-text-muted text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 dark:bg-neon-cyan bg-neon-blue rounded-full" />
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl blur bg-gradient-to-br ${category.color} -z-10 transition-opacity duration-300`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-4 pt-8 border-t dark:border-dark-border border-gray-200"
          >
            {[
              { label: 'Languages', value: '5+' },
              { label: 'Frameworks', value: '10+' },
              { label: 'Tools', value: '15+' },
              { label: 'Years Learning', value: '5+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="gradient-text text-2xl font-bold">{stat.value}</p>
                <p className="dark:text-text-muted text-gray-600 text-sm mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
