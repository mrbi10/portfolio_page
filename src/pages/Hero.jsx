import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Container } from '../components/ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faArrowRight,
  faCode,
  faRobot,
  faDatabase,
  faCloud,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

const rolesList = [
  'System Design Associate Trainee',
  'Full Stack Engineer',
  'React & Node.js Developer',
  'AI/ML Integration Engineer',
  'Cloud & Systems Enthusiast',
];

const stats = [
  { label: 'Projects', value: '15+' },
  { label: 'Technologies', value: '25+' },
  { label: 'Experience', value: '1+' },
];

const floatingIcons = [
  { icon: faCode, angle: 0, delay: 0 },
  { icon: faDatabase, angle: 120, delay: 0.5 },
  { icon: faRobot, angle: 240, delay: 1 },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const currentRole = rolesList[roleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(
              currentRole.substring(0, displayText.length + 1)
            );
          } else {
            setIsDeleting(true);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % rolesList.length);
          }
        }
      },
      isDeleting ? 35 : 70
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
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
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="
        relative min-h-screen w-full overflow-hidden
        flex items-center
        bg-gradient-to-b
        from-slate-50 via-white to-cyan-50/40
        dark:from-[#050816] dark:via-[#07111f] dark:to-[#081426]
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cyan glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute -top-32 -left-32
            w-[420px] h-[420px]
            rounded-full blur-[120px]
            bg-cyan-400/15
            dark:bg-cyan-400/10
          "
        />

        {/* Blue glow */}
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute -bottom-40 -right-40
            w-[500px] h-[500px]
            rounded-full blur-[130px]
            bg-blue-400/15
            dark:bg-blue-500/10
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute inset-0 opacity-[0.025]
            dark:opacity-[0.035]
            bg-[linear-gradient(rgba(6,182,212,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.8)_1px,transparent_1px)]
            bg-[size:50px_50px]
          "
        />

        {/* Top gradient line */}
        <div
          className="
            absolute top-0 left-0 right-0 h-px
            bg-gradient-to-r
            from-transparent via-cyan-400/60 to-transparent
          "
        />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            grid lg:grid-cols-[1.15fr_0.85fr]
            gap-14 xl:gap-20
            items-center
            py-24 lg:py-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="space-y-7">

            {/* Availability / status */}
            <motion.div variants={itemVariants}>
              <div
                className="
                  inline-flex items-center gap-2.5
                  px-4 py-2
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/5
                  dark:bg-emerald-400/5
                  backdrop-blur-md
                  shadow-sm
                  dark:shadow-none
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute inline-flex h-full w-full
                      animate-ping rounded-full
                      bg-emerald-400 opacity-60
                    "
                  />
                  <span
                    className="
                      relative inline-flex
                      h-2.5 w-2.5 rounded-full
                      bg-emerald-500
                    "
                  />
                </span>

                <span
                  className="
                    text-sm font-medium
                    text-emerald-700
                    dark:text-emerald-300
                  "
                >
                  Currently working at Trainocate India
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <p
                className="
                  mb-3
                  text-sm md:text-base
                  font-semibold uppercase
                  tracking-[0.2em]
                  text-cyan-600
                  dark:text-cyan-400
                "
              >
                Hello, I'm
              </p>

              <h1
                class="
    text-3xl sm:text-4xl md:text-5xl xl:text-6xl
    font-black
    tracking-tight
    leading-[0.95]
    text-slate-900
    dark:text-white
  "
              >
                Abinanthan V
              </h1>
            </motion.div>

            {/* Current role */}
            <motion.div
              variants={itemVariants}
              className="min-h-[90px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-lg
                    bg-cyan-500/10
                    dark:bg-cyan-400/10
                    border border-cyan-500/20
                    dark:border-cyan-400/20
                  "
                >
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="
                      text-cyan-600
                      dark:text-cyan-400
                    "
                  />
                </div>

              </div>

              <div className="text-xl md:text-2xl xl:text-3xl font-bold">
                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-500
                    to-violet-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {displayText}
                </span>

                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                  className="ml-1 text-cyan-500 dark:text-cyan-400"
                >
                  |
                </motion.span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="
                max-w-2xl
                text-base md:text-lg
                leading-8
                text-slate-600
                dark:text-slate-300
              "
            >
              Full-stack engineer focused on building scalable applications,
              intelligent systems, and polished digital experiences with
              modern web technologies, cloud platforms, and AI.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                className="
                  group
                  inline-flex items-center justify-center
                  gap-2
                  rounded-xl
                  px-6 py-3.5
                  font-semibold
                  text-white
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  shadow-lg
                  shadow-cyan-500/20
                  hover:shadow-xl
                  hover:shadow-cyan-500/30
                  transition-shadow
                "
              >
                View My Work

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  px-6 py-3.5
                  font-semibold
                  border
                  border-slate-300
                  dark:border-slate-700
                  bg-white/70
                  dark:bg-white/[0.03]
                  text-slate-800
                  dark:text-slate-200
                  backdrop-blur-md
                  hover:border-cyan-400
                  hover:text-cyan-600
                  dark:hover:text-cyan-400
                  transition-all
                "
              >
                Let's Connect
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="
                grid grid-cols-3
                max-w-xl
                pt-7
                mt-3
                border-t
                border-slate-200
                dark:border-slate-800
              "
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                  }}
                  className="
                    relative
                    text-center
                    first:text-left
                    last:text-right
                  "
                >
                  <p
                    className="
                      text-2xl md:text-3xl
                      font-bold
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs md:text-sm
                      font-medium
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <motion.div
            variants={itemVariants}
            className="
              relative
              hidden lg:flex
              h-[540px]
              items-center
              justify-center
            "
          >
            <div className="relative w-[430px] h-[430px]">

              {/* Outer ambient glow */}
              <div
                className="
                  absolute inset-10
                  rounded-full
                  bg-cyan-400/10
                  dark:bg-cyan-400/5
                  blur-[80px]
                "
              />

              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute inset-0
                  rounded-full
                  border
                  border-cyan-500/20
                  dark:border-cyan-400/20
                "
              />

              {/* Dashed ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute inset-8
                  rounded-full
                  border
                  border-dashed
                  border-blue-500/20
                  dark:border-blue-400/20
                "
              />

              {/* Inner ring */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  rotate: {
                    duration: 18,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 5,
                    repeat: Infinity,
                  },
                }}
                className="
                  absolute inset-20
                  rounded-full
                  border-2
                  border-cyan-400/10
                "
              />

              {/* Main photo container */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  inset-[100px]
                  rounded-full
                  p-[4px]
                  bg-gradient-to-br
                  from-cyan-400
                  via-blue-500
                  to-violet-500
                  shadow-2xl
                  shadow-cyan-500/20
                "
              >
                <div
                  className="
                    relative
                    w-full h-full
                    rounded-full
                    overflow-hidden
                    bg-slate-900
                    ring-8
                    ring-white/60
                    dark:ring-slate-950/50
                  "
                >
                  <img
                    src="/abinanthan-v.jpg"
                    alt="Abinanthan V"
                    className="
                      w-full h-full
                      object-cover
                      object-center
                    "
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-slate-950/30
                      via-transparent
                      to-cyan-400/10
                    "
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            bottom-6
            left-1/2
            -translate-x-1/2
            hidden md:flex
            flex-col
            items-center
            gap-2
            text-slate-400
            dark:text-slate-500
            hover:text-cyan-500
            transition-colors
          "
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-sm"
          />
        </motion.a>
      </Container>
    </section>
  );
}