import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Container,
  Section,
  AnimatedHeading,
  GradientText,
} from '../components/ui/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faAward,
  faCertificate,
  faCode,
  faUsers,
  faPalette,
  faMicrophone,
  faGraduationCap,
  faTrophy,
  faLaptopCode,
  faLeaf,
  faBuilding,
  faChalkboardTeacher,
  faArrowUpRightFromSquare,
  faChevronDown,
  faStar,
  faIndianRupeeSign,
} from '@fortawesome/free-solid-svg-icons';

const achievements = [
  {
    id: 1,
    category: 'Recognition',
    featured: true,
    title: 'Prototype Delivery Reward',
    organization: 'Finari',
    date: '2026',
    description:
      'Received an appreciation reward of ₹12,000 from Finari Managing Director Haritha Balaji for outstanding dedication and proactive contribution to a prototype solution that met demanding quality and defect standards.',
    icon: faIndianRupeeSign,
    color: 'amber',
    link: 'https://drive.google.com/file/d/18DtYMpMJgaO1Mn0G5_ckgOowHEu7vtOh/view?usp=drive_web',
    tags: ['Recognition', 'Prototype', 'Client Appreciation'],
  },

  {
    id: 2,
    category: 'Leadership',
    featured: true,
    title: 'Secretary — ACE 2025–26',
    organization: 'Association of Computer Engineers',
    date: '2025–26',
    description:
      'Served as Secretary for ACE, organizing and conducting the department symposium while contributing to academic and technical activities for second- and third-year students.',
    icon: faUsers,
    color: 'cyan',
    link: 'https://drive.google.com/file/d/10JH0P0dW0ayoldSyVd0s1UANmzJUEYy-/view?usp=drive_web',
    tags: ['Leadership', 'Event Management', 'ACE'],
  },

  {
    id: 3,
    category: 'Leadership',
    featured: true,
    title: 'Creative Team Head — Rotaract',
    organization: 'Rotaract Club of MNM Jain Engineering College',
    date: '3 Years',
    description:
      'Led creative and promotional initiatives for three years and contributed to major events including Inaivom, Glitz, Shalom and Madras Fantasy League.',
    icon: faPalette,
    color: 'purple',
    link: 'https://drive.google.com/file/d/1M57Rf-50BR3QapdjTheaIZXjsN6bKOwZ/view?usp=drive_web',
    tags: ['Creative Leadership', 'Branding', 'Design'],
  },

  {
    id: 4,
    category: 'Speaking',
    featured: true,
    title: 'Technical Speaker — Promptopia',
    organization: 'Demystifying AI Tools',
    date: '2024',
    description:
      'Selected as a technical speaker for Promptopia Phase 1, delivering a session on AI tools and Stable Diffusion to fellow students.',
    icon: faMicrophone,
    color: 'blue',
    link: 'https://drive.google.com/file/d/1k_Ft_a16zbnSG3zl6rcbXMIVJYYLHa9I/view?usp=drive_web',
    tags: ['AI', 'Stable Diffusion', 'Public Speaking'],
  },

  {
    id: 5,
    category: 'Certification',
    title: 'Data Analytics with Python',
    organization: 'NPTEL',
    date: '2025',
    description:
      'Successfully completed the 12-week advanced NPTEL course focused on data analytics using Python.',
    icon: faCertificate,
    color: 'emerald',
    link: 'https://drive.google.com/file/d/1lcTXwrj2I8YtVPttOwdIcPUzuaVeP6Z7/view?usp=drive_web',
    tags: ['Python', 'Data Analytics', 'NPTEL'],
  },

  {
    id: 6,
    category: 'Certification',
    title: 'Data Fundamentals',
    organization: 'IBM SkillsBuild',
    date: '2025',
    description:
      'Earned a professional certification credential covering foundational data concepts and analytical thinking.',
    icon: faCertificate,
    color: 'indigo',
    link: 'https://drive.google.com/file/d/1FWGacJ-rDwtM44ZtGdrflmMhF51KRTi_/view?usp=drive_web',
    tags: ['Data', 'IBM', 'Analytics'],
  },

  {
    id: 7,
    category: 'Leadership',
    title: 'Branding Committee Lead',
    organization: 'Rotaract Club',
    date: '2023–24',
    description:
      'Appointed as Branding Committee Lead and contributed to the club’s visual identity, promotional campaigns and creative communication.',
    icon: faPalette,
    color: 'pink',
    link: 'https://drive.google.com/file/d/1LGr5ltzuHT1D8nTtS9UoZqCYNsnXyYpw/view?usp=drive_web',
    tags: ['Branding', 'Design', 'Leadership'],
  },

  {
    id: 8,
    category: 'Leadership',
    title: 'Co-Chairperson — Madras Fantasy League',
    organization: 'Regional Rotaract Event',
    date: '2024',
    description:
      'Served as Co-Chairperson for Madras Fantasy League Version 2.0 Reloaded, a regional event involving multiple Rotaract clubs.',
    icon: faTrophy,
    color: 'orange',
    link: 'https://drive.google.com/file/d/1nqNQ0ZPzw4Ny-dB1lC_TYD19kCTeH8C6/view?usp=drive_web',
    tags: ['Event Leadership', 'Coordination', 'Rotaract'],
  },

  {
    id: 9,
    category: 'Technical',
    title: '30-Day Full Stack Training',
    organization: 'Peer Learning Initiative',
    date: '2025',
    description:
      'Designed and conducted a 30-day Full Stack Development training program for juniors through both in-person and online sessions.',
    icon: faChalkboardTeacher,
    color: 'cyan',
    tags: ['React', 'Node.js', 'Full Stack', 'Mentoring'],
  },

  {
    id: 10,
    category: 'Technical',
    title: 'College ERP System',
    organization: 'MNMJEC',
    date: '2025–26',
    description:
      'Developed a complete college ERP platform covering administration, attendance, feedback, mess management and security logs.',
    icon: faBuilding,
    color: 'blue',
    tags: ['React', 'Node.js', 'MySQL', 'AWS', 'ERP'],
  },

  {
    id: 11,
    category: 'Technical',
    title: 'Placement Training Module',
    organization: 'MNMJEC',
    date: '2025–26',
    description:
      'Built an online placement training module enabling students to take assessments and prepare for recruitment processes.',
    icon: faLaptopCode,
    color: 'purple',
    tags: ['Online Tests', 'Full Stack', 'Education'],
  },

  {
    id: 12,
    category: 'Achievement',
    title: 'VIT Hackathon — Semi-Finalist',
    organization: 'VIT Chennai',
    date: '2024',
    description:
      'Participated in the VØID:v1 hackathon at VIT Chennai and progressed to the semi-final round.',
    icon: faTrophy,
    color: 'orange',
    link: 'https://drive.google.com/file/d/1w8mD01khmXpWry6CbWkDbI-ERSB9ZATs/view?usp=drive_web',
    tags: ['Hackathon', 'Problem Solving', 'VIT Chennai'],
  },

  {
    id: 13,
    category: 'Leadership',
    title: 'National Science Day Organizer',
    organization: 'MNMJEC',
    date: '2025',
    description:
      'Contributed to organizing departmental events for National Science Day and received a Certificate of Appreciation for dedicated efforts.',
    icon: faGraduationCap,
    color: 'emerald',
    link: 'https://drive.google.com/file/d/1Gp5fmPNhbeNWuf8vHQJ-J3dUulSxnIj2/view?usp=drive_web',
    tags: ['Event Management', 'Science', 'Organization'],
  },
];

