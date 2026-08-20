import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faGraduationCap,
  faUsers,
  faChartBar,
  faShieldHalved,
  faServer,
  faCheckCircle,
  faCode,
  faDatabase,
  faCloud,
  faLock,
  faLayerGroup,
  faArrowRight,
  faBolt,
  faGears,
  faCircleNodes,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Section,
  AnimatedHeading,
  GradientText,
} from '../components/ui/index';

const features = [
  {
    icon: faGraduationCap,
    label: 'Academic Operations',
    value: 'Centralized workflows',
  },
  {
    icon: faUsers,
    label: 'Multi-Role Platform',
    value: '9 access roles',
  },
  {
    icon: faChartBar,
    label: 'Analytics',
    value: 'Real-time insights',
  },
  {
    icon: faShieldHalved,
    label: 'Security',
    value: 'JWT + RBAC',
  },
];

const modules = [
  {
    icon: faGraduationCap,
    name: 'Attendance Management',
    desc: 'Real-time attendance tracking, reporting, and academic visibility for students and faculty.',
  },
  {
    icon: faChartBar,
    name: 'Marks & Assessment',
    desc: 'Centralized internal assessment, marks management, and academic performance tracking.',
  },
  {
    icon: faUsers,
    name: 'Placement Training',
    desc: 'Online training, assessments, test management, and placement preparation workflows.',
  },
  {
    icon: faCheckCircle,
    name: 'Feedback System',
    desc: 'Structured feedback collection and reporting for students, faculty, and departments.',
  },
  {
    icon: faBolt,
    name: 'Analytics Dashboard',
    desc: 'Interactive dashboards providing actionable insights across academic modules.',
  },
  {
    icon: faLock,
    name: 'Role-Based Access',
    desc: 'Permission-driven access control designed around distinct user roles.',
  },
];

const techStack = [
  {
    icon: faCode,
    category: 'Frontend',
    description: 'Responsive and interactive user interface',
    items: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: faServer,
    category: 'Backend',
    description: 'API-driven application architecture',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: faDatabase,
    category: 'Database',
    description: 'Structured relational data layer',
    items: ['MySQL', 'Query Optimization', 'Indexing', 'Relational Design'],
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    icon: faCloud,
    category: 'Infrastructure',
    description: 'Secure production-oriented deployment',
    items: ['Ubuntu Server', 'Cloudflare', 'VPN', 'SSL'],
    gradient: 'from-purple-500 to-cyan-500',
  },
];

const challenges = [
  {
    icon: faLock,
    title: 'Role-Scoped Data Access',
    description:
      'Implemented role-aware access patterns so users interact only with the data and functionality relevant to their responsibilities.',
  },
  {
    icon: faBolt,
    title: 'Autosave Examination Logic',
    description:
      'Designed autosave-based online examination workflows to reduce data loss and provide a more reliable testing experience.',
  },
  {
    icon: faDatabase,
    title: 'Database Performance',
    description:
      'Optimized MySQL queries and indexing strategies to maintain responsive application performance as institutional data grows.',
  },
  {
    icon: faCircleNodes,
    title: 'Cross-Module Integration',
    description:
      'Connected academic, placement, feedback, attendance, and analytics workflows into one consistent application ecosystem.',
  },
  {
    icon: faShieldHalved,
    title: 'Authentication & Sessions',
    description:
      'Implemented JWT-based authentication and session handling to provide secure access across the application.',
  },
];

const architectureLayers = [
  {
    icon: faGlobe,
    title: 'Users',
    description: 'Students • Faculty • Admin • Placement',
  },
  {
    icon: faCode,
    title: 'React Application',
    description: 'UI • Forms • Dashboards • Role-aware views',
  },
  {
    icon: faServer,
    title: 'Node.js API',
    description: 'Express • REST APIs • Authentication',
  },
  {
    icon: faDatabase,
    title: 'MySQL',
    description: 'Relational data • Queries • Indexing',
  },
];

