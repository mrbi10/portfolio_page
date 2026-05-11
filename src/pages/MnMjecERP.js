import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faUsers,
  faChartBar,
  faShieldHalved,
  faServer,
  faClock,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Container, Section, AnimatedHeading, GradientText, Card } from '../components/ui/index';

const features = [
  { icon: faGraduationCap, label: 'Attendance', value: 'Real-time tracking' },
  { icon: faChartBar, label: 'Analytics', value: 'Dashboard insights' },
  { icon: faShieldHalved, label: 'Role-Based', value: '7 user roles' },
  { icon: faUsers, label: 'Scalable', value: '1000+ users' },
];

const modules = [
  { name: 'Attendance Management', desc: 'Real-time tracking and reporting' },
  { name: 'Marks & Assessment', desc: 'Internal marks and grading system' },
  { name: 'Placement Training', desc: 'Training session management' },
  { name: 'Feedback System', desc: 'Student and faculty feedback' },
  { name: 'Analytics Dashboard', desc: 'Comprehensive insights and reports' },
  { name: 'Role Access Control', desc: '7 distinct user roles with permissions' },
];

const techStack = [
  { category: 'Frontend', items: ['React.js', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'JWT Auth'] },
  { category: 'Database', items: ['MySQL', 'Query Optimization', 'Indexing'] },
  { category: 'Deployment', items: ['Ubuntu Server', 'Cloudflare', 'VPN'] },
];

const challenges = [
  'Autosave-based online examination logic',
  'Role-scoped data filtering across modules',
  'Session handling with JWT authentication',
  'Optimized MySQL queries for large datasets',
  'Real-time data synchronization',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function MnMjecERP() {
  return (
    <>
      {/* Hero */}
      <Section className="dark:bg-gradient-to-b dark:from-dark-navy dark:to-dark-blue bg-gradient-to-b from-gray-50 to-gray-100">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full">
              <span className="w-2 h-2 dark:bg-accent-green bg-accent-green rounded-full" />
              <span className="text-sm dark:text-text-light text-gray-700">Featured Project</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <GradientText>MNMJEC ERP</GradientText>
            </h1>
            <p className="text-xl dark:text-text-muted text-gray-600">
              A comprehensive academic management platform designed to streamline institutional workflows with role-based access, real-time analytics, and seamless integration.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section className="dark:bg-dark-navy bg-white">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card text-center space-y-3"
              >
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center">
                    <FontAwesomeIcon icon={feature.icon} className="text-white text-lg" />
                  </div>
                </div>
                <p className="font-semibold text-neon-cyan">{feature.label}</p>
                <p className="text-sm dark:text-text-muted text-gray-600">{feature.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Overview */}
      <Section className="dark:bg-dark-blue bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <AnimatedHeading level="h2">
                Project <GradientText>Overview</GradientText>
              </AnimatedHeading>
              <p className="dark:text-text-light text-gray-700 text-lg leading-relaxed">
                The MNMJEC ERP System is a full-stack academic management platform built to handle attendance, marks, placement training, role-based access, and analytics for institutional workflows.
              </p>
              <Card className="space-y-3">
                <p className="font-semibold text-neon-cyan">Key Features</p>
                <ul className="space-y-2">
                  {['Real-time attendance tracking', 'Integrated marks management', 'Role-scoped access control', 'Analytics dashboard'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 dark:text-text-light text-gray-700">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-accent-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card space-y-6"
            >
              <h3 className="text-2xl font-bold gradient-text">Architecture</h3>
              <div className="space-y-4">
                {techStack.map((stack, i) => (
                  <div key={i} className="space-y-2">
                    <p className="font-semibold text-neon-cyan">{stack.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 dark:bg-dark-card bg-gray-100 text-neon-cyan text-xs rounded-full font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Core Modules */}
      <Section className="dark:bg-dark-navy bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <AnimatedHeading level="h2" className="text-center">
              Core <GradientText>Modules</GradientText>
            </AnimatedHeading>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {modules.map((module, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="glass-card space-y-3 group"
                >
                  <h4 className="font-semibold text-lg text-neon-cyan group-hover:text-neon-blue transition-colors">
                    {module.name}
                  </h4>
                  <p className="dark:text-text-muted text-gray-600 text-sm">
                    {module.desc}
                  </p>
                  <div className="pt-4 border-t dark:border-dark-border border-gray-200">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-accent-green" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Challenges & Solutions */}
      <Section className="dark:bg-dark-blue bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <AnimatedHeading level="h2" className="text-center">
              Engineering <GradientText>Challenges</GradientText>
            </AnimatedHeading>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glass-card flex items-center gap-4"
                >
                  <div className="w-8 h-8 dark:bg-neon-cyan bg-neon-cyan rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="dark:text-dark-navy text-dark-navy font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="dark:text-text-light text-gray-700">{challenge}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Deployment */}
      <Section className="dark:bg-dark-navy bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <Card className="space-y-4">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faServer} className="text-2xl text-neon-cyan" />
                <h3 className="text-2xl font-bold gradient-text">Deployment</h3>
              </div>
              <p className="dark:text-text-light text-gray-700">
                The system is deployed on an Ubuntu-based server inside the college network with public exposure via Cloudflare. MySQL runs locally with secured VPN-based remote access.
              </p>
              <ul className="space-y-2 pt-4 border-t dark:border-dark-border border-gray-200">
                <li className="flex items-center gap-2 dark:text-text-muted text-gray-600">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-accent-green" />
                  Ubuntu Server hosting
                </li>
                <li className="flex items-center gap-2 dark:text-text-muted text-gray-600">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-accent-green" />
                  Cloudflare CDN & SSL
                </li>
                <li className="flex items-center gap-2 dark:text-text-muted text-gray-600">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-accent-green" />
                  VPN-secured database access
                </li>
              </ul>
            </Card>

            <Card className="space-y-4">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faClock} className="text-2xl text-neon-blue" />
                <h3 className="text-2xl font-bold gradient-text">Impact</h3>
              </div>
              <p className="dark:text-text-light text-gray-700">
                The ERP centralizes academic workflows into a single platform, improving efficiency and reducing manual data management across all departments.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t dark:border-dark-border border-gray-200">
                <div className="text-center">
                  <p className="gradient-text text-3xl font-bold">1000+</p>
                  <p className="text-sm dark:text-text-muted text-gray-600">Active Users</p>
                </div>
                <div className="text-center">
                  <p className="gradient-text text-3xl font-bold">99.5%</p>
                  <p className="text-sm dark:text-text-muted text-gray-600">Uptime</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Call to action */}
      <Section className="dark:bg-gradient-to-b dark:from-dark-blue dark:to-dark-navy bg-gradient-to-b from-gray-50 to-gray-100">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-6 max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold gradient-text">
              Want to see more projects?
            </h2>
            <p className="dark:text-text-muted text-gray-600 text-lg">
              Explore other projects and learn more about my engineering approach.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/#projects" className="btn-primary px-8 py-3 rounded-lg">
                View All Projects
              </a>
              <a href="/#contact" className="btn-secondary px-8 py-3 rounded-lg">
                Start a Project
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}

export default MnMjecERP;