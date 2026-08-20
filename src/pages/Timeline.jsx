import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Section,
  AnimatedHeading,
  GradientText,
} from '../components/ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faGraduationCap,
  faSchool,
  faTrophy,
  faLocationDot,
  faCalendarDays,
  faArrowDown,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const timelineData = [
  {
    id: 1,
    type: 'work',
    title: 'System Design Associate Trainee',
    institution: 'Trainocate India Pvt. Ltd.',
    location: 'Chennai',
    date: 'June 2026 - Present',
    description:
      'Working on system design, architecture concepts, scalable application patterns, and modern technology solutions while developing practical experience in enterprise environments.',
    icon: faBriefcase,
    color: 'cyan',
    isCurrent: true,
    achievements: [
      'System Design',
      'Architecture',
      'Enterprise Solutions',
    ],
  },
  {
    id: 2,
    type: 'education',
    title: 'B.E. in Computer Science',
    institution: 'MNMJEC',
    location: 'Chennai',
    date: '2022 - April 2026',
    description:
      'Completed Bachelor of Engineering in Computer Science with a strong focus on full-stack development, system architecture, cloud technologies, and AI/ML.',
    icon: faGraduationCap,
    color: 'blue',
    isCurrent: false,
    achievements: [
      'CGPA: 8.2',
      'Lead Developer',
      'Research Project',
    ],
  },
  {
    id: 3,
    type: 'education',
    title: 'Secondary and Higher Secondary School',
    institution: 'Shri Natesan Vidyalaya Matriculation Higher Secondary School',
    location: 'Chennai',
    date: '2017 - 2022',
    description:
      'Completed higher secondary education with a specialization in computer science and a strong academic foundation in mathematics and technology.',
    icon: faSchool,
    color: 'purple',
    isCurrent: false,
    achievements: [

    ],
  },
  {
    id: 4,
    type: 'education',
    title: 'Primary and Secondary School',
    institution: "St. Mary's Matriculation Higher Secondary School",
    location: 'Chennai',
    date: '2003 - 2017',
    description:
      'Completed secondary school education with strong academic performance and an early interest in technology and problem solving.',
    icon: faTrophy,
    color: 'emerald',
    isCurrent: false,
    achievements: [

    ],
  },
];

