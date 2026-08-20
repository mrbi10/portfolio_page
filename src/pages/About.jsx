import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Section,
  Card,
  AnimatedHeading,
  GradientText,
} from '../components/ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faMapPin,
  faCalendarDays,
  faCode,
  faServer,
  faBrain,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';

/* =========================
   AGE CALCULATOR
========================= */

const calculateAge = (birthYear, birthMonth, birthDay) => {
  const today = new Date();

  let age = today.getFullYear() - birthYear;

  const birthdayPassed =
    today.getMonth() > birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() >= birthDay);

  if (!birthdayPassed) {
    age--;
  }

  return age;
};

const currentAge = calculateAge(2005, 5, 10); // 10 June 2005

/* =========================
   DATA
========================= */

const aboutData = {
  intro:
    "I'm a passionate full-stack engineer focused on building scalable systems, intelligent applications, and polished digital experiences. I enjoy turning complex problems into reliable, maintainable solutions while continuously exploring modern technologies across full-stack development, system design, cloud, and AI.",

  highlights: [
    {
      label: 'Age',
      value: currentAge,
      icon: faCalendarDays,
    },
    {
      label: 'Location',
      value: 'Chennai',
      icon: faMapPin,
    },
    {
      label: 'Focus',
      value: 'Full Stack',
      icon: faBriefcase,
    },
  ],
};

const experiencePoints = [
  {
    title: 'Full Stack Development',
    description:
      'Building modern, responsive applications using React, Node.js, APIs, databases, and cloud technologies.',
    icon: faCode,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'System Architecture',
    description:
      'Designing scalable, maintainable systems with clean architecture and practical engineering principles.',
    icon: faServer,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'AI Integration',
    description:
      'Exploring AI-powered workflows and integrating intelligent capabilities into real-world applications.',
    icon: faBrain,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Working with Azure, Docker, Linux, CI/CD, and modern deployment practices.',
    icon: faCloud,
    color: 'from-purple-500 to-cyan-500',
  },
];

/* =========================
   ANIMATIONS
========================= */

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
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

/* =========================
   COMPONENT
========================= */