const categories = [
  'All',
  'Recognition',
  'Leadership',
  'Technical',
  'Speaking',
  'Certification',
  'Achievement',
];

const colorStyles = {
  cyan: {
    icon: 'from-cyan-500 to-blue-500',
    soft:
      'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-400/10 dark:text-cyan-300 dark:border-cyan-400/20',
    glow: 'bg-cyan-400/20 dark:bg-cyan-400/10',
  },

  blue: {
    icon: 'from-blue-500 to-indigo-500',
    soft:
      'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-400/10 dark:text-blue-300 dark:border-blue-400/20',
    glow: 'bg-blue-400/20 dark:bg-blue-400/10',
  },

  purple: {
    icon: 'from-purple-500 to-pink-500',
    soft:
      'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-400/10 dark:text-purple-300 dark:border-purple-400/20',
    glow: 'bg-purple-400/20 dark:bg-purple-400/10',
  },

  pink: {
    icon: 'from-pink-500 to-rose-500',
    soft:
      'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-400/10 dark:text-pink-300 dark:border-pink-400/20',
    glow: 'bg-pink-400/20 dark:bg-pink-400/10',
  },

  emerald: {
    icon: 'from-emerald-500 to-cyan-500',
    soft:
      'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-300 dark:border-emerald-400/20',
    glow: 'bg-emerald-400/20 dark:bg-emerald-400/10',
  },

  indigo: {
    icon: 'from-indigo-500 to-purple-500',
    soft:
      'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-400/10 dark:text-indigo-300 dark:border-indigo-400/20',
    glow: 'bg-indigo-400/20 dark:bg-indigo-400/10',
  },

  amber: {
    icon: 'from-amber-400 to-orange-500',
    soft:
      'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-400/20',
    glow: 'bg-amber-400/20 dark:bg-amber-400/10',
  },

  orange: {
    icon: 'from-orange-500 to-red-500',
    soft:
      'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-400/10 dark:text-orange-300 dark:border-orange-400/20',
    glow: 'bg-orange-400/20 dark:bg-orange-400/10',
  },
};

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
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Achievements() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const filteredAchievements =
    activeCategory === 'All'
      ? achievements
      : achievements.filter(
          (item) => item.category === activeCategory
        );

  const featuredAchievements = achievements.filter(
    (item) => item.featured
  );

  return (
    <Section
      id="achievements"
      className="
        relative
        overflow-hidden
        bg-slate-50
        dark:bg-[#050b18]
      "
    >
      {/* Background */}
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
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-amber-500/20
                bg-amber-500/5
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-amber-600
                dark:border-amber-400/20
                dark:bg-amber-400/5
                dark:text-amber-300
              "
            >
              <FontAwesomeIcon icon={faAward} />
              Beyond the Resume
            </div>

            <AnimatedHeading level="h2">
              Achievements &amp;{' '}
              <GradientText>Recognition</GradientText>
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
              A collection of leadership roles, technical contributions,
              certifications, speaking engagements and milestones from my
              academic and professional journey.
            </p>
          </motion.div>

          {/* Featured achievements */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/[0.08]" />

              <span
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-slate-500
                  dark:text-slate-500
                "
              >
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-amber-500"
                />
                Highlights
              </span>

              <div className="h-px flex-1 bg-slate-200 dark:bg-white/[0.08]" />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >
              {featuredAchievements.map((achievement) => (
                <FeaturedCard
                  key={achievement.id}
                  achievement={achievement}
                  onClick={() =>
                    setSelectedAchievement(achievement.id)
                  }
                />
              ))}
            </motion.div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <motion.button
                  key={category}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    rounded-full
                    border
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          border-cyan-500
                          bg-cyan-500
                          text-white
                          shadow-lg
                          shadow-cyan-500/20
                          dark:border-cyan-400
                          dark:bg-cyan-400
                          dark:text-slate-950
                        `
                        : `
                          border-slate-200
                          bg-white
                          text-slate-600
                          hover:border-cyan-300
                          hover:text-cyan-600

                          dark:border-white/[0.08]
                          dark:bg-white/[0.025]
                          dark:text-slate-400
                          dark:hover:border-cyan-400/30
                          dark:hover:text-cyan-300
                        `
                    }
                  `}
                >
                  {category}
                </motion.button>
              );
            })}
          </div>

          {/* Achievement grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredAchievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  onClick={() =>
                    setSelectedAchievement(achievement.id)
                  }
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

              sm:grid-cols-4
            "
          >
            {[
              {
                value: '13+',
                label: 'Major Milestones',
              },
              {
                value: '3+',
                label: 'Leadership Roles',
              },
              {
                value: '₹12K',
                label: 'Recognition Reward',
              },
              {
                value: '3 Yrs',
                label: 'Rotaract Leadership',
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="
                  border-slate-200
                  px-5
                  py-7
                  text-center

                  dark:border-white/[0.06]

                  [&:not(:last-child)]:border-r
                  [&:nth-child(-n+2)]:border-b

                  sm:[&:nth-child(-n+2)]:border-b-0
                "
              >
                <p
                  className="
                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-500
                    to-purple-500
                    bg-clip-text
                    text-2xl
                    font-extrabold
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
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <AchievementModal
            achievement={achievements.find(
              (item) => item.id === selectedAchievement
            )}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Featured Card                                                              */
/* -------------------------------------------------------------------------- */

function FeaturedCard({ achievement, onClick }) {
  const styles = colorStyles[achievement.color];

  return (
    <motion.button
      variants={itemVariants}
      whileHover={{
        y: -8,
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        text-left
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
        hover:shadow-slate-200/50

        dark:border-white/[0.08]
        dark:bg-white/[0.035]
        dark:shadow-none
        dark:hover:bg-white/[0.05]
      "
    >
      <div
        className={`
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          ${styles.glow}
          blur-3xl
        `}
      />

      <div
        className={`
          relative
          mb-4
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          ${styles.icon}
          shadow-lg
        `}
      >
        <FontAwesomeIcon
          icon={achievement.icon}
          className="text-lg text-white"
        />
      </div>

      <p
        className={`
          mb-2
          text-[10px]
          font-bold
          uppercase
          tracking-[0.15em]
          ${styles.soft.split(' ')[1]}
        `}
      >
        {achievement.category}
      </p>

      <h3
        className="
          text-base
          font-bold
          leading-snug
          text-slate-900
          dark:text-white
        "
      >
        {achievement.title}
      </h3>

      <p
        className="
          mt-1
          text-xs
          text-slate-500
          dark:text-slate-500
        "
      >
        {achievement.organization}
      </p>

      {achievement.id === 1 && (
        <div
          className="
            mt-4
            inline-flex
            items-center
            gap-1.5
            rounded-full
            bg-amber-50
            px-2.5
            py-1
            text-[10px]
            font-bold
            text-amber-700
            dark:bg-amber-400/10
            dark:text-amber-300
          "
        >
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          ₹12,000 Award
        </div>
      )}
    </motion.button>
  );
}

/* -------------------------------------------------------------------------- */
/* Achievement Card                                                           */
/* -------------------------------------------------------------------------- */

function AchievementCard({ achievement, onClick }) {
  const styles = colorStyles[achievement.color];

  return (
    <motion.div
      variants={itemVariants}
      layout
      className="h-full"
    >
      <motion.div
        whileHover={{
          y: -7,
        }}
        onClick={onClick}
        className="
          group
          relative
          flex
          h-full
          cursor-pointer
          flex-col
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
          dark:hover:bg-white/[0.05]
        "
      >
        {/* Top gradient */}
        <div
          className={`
            absolute
            left-0
            right-0
            top-0
            h-[2px]
            bg-gradient-to-r
            ${styles.icon}
            opacity-60
          `}
        />

        {/* Icon */}
        <div className="flex items-start justify-between">
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 4,
            }}
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              ${styles.icon}
              shadow-lg
            `}
          >
            <FontAwesomeIcon
              icon={achievement.icon}
              className="text-lg text-white"
            />
          </motion.div>

          <span
            className="
              rounded-full
              border
              border-slate-200
              bg-slate-50
              px-2.5
              py-1
              text-[10px]
              font-semibold
              text-slate-500

              dark:border-white/[0.07]
              dark:bg-white/[0.03]
              dark:text-slate-500
            "
          >
            {achievement.date}
          </span>
        </div>

        {/* Category */}
        <div className="mt-5">
          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-cyan-600
              dark:text-cyan-400
            "
          >
            {achievement.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            mt-2
            text-lg
            font-bold
            leading-snug
            text-slate-900
            transition-colors
            group-hover:text-cyan-600

            dark:text-white
            dark:group-hover:text-cyan-300
          "
        >
          {achievement.title}
        </h3>

        {/* Organization */}
        <p
          className="
            mt-1
            text-sm
            font-medium
            text-slate-500
            dark:text-slate-500
          "
        >
          {achievement.organization}
        </p>

        {/* Description */}
        <p
          className="
            mt-4
            flex-1
            text-sm
            leading-6
            text-slate-600
            dark:text-slate-400
          "
        >
          {achievement.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {achievement.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="
                rounded-lg
                border
                border-slate-200
                bg-slate-50
                px-2.5
                py-1.5
                text-[10px]
                font-medium
                text-slate-600

                dark:border-white/[0.07]
                dark:bg-white/[0.03]
                dark:text-slate-400
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View indicator */}
        <div
          className="
            mt-5
            flex
            items-center
            gap-2
            border-t
            border-slate-100
            pt-4
            text-xs
            font-semibold
            text-slate-400
            transition-colors
            group-hover:text-cyan-600

            dark:border-white/[0.06]
            dark:group-hover:text-cyan-300
          "
        >
          View details

          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-[10px]"
          />
        </div>

        {/* Glow */}
        <div
          className={`
            pointer-events-none
            absolute
            -bottom-20
            -right-20
            h-40
            w-40
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
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Modal                                                                      */
/* -------------------------------------------------------------------------- */

function AchievementModal({ achievement, onClose }) {
  if (!achievement) return null;

  const styles = colorStyles[achievement.color];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-slate-950/60
        p-4
        backdrop-blur-md
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 25,
          scale: 0.96,
        }}
        transition={{
          duration: 0.3,
        }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-lg
          overflow-y-auto
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-7
          shadow-2xl

          dark:border-white/[0.1]
          dark:bg-[#0a1222]
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-slate-50
            text-slate-500
            transition-colors
            hover:bg-slate-100

            dark:border-white/[0.08]
            dark:bg-white/[0.04]
            dark:text-slate-400
            dark:hover:bg-white/[0.08]
          "
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faChevronDown} className="rotate-45" />
        </button>

        {/* Icon */}
        <div
          className={`
            mb-5
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${styles.icon}
            shadow-xl
          `}
        >
          <FontAwesomeIcon
            icon={achievement.icon}
            className="text-2xl text-white"
          />
        </div>

        {/* Category */}
        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-cyan-600
            dark:text-cyan-400
          "
        >
          {achievement.category}
        </p>

        {/* Title */}
        <h3
          className="
            mt-2
            pr-10
            text-2xl
            font-extrabold
            tracking-tight
            text-slate-900
            dark:text-white
          "
        >
          {achievement.title}
        </h3>

        <p
          className="
            mt-1
            text-sm
            font-medium
            text-slate-500
            dark:text-slate-400
          "
        >
          {achievement.organization} · {achievement.date}
        </p>

        {/* Description */}
        <p
          className="
            mt-6
            text-sm
            leading-7
            text-slate-600
            dark:text-slate-400
          "
        >
          {achievement.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {achievement.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-lg
                border
                border-slate-200
                bg-slate-50
                px-3
                py-1.5
                text-xs
                font-medium
                text-slate-600

                dark:border-white/[0.07]
                dark:bg-white/[0.03]
                dark:text-slate-400
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Certificate / proof */}
        {achievement.link && (
          <a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-7
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-cyan-500
              px-5
              py-3
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-cyan-500/20
              transition-all
              hover:-translate-y-0.5
              hover:bg-cyan-600

              dark:bg-cyan-400
              dark:text-slate-950
              dark:hover:bg-cyan-300
            "
          >
            View Certificate / Proof
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-xs"
            />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}