const colorStyles = {
  cyan: {
    icon: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20 dark:bg-cyan-400/10 dark:text-cyan-300 dark:border-cyan-400/20',
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'bg-cyan-400/10 dark:bg-cyan-400/5',
    border:
      'group-hover:border-cyan-500/30 dark:group-hover:border-cyan-400/30',
  },

  blue: {
    icon: 'bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-400/10 dark:text-blue-300 dark:border-blue-400/20',
    dot: 'bg-blue-500 dark:bg-blue-400',
    gradient: 'from-blue-500 to-indigo-500',
    glow: 'bg-blue-400/10 dark:bg-blue-400/5',
    border:
      'group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30',
  },

  purple: {
    icon: 'bg-purple-500/10 text-purple-600 border-purple-500/20 dark:bg-purple-400/10 dark:text-purple-300 dark:border-purple-400/20',
    dot: 'bg-purple-500 dark:bg-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'bg-purple-400/10 dark:bg-purple-400/5',
    border:
      'group-hover:border-purple-500/30 dark:group-hover:border-purple-400/30',
  },

  emerald: {
    icon: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:border-emerald-400/20',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    gradient: 'from-emerald-500 to-cyan-500',
    glow: 'bg-emerald-400/10 dark:bg-emerald-400/5',
    border:
      'group-hover:border-emerald-500/30 dark:group-hover:border-emerald-400/30',
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Timeline() {
  return (
    <Section
      id="timeline"
      className="
        relative
        overflow-hidden
        bg-slate-50
        dark:bg-[#050b18]
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-cyan-400/10
            blur-3xl
            dark:bg-cyan-500/5
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-20
            h-96
            w-96
            rounded-full
            bg-purple-400/10
            blur-3xl
            dark:bg-purple-500/5
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.05)_1px,transparent_0)]
            [background-size:32px_32px]
            dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)]
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/5
                px-4
                py-2
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
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-cyan-500
                    opacity-75
                    dark:bg-cyan-400
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-cyan-500
                    dark:bg-cyan-400
                  "
                />
              </span>

              Career &amp; Education
            </motion.div>

            <AnimatedHeading level="h2">
              My <GradientText>Journey</GradientText>
            </AnimatedHeading>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
            >
              From building a strong academic foundation to starting my
              professional career in system design and technology.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="relative"
          >
            {/* Desktop timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: 'easeOut',
              }}
              className="
                absolute
                bottom-0
                left-1/2
                top-0
                hidden
                w-px
                -translate-x-1/2
                origin-top
                bg-gradient-to-b
                from-cyan-500
                via-blue-500
                to-purple-500
                opacity-30
                dark:opacity-40
                md:block
              "
            />

            {/* Mobile timeline line */}
            <div
              className="
                absolute
                bottom-0
                left-[20px]
                top-0
                w-px
                bg-gradient-to-b
                from-cyan-500
                via-blue-500
                to-purple-500
                opacity-20
                md:hidden
              "
            />

            <div className="space-y-10 md:space-y-16">
              {timelineData.map((item, index) => {
                const styles = colorStyles[item.color];

                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Desktop layout */}
                    <div
                      className={`
                        hidden
                        md:grid
                        md:grid-cols-[1fr_100px_1fr]
                        md:items-center
                        md:gap-6
                      `}
                    >
                      {/* Left content */}
                      {index % 2 === 0 ? (
                        <TimelineCard
                          item={item}
                          styles={styles}
                          align="right"
                        />
                      ) : (
                        <div />
                      )}

                      {/* Node */}
                      <TimelineNode
                        item={item}
                        styles={styles}
                      />

                      {/* Right content */}
                      {index % 2 !== 0 ? (
                        <TimelineCard
                          item={item}
                          styles={styles}
                          align="left"
                        />
                      ) : (
                        <div />
                      )}
                    </div>

                    {/* Mobile layout */}
                    <div className="relative pl-14 md:hidden">
                      {/* Mobile node */}
                      <div
                        className="
                          absolute
                          left-0
                          top-2
                          z-10
                        "
                      >
                        <div
                          className={`
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-gradient-to-br
                            ${styles.gradient}
                            shadow-lg
                          `}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="text-sm text-white"
                          />
                        </div>
                      </div>

                      <TimelineCard
                        item={item}
                        styles={styles}
                        align="left"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Current role highlight */}
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
              border-cyan-200
              bg-gradient-to-br
              from-cyan-50
              via-white
              to-blue-50
              p-6
              shadow-sm

              dark:border-cyan-400/10
              dark:from-cyan-400/[0.06]
              dark:via-white/[0.025]
              dark:to-blue-400/[0.04]
            "
          >
            <div
              className="
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-cyan-400/10
                blur-3xl
                dark:bg-cyan-400/5
              "
            />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-500
                    text-white
                    shadow-lg
                    shadow-cyan-500/20
                    dark:bg-cyan-400
                    dark:text-slate-950
                  "
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-cyan-600
                      dark:text-cyan-300
                    "
                  >
                    Currently
                  </p>

                  <h3
                    className="
                      mt-1
                      text-lg
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    System Design Associate Trainee
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Trainocate India Pvt. Ltd. · Chennai
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  self-start
                  rounded-full
                  border
                  border-emerald-200
                  bg-emerald-50
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-emerald-700

                  dark:border-emerald-400/20
                  dark:bg-emerald-400/10
                  dark:text-emerald-300

                  sm:self-center
                "
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
                Open to Growth
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              grid
              grid-cols-2
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-sm

              dark:border-white/[0.08]
              dark:bg-white/[0.025]
              dark:backdrop-blur-xl

              sm:grid-cols-4
            "
          >
            {[
              {
                label: 'Professional Start',
                value: '2026',
                icon: faBriefcase,
              },
              {
                label: 'Degree Completed',
                value: 'B.E.',
                icon: faGraduationCap,
              },
              {
                label: 'Tech Experience',
                value: '5+',
                icon: faTrophy,
              },
              {
                label: 'Current Role',
                value: 'SDAT',
                icon: faCheck,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  backgroundColor: 'rgba(34,211,238,0.03)',
                }}
                className="
                  group
                  border-slate-200
                  px-4
                  py-7
                  text-center
                  transition-colors

                  dark:border-white/[0.06]

                  [&:not(:last-child)]:border-r
                  [&:nth-child(-n+2)]:border-b

                  sm:[&:nth-child(-n+2)]:border-b-0
                "
              >
                <div
                  className="
                    mx-auto
                    mb-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-slate-100
                    text-slate-500
                    transition-all
                    duration-300
                    group-hover:bg-cyan-50
                    group-hover:text-cyan-600

                    dark:bg-white/[0.04]
                    dark:text-slate-500
                    dark:group-hover:bg-cyan-400/10
                    dark:group-hover:text-cyan-300
                  "
                >
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="text-sm"
                  />
                </div>

                <p
                  className="
                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-500
                    to-purple-500
                    bg-clip-text
                    text-2xl
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
                    text-[11px]
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
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Timeline Card                                                              */
/* -------------------------------------------------------------------------- */

function TimelineCard({ item, styles, align = 'left' }) {
  return (
    <motion.div
      whileHover={{
        y: -7,
      }}
      className={`
        group
        relative
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
        hover:shadow-slate-200/50

        dark:border-white/[0.08]
        dark:bg-white/[0.035]
        dark:shadow-none
        dark:backdrop-blur-xl
        dark:hover:bg-white/[0.05]

        ${styles.border}
      `}
    >
      {/* Top accent */}
      <div
        className={`
          absolute
          left-0
          right-0
          top-0
          h-[2px]
          bg-gradient-to-r
          ${styles.gradient}
          opacity-70
        `}
      />

      {/* Current badge */}
      {item.isCurrent && (
        <motion.div
          animate={{
            boxShadow: [
              '0 0 0 rgba(34,211,238,0)',
              '0 0 20px rgba(34,211,238,0.15)',
              '0 0 0 rgba(34,211,238,0)',
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="
            mb-4
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-emerald-200
            bg-emerald-50
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-emerald-700

            dark:border-emerald-400/20
            dark:bg-emerald-400/10
            dark:text-emerald-300
          "
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
          Current Role
        </motion.div>
      )}

      {/* Type */}
      <div className="mb-3 flex items-center justify-between gap-3">
        <span
          className={`
            inline-flex
            items-center
            gap-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-slate-400
            dark:text-slate-500
          `}
        >
          <FontAwesomeIcon
            icon={
              item.type === 'work'
                ? faBriefcase
                : faGraduationCap
            }
          />

          {item.type === 'work' ? 'Professional' : 'Education'}
        </span>

        <span
          className="
            text-xs
            font-medium
            text-slate-400
            dark:text-slate-500
          "
        >
          {item.date}
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          text-xl
          font-bold
          tracking-tight
          text-slate-900
          transition-colors
          duration-300
          group-hover:text-cyan-600

          dark:text-white
          dark:group-hover:text-cyan-300
        "
      >
        {item.title}
      </h3>

      {/* Institution */}
      <p
        className="
          mt-1
          text-sm
          font-medium
          text-cyan-600
          dark:text-cyan-400
        "
      >
        {item.institution}
      </p>

      {/* Location / Date */}
      <div
        className="
          mt-4
          flex
          flex-wrap
          items-center
          gap-x-4
          gap-y-2
          text-xs
          text-slate-500
          dark:text-slate-500
        "
      >
        <span className="inline-flex items-center gap-1.5">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-[10px]"
          />

          {item.location}
        </span>

        <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700 sm:block" />

        <span className="inline-flex items-center gap-1.5">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-[10px]"
          />

          {item.date}
        </span>
      </div>

      {/* Description */}
      <p
        className="
          mt-5
          text-sm
          leading-7
          text-slate-600
          dark:text-slate-400
        "
      >
        {item.description}
      </p>

      {/* Achievements */}
      <div className="mt-5 flex flex-wrap gap-2">
        {item.achievements.map((achievement) => (
          <span
            key={achievement}
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              border
              border-slate-200
              bg-slate-50
              px-2.5
              py-1.5
              text-[11px]
              font-medium
              text-slate-600

              dark:border-white/[0.07]
              dark:bg-white/[0.03]
              dark:text-slate-400
            "
          >
            <span
              className={`
                h-1.5
                w-1.5
                rounded-full
                ${styles.dot}
              `}
            />

            {achievement}
          </span>
        ))}
      </div>

      {/* Hover glow */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-48
          w-48
          rounded-full
          ${styles.glow}
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        `}
      />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Timeline Node                                                              */
/* -------------------------------------------------------------------------- */

function TimelineNode({ item, styles }) {
  return (
    <div className="relative z-10 flex justify-center">
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        className="relative"
      >
        {/* Outer ring */}
        <div
          className="
            absolute
            -inset-3
            rounded-full
            border
            border-slate-200
            dark:border-white/[0.08]
          "
        />

        {/* Animated ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={`
            absolute
            -inset-2
            rounded-full
            border
            border-transparent
            border-t-cyan-500
            border-r-blue-500
            dark:border-t-cyan-400
            dark:border-r-blue-400
          `}
        />

        {/* Main node */}
        <div
          className={`
            relative
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            ${styles.gradient}
            shadow-xl
          `}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="relative z-10 text-2xl text-white"
          />

          {/* Pulse */}
          {item.isCurrent && (
            <motion.div
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.35, 0, 0.35],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
              }}
              className={`
                absolute
                inset-0
                rounded-full
                bg-gradient-to-br
                ${styles.gradient}
              `}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}