export function About() {
  return (
    <Section
      id="about"
      className="
        relative overflow-hidden
        bg-white
        dark:bg-dark-navy
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute -top-32 -left-32
            w-96 h-96
            rounded-full
            bg-cyan-400/10
            dark:bg-cyan-400/5
            blur-3xl
          "
        />

        <div
          className="
            absolute -bottom-40 -right-32
            w-96 h-96
            rounded-full
            bg-blue-500/10
            dark:bg-blue-500/5
            blur-3xl
          "
        />
      </div>

      <Container className="relative z-10">
        <div className="space-y-14">

          {/* ================= HEADER ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <AnimatedHeading level="h2">
              About <GradientText>Me</GradientText>
            </AnimatedHeading>

            <p
              className="
                max-w-2xl mx-auto
                text-lg
                leading-relaxed
                text-gray-600
                dark:text-text-muted
              "
            >
              A journey of building, learning, designing systems,
              and creating meaningful digital experiences.
            </p>
          </motion.div>

          {/* ================= MAIN GRID ================= */}

          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* ================= BIO ================= */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="lg:col-span-2 space-y-6"
            >

              {/* Intro card */}

              <motion.div variants={itemVariants}>
                <Card
                  className="
                    relative overflow-hidden
                    p-7 md:p-8
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white
                    dark:bg-white/[0.03]
                    shadow-sm
                    dark:shadow-none
                  "
                >
                  {/* Accent line */}
                  <div
                    className="
                      absolute left-0 top-0 bottom-0
                      w-1
                      bg-gradient-to-b
                      from-cyan-400
                      via-blue-500
                      to-purple-500
                    "
                  />

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="
                          h-10 w-10
                          rounded-xl
                          flex items-center justify-center
                          bg-cyan-50
                          dark:bg-cyan-400/10
                        "
                      >
                        <FontAwesomeIcon
                          icon={faCode}
                          className="
                            text-cyan-600
                            dark:text-neon-cyan
                          "
                        />
                      </span>

                      <div>
                        <p
                          className="
                            text-sm font-medium
                            text-gray-500
                            dark:text-text-muted
                          "
                        >
                          Who I am
                        </p>

                        <h3
                          className="
                            text-xl font-bold
                            text-gray-900
                            dark:text-white
                          "
                        >
                          Full Stack Engineer
                        </h3>
                      </div>
                    </div>

                    <p
                      className="
                        text-base md:text-lg
                        leading-8
                        text-gray-700
                        dark:text-gray-300
                      "
                    >
                      {aboutData.intro}
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* ================= EXPERTISE ================= */}

              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-2 gap-4"
              >
                {experiencePoints.map((point) => (
                  <motion.div
                    key={point.title}
                    variants={itemVariants}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.2 },
                    }}
                    className="
                      group
                      relative overflow-hidden
                      rounded-2xl
                      p-6
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-gray-50
                      dark:bg-white/[0.025]
                      hover:border-cyan-400/40
                      dark:hover:border-cyan-400/30
                      transition-all duration-300
                      shadow-sm
                      hover:shadow-lg
                      dark:shadow-none
                    "
                  >
                    {/* Hover glow */}

                    <div
                      className="
                        absolute
                        -top-20 -right-20
                        w-40 h-40
                        rounded-full
                        bg-cyan-400/10
                        dark:bg-cyan-400/5
                        blur-3xl
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                      "
                    />

                    <div className="relative space-y-4">

                      {/* Icon */}

                      <div
                        className={`
                          w-11 h-11
                          rounded-xl
                          bg-gradient-to-br ${point.color}
                          flex items-center justify-center
                          shadow-lg
                        `}
                      >
                        <FontAwesomeIcon
                          icon={point.icon}
                          className="text-white"
                        />
                      </div>

                      {/* Text */}

                      <div className="space-y-2">
                        <h3
                          className="
                            text-lg font-bold
                            text-gray-900
                            dark:text-white
                            group-hover:text-cyan-600
                            dark:group-hover:text-neon-cyan
                            transition-colors
                          "
                        >
                          {point.title}
                        </h3>

                        <p
                          className="
                            text-sm leading-6
                            text-gray-600
                            dark:text-text-muted
                          "
                        >
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ================= HIGHLIGHTS ================= */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-4"
            >
              {aboutData.highlights.map((highlight) => (
                <motion.div
                  key={highlight.label}
                  variants={itemVariants}
                  whileHover={{
                    x: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="
                    group
                    relative overflow-hidden
                    rounded-2xl
                    p-6
                    text-center
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white
                    dark:bg-white/[0.03]
                    shadow-sm
                    dark:shadow-none
                    hover:border-cyan-400/40
                    dark:hover:border-cyan-400/30
                    transition-all duration-300
                  "
                >
                  {/* Background glow */}

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-br
                      from-cyan-400/5
                      to-blue-500/5
                      dark:from-cyan-400/5
                      dark:to-blue-500/5
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                    "
                  />

                  <div className="relative space-y-3">

                    <div
                      className="
                        mx-auto
                        w-12 h-12
                        rounded-xl
                        flex items-center justify-center
                        bg-cyan-50
                        dark:bg-cyan-400/10
                      "
                    >
                      <FontAwesomeIcon
                        icon={highlight.icon}
                        className="
                          text-xl
                          text-cyan-600
                          dark:text-neon-cyan
                        "
                      />
                    </div>

                    <p
                      className="
                        text-sm font-medium
                        text-gray-500
                        dark:text-text-muted
                      "
                    >
                      {highlight.label}
                    </p>

                    <p
                      className="
                        text-3xl font-black
                        bg-gradient-to-r
                        from-cyan-500
                        via-blue-500
                        to-purple-500
                        bg-clip-text
                        text-transparent
                      "
                    >
                      {highlight.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ================= BOTTOM STATEMENT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              rounded-2xl
              p-6 md:p-8
              text-center
              border
              border-cyan-200
              dark:border-cyan-400/10
              bg-gradient-to-r
              from-cyan-50
              via-blue-50
              to-purple-50
              dark:from-cyan-400/[0.04]
              dark:via-blue-400/[0.04]
              dark:to-purple-400/[0.04]
            "
          >
            <p
              className="
                text-lg md:text-xl
                font-medium
                text-gray-700
                dark:text-gray-300
              "
            >
              Building today with an eye toward{' '}
              <span
                className="
                  font-bold
                  text-cyan-600
                  dark:text-neon-cyan
                "
              >
                scalable systems
              </span>
              ,{' '}
              <span
                className="
                  font-bold
                  text-blue-600
                  dark:text-neon-blue
                "
              >
                intelligent technology
              </span>
              , and{' '}
              <span
                className="
                  font-bold
                  text-purple-600
                  dark:text-neon-purple
                "
              >
                exceptional experiences.
              </span>
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}