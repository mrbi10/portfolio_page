import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section, AnimatedHeading, GradientText } from '../components/ui/index';
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
import {
  faDatabase,
  faCode,
  faServer,
  faCloud,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';

const techCategories = [
  {
    name: 'Frontend',
    description: 'Modern, responsive user interfaces',
    icon: faReact,
    color: 'cyan',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML5'],
  },
  {
    name: 'Backend',
    description: 'Scalable APIs & server architecture',
    icon: faNode,
    color: 'blue',
    skills: ['Node.js', 'Express', 'FastAPI', 'JWT', 'Socket.io'],
  },
  {
    name: 'Database',
    description: 'Reliable data & performance',
    icon: faDatabase,
    color: 'purple',
    skills: ['MySQL', 'MongoDB', 'Redis', 'Query Optimization'],
  },
  {
    name: 'DevOps',
    description: 'Deployment & cloud infrastructure',
    icon: faDocker,
    color: 'pink',
    skills: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Git'],
  },
  {
    name: 'Tools',
    description: 'Tools that power my workflow',
    icon: faGitAlt,
    color: 'green',
    skills: ['VS Code', 'Postman', 'Git', 'Figma', 'Linux'],
  },
  {
    name: 'Languages',
    description: 'Languages I build with',
    icon: faPython,
    color: 'orange',
    skills: ['JavaScript', 'Python', 'SQL', 'HTML/CSS', 'Bash'],
  },
];

const stats = [
  { label: 'Languages', value: '5+' },
  { label: 'Frameworks', value: '10+' },
  { label: 'Tools', value: '15+' },
  { label: 'Years Learning', value: '5+' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skillVariants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const colorStyles = {
  cyan: {
    icon: 'bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/20 dark:border-cyan-400/20',
    glow: 'bg-cyan-400/10 dark:bg-cyan-400/10',
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    hover: 'group-hover:border-cyan-500/40 dark:group-hover:border-cyan-400/40',
  },
  blue: {
    icon: 'bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-300 border-blue-500/20 dark:border-blue-400/20',
    glow: 'bg-blue-400/10 dark:bg-blue-400/10',
    dot: 'bg-blue-500 dark:bg-blue-400',
    hover: 'group-hover:border-blue-500/40 dark:group-hover:border-blue-400/40',
  },
  purple: {
    icon: 'bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-300 border-purple-500/20 dark:border-purple-400/20',
    glow: 'bg-purple-400/10 dark:bg-purple-400/10',
    dot: 'bg-purple-500 dark:bg-purple-400',
    hover: 'group-hover:border-purple-500/40 dark:group-hover:border-purple-400/40',
  },
  pink: {
    icon: 'bg-pink-500/10 dark:bg-pink-400/10 text-pink-600 dark:text-pink-300 border-pink-500/20 dark:border-pink-400/20',
    glow: 'bg-pink-400/10 dark:bg-pink-400/10',
    dot: 'bg-pink-500 dark:bg-pink-400',
    hover: 'group-hover:border-pink-500/40 dark:group-hover:border-pink-400/40',
  },
  green: {
    icon: 'bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20 dark:border-emerald-400/20',
    glow: 'bg-emerald-400/10 dark:bg-emerald-400/10',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    hover: 'group-hover:border-emerald-500/40 dark:group-hover:border-emerald-400/40',
  },
  orange: {
    icon: 'bg-orange-500/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-300 border-orange-500/20 dark:border-orange-400/20',
    glow: 'bg-orange-400/10 dark:bg-orange-400/10',
    dot: 'bg-orange-500 dark:bg-orange-400',
    hover: 'group-hover:border-orange-500/40 dark:group-hover:border-orange-400/40',
  },
};

export function TechStack() {
  return (
    <Section
      id="tech"
      className="
        relative overflow-hidden
        bg-slate-50
        dark:bg-[#050b18]
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -top-40 -left-40
            h-96 w-96
            rounded-full
            bg-cyan-400/10
            dark:bg-cyan-500/5
            blur-3xl
          "
        />

        <div
          className="
            absolute -bottom-40 -right-40
            h-96 w-96
            rounded-full
            bg-purple-400/10
            dark:bg-purple-500/5
            blur-3xl
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)]
            [background-size:32px_32px]
            dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.035)_1px,transparent_0)]
          "
        />
      </div>

      <Container>
        <div className="relative space-y-14">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/5
                px-4 py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-cyan-600
                dark:border-cyan-400/20
                dark:bg-cyan-400/5
                dark:text-cyan-300
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex
                    h-full w-full
                    animate-ping
                    rounded-full
                    bg-cyan-500
                    opacity-75
                    dark:bg-cyan-400
                  "
                />
                <span
                  className="
                    relative inline-flex
                    h-2 w-2
                    rounded-full
                    bg-cyan-500
                    dark:bg-cyan-400
                  "
                />
              </span>

              Tech Stack
            </motion.div>

            <AnimatedHeading level="h2">
              Technical <GradientText>Skillset</GradientText>
            </AnimatedHeading>

            <p
              className="
                mx-auto mt-5
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
            >
              A carefully selected toolkit for designing, building and
              deploying modern, scalable digital experiences.
            </p>
          </motion.div>

          {/* Tech categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {techCategories.map((category) => {
              const styles = colorStyles[category.color];

              return (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  whileHover={{ y: -7 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="group relative"
                >
                  {/* Glow */}
                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -inset-1
                      rounded-3xl
                      opacity-0
                      blur-xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      ${styles.glow}
                    `}
                  />

                  {/* Card */}
                  <div
                    className={`
                      relative
                      h-full
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-6
                      shadow-sm
                      transition-all
                      duration-300

                      hover:shadow-xl
                      hover:shadow-slate-200/60

                      dark:border-white/[0.08]
                      dark:bg-white/[0.035]
                      dark:shadow-none
                      dark:backdrop-blur-xl
                      dark:hover:bg-white/[0.055]
                      dark:hover:shadow-black/20

                      ${styles.hover}
                    `}
                  >
                    {/* Top shine */}
                    <div
                      className="
                        pointer-events-none
                        absolute inset-x-0 top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-slate-300
                        to-transparent
                        dark:via-white/20
                      "
                    />

                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div
                          className={`
                            flex h-14 w-14
                            items-center justify-center
                            rounded-2xl
                            border
                            transition-transform
                            duration-300
                            group-hover:scale-110
                            ${styles.icon}
                          `}
                        >
                          <FontAwesomeIcon
                            icon={category.icon}
                            className="text-2xl"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <span
                        className="
                          rounded-full
                          border
                          border-slate-200
                          bg-slate-50
                          px-2.5 py-1
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-wider
                          text-slate-400
                          dark:border-white/[0.07]
                          dark:bg-white/[0.03]
                          dark:text-slate-500
                        "
                      >
                        {String(category.skills.length).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="mt-5">
                      <h3
                        className="
                          text-xl
                          font-bold
                          tracking-tight
                          text-slate-900
                          transition-colors
                          dark:text-white
                        "
                      >
                        {category.name}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          text-sm
                          leading-6
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        {category.description}
                      </p>
                    </div>

                    {/* Divider */}
                    <div
                      className="
                        my-5
                        h-px
                        bg-slate-100
                        dark:bg-white/[0.07]
                      "
                    />

                    {/* Skills */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.04,
                          },
                        },
                      }}
                      className="flex flex-wrap gap-2"
                    >
                      {category.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          variants={skillVariants}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-slate-200
                            bg-slate-50
                            px-3 py-1.5
                            text-xs
                            font-medium
                            text-slate-600
                            transition-all
                            duration-200
                            hover:border-slate-300
                            hover:bg-white
                            hover:text-slate-900

                            dark:border-white/[0.07]
                            dark:bg-white/[0.035]
                            dark:text-slate-400
                            dark:hover:border-white/[0.12]
                            dark:hover:bg-white/[0.07]
                            dark:hover:text-white
                          "
                        >
                          <span
                            className={`
                              h-1.5 w-1.5
                              rounded-full
                              ${styles.dot}
                            `}
                          />

                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Bottom accent */}
                    <div
                      className="
                        pointer-events-none
                        absolute bottom-0 left-6 right-6
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-500/0
                        to-transparent
                        transition-all
                        duration-500
                        group-hover:via-cyan-500/50
                        dark:group-hover:via-cyan-400/40
                      "
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-sm

              dark:border-white/[0.08]
              dark:bg-white/[0.025]
              dark:backdrop-blur-xl
            "
          >
            {/* Stats glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-32
                w-96
                -translate-x-1/2
                rounded-full
                bg-cyan-400/10
                blur-3xl
                dark:bg-cyan-400/5
              "
            />

            <div className="relative grid grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0 dark:divide-white/[0.08]">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.4,
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="
                    group
                    relative
                    px-5
                    py-7
                    text-center
                    transition-colors
                    hover:bg-slate-50
                    dark:hover:bg-white/[0.025]
                  "
                >
                  <p
                    className="
                      bg-gradient-to-r
                      from-cyan-500
                      via-blue-500
                      to-purple-500
                      bg-clip-text
                      text-3xl
                      font-extrabold
                      tracking-tight
                      text-transparent
                      dark:from-cyan-300
                      dark:via-blue-400
                      dark:to-purple-400
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-medium
                      uppercase
                      tracking-wider
                      text-slate-500
                      dark:text-slate-500
                    "
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-center"
          >
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              className="text-cyan-500 dark:text-cyan-400"
              aria-hidden="true"
            />

            <p
              className="
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Always learning, experimenting, and building something better.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}