const impactPoints = [
  'Centralized multiple academic workflows into one platform',
  'Reduced dependency on fragmented manual processes',
  'Enabled role-specific access across institutional operations',
  'Provided structured dashboards and reporting capabilities',
  'Created reusable foundations for future academic modules',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const cardClass = `
  rounded-2xl
  border
  border-gray-200
  bg-white
  shadow-sm
  transition-all
  duration-300
  dark:border-white/10
  dark:bg-white/[0.04]
  dark:shadow-none
`;

const softCardClass = `
  rounded-2xl
  border
  border-gray-200
  bg-gray-50
  shadow-sm
  transition-all
  duration-300
  dark:border-white/10
  dark:bg-dark-card/60
`;

function MnMjecERP() {
  return (
    <main className="overflow-hidden bg-white text-gray-900 dark:bg-dark-navy dark:text-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <Section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-white
          via-gray-50
          to-gray-100
          dark:from-dark-navy
          dark:via-dark-blue
          dark:to-dark-navy
        "
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/5" />
          <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-400/5" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-400/5 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto max-w-5xl text-center"
          >
            {/* Badge */}
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-gray-200
                bg-white
                px-4
                py-2
                shadow-sm
                dark:border-white/10
                dark:bg-white/5
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Featured Full-Stack Project
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-neon-cyan dark:via-neon-blue dark:to-neon-purple">
                MNMJEC ERP
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl dark:text-gray-300">
              A full-stack academic management platform built to
              <span className="font-semibold text-cyan-600 dark:text-neon-cyan">
                {' '}centralize institutional workflows
              </span>
              , streamline operations, and provide role-aware access to
              academic and administrative data.
            </p>

            {/* Tech pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                'React.js',
                'Node.js',
                'Express.js',
                'MySQL',
                'JWT',
                'Cloudflare',
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-gray-700
                    shadow-sm
                    dark:border-white/10
                    dark:bg-dark-card
                    dark:text-gray-200
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* =====================================================
          METRICS
      ====================================================== */}
      <Section className="bg-white dark:bg-dark-navy">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.label}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`${cardClass} group relative overflow-hidden p-6`}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition-all group-hover:bg-cyan-400/20 dark:bg-cyan-400/5" />

                <div className="relative space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20 dark:from-neon-cyan dark:to-neon-blue">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className="text-lg text-white"
                    />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {feature.label}
                    </p>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {feature.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* =====================================================
          OVERVIEW
      ====================================================== */}
      <Section className="bg-gray-50 dark:bg-dark-blue">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <AnimatedHeading level="h2">
                <span className="text-gray-900 dark:text-white">
                  Project{' '}
                </span>
                <GradientText>Overview</GradientText>
              </AnimatedHeading>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                MNMJEC ERP was developed as a centralized platform for
                managing important academic and institutional workflows.
                The system brings together attendance, marks, placement
                training, feedback, analytics, and access control under
                one application.
              </p>

              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Rather than treating each workflow as an isolated system,
                the platform was designed around shared authentication,
                structured data, role-based permissions, and reusable
                application components.
              </p>

              {/* Feature list */}
              <div className="grid gap-3 pt-3 sm:grid-cols-2">
                {[
                  'Centralized academic workflows',
                  'Role-based permissions',
                  'Interactive dashboards',
                  'Secure authentication',
                  'Online assessment workflows',
                  'Scalable relational data model',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="flex-shrink-0 text-emerald-500"
                    />

                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Architecture */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`${cardClass} relative overflow-hidden p-6 sm:p-8`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-cyan-600 dark:text-neon-cyan">
                      SYSTEM ARCHITECTURE
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                      Application Layers
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  {architectureLayers.map((layer, index) => (
                    <React.Fragment key={layer.title}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="
                          rounded-xl
                          border
                          border-gray-200
                          bg-gray-50
                          p-4
                          transition-all
                          hover:border-cyan-300
                          hover:shadow-sm
                          dark:border-white/10
                          dark:bg-dark-card/70
                          dark:hover:border-neon-cyan/30
                        "
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                            <FontAwesomeIcon
                              icon={layer.icon}
                              className="text-sm text-white"
                            />
                          </div>

                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">
                              {layer.title}
                            </p>

                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                              {layer.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {index < architectureLayers.length - 1 && (
                        <div className="flex justify-center">
                          <div className="h-4 w-px bg-gradient-to-b from-cyan-500 to-blue-600" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* =====================================================
          MODULES
      ====================================================== */}
      <Section className="bg-white dark:bg-dark-navy">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="mx-auto max-w-2xl text-center">
              <AnimatedHeading level="h2">
                <span className="text-gray-900 dark:text-white">
                  Core{' '}
                </span>
                <GradientText>Modules</GradientText>
              </AnimatedHeading>

              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                A modular architecture designed to support multiple
                academic and administrative workflows.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {modules.map((module) => (
                <motion.div
                  key={module.name}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className={`${cardClass} group relative overflow-hidden p-6`}
                >
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="space-y-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                      <FontAwesomeIcon
                        icon={module.icon}
                        className="text-white"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-neon-cyan">
                        {module.name}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {module.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 border-t border-gray-200 pt-3 dark:border-white/10">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-sm text-emerald-500"
                      />

                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Integrated module
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}
      <Section className="bg-gray-50 dark:bg-dark-blue">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="text-center">
              <AnimatedHeading level="h2">
                <span className="text-gray-900 dark:text-white">
                  Technology{' '}
                </span>
                <GradientText>Stack</GradientText>
              </AnimatedHeading>

              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Technologies selected for maintainability, performance,
                security, and deployment flexibility.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2"
            >
              {techStack.map((stack) => (
                <motion.div
                  key={stack.category}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className={`${cardClass} relative overflow-hidden p-6`}
                >
                  <div
                    className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${stack.gradient}`}
                  />

                  <div className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stack.gradient}`}
                    >
                      <FontAwesomeIcon
                        icon={stack.icon}
                        className="text-white"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {stack.category}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {stack.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {stack.items.map((tech) => (
                          <span
                            key={tech}
                            className="
                              rounded-full
                              border
                              border-gray-200
                              bg-gray-100
                              px-3
                              py-1.5
                              text-xs
                              font-semibold
                              text-blue-600
                              dark:border-white/10
                              dark:bg-dark-card
                              dark:text-neon-cyan
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* =====================================================
          CHALLENGES
      ====================================================== */}
      <Section className="bg-white dark:bg-dark-navy">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-5">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28 lg:col-span-2"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-600 dark:text-neon-cyan">
                Engineering
              </p>

              <div className="mt-2">
                <AnimatedHeading level="h2">
                  <span className="text-gray-900 dark:text-white">
                    Challenges &amp;{' '}
                  </span>
                  <GradientText>Solutions</GradientText>
                </AnimatedHeading>
              </div>

              <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Building an institutional platform involved solving
                problems around security, data consistency, performance,
                and integration between multiple workflows.
              </p>

              <div
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-gray-200
                  bg-gray-50
                  px-4
                  py-2
                  shadow-sm
                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <FontAwesomeIcon
                  icon={faGears}
                  className="text-cyan-600 dark:text-neon-cyan"
                />

                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Real-world engineering problems
                </span>
              </div>
            </motion.div>

            {/* Challenges */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 lg:col-span-3"
            >
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className={`${cardClass} group p-6`}
                >
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                        <FontAwesomeIcon
                          icon={challenge.icon}
                          className="text-white"
                        />
                      </div>

                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                        {index + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-neon-cyan">
                        {challenge.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* =====================================================
          DEPLOYMENT + SECURITY
      ====================================================== */}
      <Section className="bg-gray-50 dark:bg-dark-blue">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Deployment */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={`${softCardClass} h-full p-6 sm:p-8`}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                    <FontAwesomeIcon
                      icon={faServer}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-neon-cyan">
                      Infrastructure
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Deployment
                    </h3>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-gray-700 dark:text-gray-300">
                  The application is deployed on an Ubuntu-based server
                  within the college network, with public access exposed
                  through Cloudflare. MySQL is hosted locally with
                  controlled VPN-based remote access.
                </p>

                <div className="mt-6 space-y-3 border-t border-gray-200 pt-4 dark:border-white/10">
                  {[
                    'Ubuntu Server hosting',
                    'Cloudflare CDN & SSL',
                    'VPN-secured database access',
                    'Node.js application server',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-emerald-500"
                      />

                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={`${softCardClass} h-full p-6 sm:p-8`}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-neon-purple">
                      Security
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Access &amp; Protection
                    </h3>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-gray-700 dark:text-gray-300">
                  Security was considered across authentication,
                  authorization, database access, and infrastructure.
                  The application uses JWT-based authentication combined
                  with role-specific permissions.
                </p>

                <div className="mt-6 grid gap-3 border-t border-gray-200 pt-4 sm:grid-cols-2 dark:border-white/10">
                  {[
                    'JWT Authentication',
                    'Role-Based Access',
                    'Protected APIs',
                    'VPN Database Access',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <FontAwesomeIcon
                        icon={faLock}
                        className="text-sm text-cyan-600 dark:text-neon-cyan"
                      />

                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* =====================================================
          IMPACT
      ====================================================== */}
      <Section className="bg-white dark:bg-dark-navy">
        <Container>
          <div className="mx-auto max-w-5xl">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <AnimatedHeading level="h2">
                <span className="text-gray-900 dark:text-white">
                  Project{' '}
                </span>
                <GradientText>Impact</GradientText>
              </AnimatedHeading>

              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                The platform was designed to move institutional
                processes from fragmented workflows toward a unified
                digital system.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-2"
            >
              {impactPoints.map((point, index) => (
                <motion.div
                  key={point}
                  variants={itemVariants}
                  className={`${cardClass} flex items-center gap-4 p-5`}
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                    <span className="text-sm font-bold text-white">
                      {index + 1}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    {point}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <Section
        className="
          bg-gradient-to-b
          from-gray-50
          to-gray-100
          dark:from-dark-blue
          dark:to-dark-navy
        "
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                text-center
                shadow-lg
                sm:p-12
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-none
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/5" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl dark:bg-purple-400/5" />

              <div className="relative space-y-6">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-2
                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-cyan-600 dark:text-neon-cyan"
                  />

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Full-Stack Engineering Project
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                  From Academic Workflow to{' '}
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-neon-cyan dark:via-neon-blue dark:to-neon-purple">
                    Digital Platform
                  </span>
                </h2>

                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  MNMJEC ERP represents a practical application of
                  full-stack development, database engineering,
                  authentication, system design, and deployment to
                  solve real institutional problems.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4 pt-3">

                  <a
                    href="/#projects"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-gradient-to-r
                      from-cyan-600
                      to-blue-600
                      px-6
                      py-3
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-cyan-500/20
                      transition-all
                      hover:-translate-y-0.5
                      hover:shadow-xl
                      dark:from-neon-cyan
                      dark:to-neon-blue
                      dark:text-dark-navy
                    "
                  >
                    View All Projects
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>

                  <a
                    href="/#contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-gray-300
                      bg-white
                      px-6
                      py-3
                      font-semibold
                      text-gray-800
                      transition-all
                      hover:-translate-y-0.5
                      hover:bg-gray-50
                      dark:border-white/10
                      dark:bg-dark-card
                      dark:text-white
                      dark:hover:bg-white/10
                    "
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

export default MnMjecERP;