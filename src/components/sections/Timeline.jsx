import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section, AnimatedHeading, GradientText } from '../ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faTrophy } from '@fortawesome/free-solid-svg-icons';

const timelineData = [
  {
    id: 1,
    title: 'B.E. in Computer Science',
    institution: 'MNMJEC',
    location: 'Chennai',
    date: '2022 - Present',
    description: 'Bachelor of Engineering with focus on full-stack development, system architecture, and AI/ML integration.',
    icon: faGraduationCap,
    color: 'from-neon-cyan to-neon-blue',
    isCurrent: true,
    achievements: ['CGPA: 8.2', 'Lead Developer', 'Research Project'],
  },
  {
    id: 2,
    title: 'HSC - Higher Secondary Certificate',
    institution: 'Vidya Mandir',
    location: 'Chennai',
    date: '2020 - 2022',
    description: 'Completed higher secondary education with specialization in computer science.',
    icon: faSchool,
    color: 'from-neon-blue to-neon-purple',
    isCurrent: false,
    achievements: ['95% Average', 'Merit Scholar'],
  },
  {
    id: 3,
    title: 'SSLC - Secondary School Certificate',
    institution: 'Vidya Mandir',
    location: 'Chennai',
    date: '2008 - 2020',
    description: 'Completed secondary school education with excellent academic performance.',
    icon: faTrophy,
    color: 'from-neon-purple to-neon-pink',
    isCurrent: false,
    achievements: ['98% Average', 'District Topper'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export function Timeline() {
  return (
    <Section id="timeline" className="dark:bg-dark-navy bg-white">
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
              Education &amp; <GradientText>Journey</GradientText>
            </AnimatedHeading>
            <p className="dark:text-text-muted text-gray-600 max-w-2xl mx-auto text-lg">
              A path of continuous learning and academic excellence
            </p>
          </motion.div>

          {/* Animated Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative"
          >
            {/* Vertical connector line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple origin-top"
            />

            {/* Timeline items */}
            <div className="space-y-12 relative">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="glass-card space-y-3 relative"
                    >
                      {/* Current badge */}
                      {item.isCurrent && (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -top-4 -right-4 w-28 h-7 dark:bg-accent-green bg-accent-green rounded-full flex items-center justify-center text-white text-xs font-bold"
                        >
                          CURRENT
                        </motion.div>
                      )}

                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-neon-cyan">
                          {item.title}
                        </h3>
                        <p className="dark:text-text-muted text-gray-600">
                          {item.institution}
                        </p>
                      </div>

                      <div className="flex gap-4 text-sm dark:text-text-muted text-gray-600">
                        <span>{item.location}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>

                      <p className="dark:text-text-light text-gray-700 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2 pt-3">
                        {item.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 dark:bg-dark-card bg-gray-100 text-neon-cyan text-xs font-semibold rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline node */}
                  <div className="flex justify-center flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-glow-lg`}
                    >
                      {/* Rotating rings */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 rounded-full border-2 border-transparent border-t-white border-r-white opacity-30"
                      />

                      {/* Icon */}
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-white text-2xl relative z-10"
                      />

                      {/* Pulse effect */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.3, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color}`}
                      />
                    </motion.div>
                  </div>

                  {/* Spacer for right alignment */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 pt-8 border-t dark:border-dark-border border-gray-200"
          >
            {[
              { label: 'Years in Tech', value: '5+' },
              { label: 'Degrees', value: '1' },
              { label: 'Certifications', value: '3' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="gradient-text text-3xl font-bold">{stat.value}</p>
                <p className="dark:text-text-muted text-gray-600 text-sm mt-2">
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
