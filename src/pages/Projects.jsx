import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section, AnimatedHeading, GradientText } from '../components/ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExternalLinkAlt,
    faStar,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: 'MNMJEC ERP Platform',
        description:
            'Comprehensive ERP system for educational institutions with role-based access control, student management, analytics, and centralized administration.',
        category: 'Full Stack',
        tech: ['React', 'Node.js', 'MySQL', 'AWS'],
        rating: 5,
        featured: true,
        internal: true,
        link: '/mnmjec-erp',
        github: null,
    },
    {
        id: 2,
        title: 'Student Verification Portal',
        description:
            'digital portal for verifying student data with integration with google sheets as backend.',
        category: 'Full Stack',
        tech: ['React', 'Node.js', 'Blockchain', 'MongoDB'],
        rating: 4.8,
        featured: true,
        link: "https://mrbi10.github.io/student-verify/",
        github: "https://github.com/mrbi10/student-verify",
    },
    {
        id: 3,
        title: 'Attendance Management API',
        description:
            'REST API with biometric integration for automated attendance tracking, secure data processing, and real-time reporting.',
        category: 'Backend',
        tech: ['Node.js', 'Express', 'MySQL', 'Docker'],
        rating: 4.7,
        github: null,
    },
    {
        id: 4,
        title: 'Fake News Detector ML',
        description:
            'Machine learning system for identifying misinformation using NLP and TF-IDF techniques with a reported 92% accuracy.',
        category: 'AI / ML',
        tech: ['Python', 'TensorFlow', 'NLP', 'Scikit-learn'],
        rating: 4.9,
        featured: true,
        github: 'https://github.com/mrbi10/reddit-fake-news-detector',
    },
    {
        id: 5,
        title: 'CGPA Calculator',
        description:
            'Interactive academic utility for calculating CGPA, reviewing semester performance, and projecting future academic results.',
        category: 'Frontend',
        tech: ['React', 'JavaScript', 'Tailwind CSS'],
        rating: 4.6,
        link: "https://mrbi10.github.io/cgpa-calculator/",
        github: "https://github.com/mrbi10/cgpa-calculator",
    },
];

