import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section, Card, AnimatedHeading, GradientText } from '../ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMapPin, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const aboutData = {
  intro: "I'm a passionate full-stack engineer with a strong foundation in building scalable systems and creating exceptional user experiences. My journey in tech has been driven by curiosity and a commitment to delivering premium solutions.",
  highlights: [
    { label: 'Age', value: '20', icon: faCalendarDays },
    { label: 'Location', value: 'Chennai', icon: faMapPin },
    { label: 'Focus', value: 'Full Stack', icon: faBriefcase },
  ],
};

const experiencePoints = [
  {
    title: 'Full Stack Development',
    description: 'Expert in modern web technologies and cloud platforms',
  },
  {
    title: 'System Architecture',
    description: 'Designing scalable and maintainable solutions',
  },
  {
    title: 'AI Integration',
    description: 'Implementing cutting-edge AI/ML capabilities',
  },
  {
    title: 'DevOps & Cloud',
    description: 'AWS, Docker, and modern deployment strategies',
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

export function About() {
  return (
    <Section id="about" className="dark:bg-dark-navy bg-white">
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
              About <GradientText>Me</GradientText>
            </AnimatedHeading>
            <p className="dark:text-text-muted text-gray-600 max-w-2xl mx-auto text-lg">
              A journey of building, learning, and creating exceptional digital experiences
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Bio section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <Card className="space-y-4">
                <p className="dark:text-text-light text-gray-800 text-lg leading-relaxed">
                  {aboutData.intro}
                </p>
              </Card>

              {/* Experience cards */}
              <motion.div className="grid md:grid-cols-2 gap-4">
                {experiencePoints.map((point, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="glass-card space-y-2 group"
                  >
                    <h3 className="text-lg font-semibold text-neon-cyan group-hover:text-neon-blue transition-colors">
                      {point.title}
                    </h3>
                    <p className="dark:text-text-muted text-gray-600">
                      {point.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Highlights sidebar */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {aboutData.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glass-card text-center space-y-2"
                >
                  <FontAwesomeIcon
                    icon={highlight.icon}
                    className="text-2xl text-neon-cyan"
                  />
                  <p className="dark:text-text-muted text-gray-600 text-sm">
                    {highlight.label}
                  </p>
                  <p className="text-2xl font-bold gradient-text">
                    {highlight.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