const categoryStyles = {
    'Full Stack': {
        light:
            'bg-cyan-50 text-cyan-700 border-cyan-200',
        dark:
            'dark:bg-cyan-400/10 dark:text-cyan-300 dark:border-cyan-400/20',
        accent:
            'from-cyan-500 to-blue-500',
    },

    Backend: {
        light:
            'bg-blue-50 text-blue-700 border-blue-200',
        dark:
            'dark:bg-blue-400/10 dark:text-blue-300 dark:border-blue-400/20',
        accent:
            'from-blue-500 to-indigo-500',
    },

    'AI / ML': {
        light:
            'bg-purple-50 text-purple-700 border-purple-200',
        dark:
            'dark:bg-purple-400/10 dark:text-purple-300 dark:border-purple-400/20',
        accent:
            'from-purple-500 to-pink-500',
    },

    Frontend: {
        light:
            'bg-emerald-50 text-emerald-700 border-emerald-200',
        dark:
            'dark:bg-emerald-400/10 dark:text-emerald-300 dark:border-emerald-400/20',
        accent:
            'from-emerald-500 to-cyan-500',
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
        y: 30,
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

export function Projects() {
    return (
        <Section
            id="projects"
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

                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.055)_1px,transparent_0)]
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
                        {/* Badge */}
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

                            Selected Work
                        </motion.div>

                        <AnimatedHeading level="h2">
                            Featured <GradientText>Projects</GradientText>
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
                            A collection of projects focused on scalable
                            architecture, polished interfaces, automation,
                            and real-world problem solving.
                        </p>
                    </motion.div>

                    {/* Projects */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.08,
                        }}
                        className="
                            grid
                            gap-6
                            md:grid-cols-2
                        "
                    >
                        {projects.map((project, index) => {
                            const category =
                                categoryStyles[project.category] ||
                                categoryStyles['Full Stack'];

                            return (
                                <motion.article
                                    key={project.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -8 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 22,
                                    }}
                                    className={`
                                        group
                                        relative
                                        ${project.featured
                                            ? 'md:col-span-1'
                                            : ''
                                        }
                                    `}
                                >
                                    {/* Hover glow */}
                                    <div
                                        className={`
                                            pointer-events-none
                                            absolute
                                            -inset-1
                                            rounded-[1.6rem]
                                            bg-gradient-to-r
                                            ${category.accent}
                                            opacity-0
                                            blur-xl
                                            transition-opacity
                                            duration-500
                                            group-hover:opacity-15
                                            dark:group-hover:opacity-20
                                        `}
                                    />

                                    {/* Card */}
                                    <div
                                        className="
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
                                        "
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
                                                ${category.accent}
                                                opacity-60
                                            `}
                                        />


                                        {/* Category + rating */}
                                        <div
                                            className="
                                                mb-4
                                                flex
                                                items-center
                                                justify-between
                                                gap-3
                                            "
                                        >
                                            <span
                                                className={`
                                                    inline-flex
                                                    rounded-full
                                                    border
                                                    px-3
                                                    py-1
                                                    text-[11px]
                                                    font-semibold
                                                    ${category.light}
                                                    ${category.dark}
                                                `}
                                            >
                                                {project.category}
                                            </span>

                                            <div
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-1.5
                                                    rounded-full
                                                    border
                                                    border-slate-200
                                                    bg-slate-50
                                                    px-2.5
                                                    py-1

                                                    dark:border-white/[0.07]
                                                    dark:bg-white/[0.03]
                                                "
                                            >
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="
                                                        text-[10px]
                                                        text-amber-500
                                                    "
                                                />

                                                <span
                                                    className="
                                                        text-xs
                                                        font-semibold
                                                        text-slate-700
                                                        dark:text-slate-300
                                                    "
                                                >
                                                    {project.rating}
                                                </span>
                                            </div>
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
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="
                                                mt-3
                                                min-h-[84px]
                                                text-sm
                                                leading-7
                                                text-slate-600
                                                dark:text-slate-400
                                            "
                                        >
                                            {project.description}
                                        </p>

                                        {/* Divider */}
                                        <div
                                            className="
                                                my-5
                                                h-px
                                                bg-slate-100
                                                dark:bg-white/[0.07]
                                            "
                                        />

                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <motion.span
                                                    key={tech}
                                                    whileHover={{
                                                        scale: 1.05,
                                                    }}
                                                    className="
                                                        rounded-lg
                                                        border
                                                        border-slate-200
                                                        bg-slate-50
                                                        px-2.5
                                                        py-1.5
                                                        text-[11px]
                                                        font-medium
                                                        text-slate-600
                                                        transition-colors

                                                        hover:border-cyan-300
                                                        hover:text-cyan-600

                                                        dark:border-white/[0.07]
                                                        dark:bg-white/[0.03]
                                                        dark:text-slate-400
                                                        dark:hover:border-cyan-400/20
                                                        dark:hover:text-cyan-300
                                                    "
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Actions */}
                                        <div
                                            className="
                                                mt-6
                                                flex
                                                gap-3
                                                border-t
                                                border-slate-100
                                                pt-5

                                                dark:border-white/[0.07]
                                            "
                                        >
                                            {project.link && (
                                                <Link
                                                    to={project.link}
                                                    className="
            group/button
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-slate-900
            px-4
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-cyan-600
            hover:shadow-lg
            hover:shadow-cyan-500/20
            dark:bg-cyan-400
            dark:text-slate-950
            dark:hover:bg-cyan-300
            dark:hover:shadow-cyan-400/20
        "
                                                >
                                                    View Project

                                                    <FontAwesomeIcon
                                                        icon={project.internal ? faArrowRight : faExternalLinkAlt}
                                                        className="
                text-xs
                transition-transform
                duration-300
                group-hover/button:translate-x-1
            "
                                                    />
                                                </Link>
                                            )}

                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`View ${project.title} on GitHub`}
                                                    className="
                                                        flex
                                                        h-11
                                                        w-11
                                                        items-center
                                                        justify-center
                                                        rounded-xl
                                                        border
                                                        border-slate-200
                                                        bg-white
                                                        text-slate-600
                                                        transition-all
                                                        duration-300
                                                        hover:border-slate-900
                                                        hover:bg-slate-900
                                                        hover:text-white

                                                        dark:border-white/[0.08]
                                                        dark:bg-white/[0.03]
                                                        dark:text-slate-400
                                                        dark:hover:border-white/20
                                                        dark:hover:bg-white/10
                                                        dark:hover:text-white
                                                    "
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faGithub}
                                                    />
                                                </a>
                                            )}
                                        </div>

                                        {/* Spotlight */}
                                        <motion.div
                                            className="
                                                pointer-events-none
                                                absolute
                                                -right-32
                                                -top-32
                                                h-64
                                                w-64
                                                rounded-full
                                                bg-cyan-400/10
                                                opacity-0
                                                blur-3xl
                                                transition-opacity
                                                duration-500
                                                group-hover:opacity-100
                                                dark:bg-cyan-400/5
                                            "
                                        />
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-3
                            pt-2
                            text-center
                        "
                    >
                        <p
                            className="
                                text-sm
                                text-slate-500
                                dark:text-slate-500
                            "
                        >
                            More projects, experiments, and ideas are always
                            in progress.
                        </p>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                font-medium
                                text-cyan-600
                                dark:text-cyan-400
                            "
                        >
                            <span>Building what's next</span>

                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}
                            >
                                →
                            </motion.span>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}