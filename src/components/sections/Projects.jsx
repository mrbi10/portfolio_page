import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section, Card, AnimatedHeading, GradientText } from '../ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: 'MNMJEC ERP Platform',
        description: 'Comprehensive ERP system for educational institutions with role-based access control, student management, and analytics dashboard.',
        category: 'Full Stack',
        tech: ['React', 'Node.js', 'MySQL', 'AWS'],
        rating: 5,
        featured: true,
        internal: true,
        link: '/mnmjec-erp',
    },
    {
        id: 2,
        title: 'Student Verification Portal',
        description: 'Secure portal for verifying student credentials with blockchain integration and automated approval workflows.',
        category: 'Full Stack',
        tech: ['React', 'Node.js', 'Blockchain', 'MongoDB'],
        rating: 4.8,
        featured: true,
    },
    {
        id: 3,
        title: 'Attendance Management API',
        description: 'REST API with biometric integration for automated attendance tracking and real-time reporting.',
        category: 'Backend',
        tech: ['Node.js', 'Express', 'MySQL', 'Docker'],
        rating: 4.7,
    },
    {
        id: 4,
        title: 'Fake News Detector ML',
        description: 'Machine learning model for detecting misinformation with NLP and TF-IDF algorithms achieving 92% accuracy.',
        category: 'AI/ML',
        tech: ['Python', 'TensorFlow', 'NLP', 'Scikit-learn'],
        rating: 4.9,
        featured: true,
    },
    {
        id: 5,
        title: 'CGPA Calculator',
        description: 'Interactive tool for calculating academic performance with semester breakdown and future projections.',
        category: 'Frontend',
        tech: ['React', 'JavaScript', 'Tailwind CSS'],
        rating: 4.6,
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

export function Projects() {
    return (
        <Section id="projects" className="dark:bg-dark-navy bg-white">
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
                            Featured <GradientText>Projects</GradientText>
                        </AnimatedHeading>
                        <p className="dark:text-text-muted text-gray-600 max-w-2xl mx-auto text-lg">
                            Crafted solutions showcasing full-stack expertise and creative problem-solving
                        </p>
                    </motion.div>

                    {/* Projects grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className={project.featured ? 'md:col-span-full lg:col-span-1' : ''}
                            >
                                <motion.div
                                    whileHover={{ y: -12, boxShadow: '0 0 40px rgba(0, 188, 212, 0.3)' }}
                                    className="glass-card space-y-4 h-full relative overflow-hidden group"
                                >
                                    {/* Featured badge */}
                                    {project.featured && (
                                        <motion.div
                                            initial={{ rotate: -45, y: -100 }}
                                            animate={{ rotate: -45, y: 0 }}
                                            className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-neon-cyan to-neon-blue flex items-center justify-center text-white text-xs font-bold opacity-80"
                                        >
                                            FEATURED
                                        </motion.div>
                                    )}

                                    {/* Content */}
                                    <div className="space-y-3">
                                        {/* Header with rating */}
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-neon-cyan group-hover:text-neon-blue transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm dark:text-text-muted text-gray-600 mt-1">
                                                    {project.category}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-1 dark:bg-dark-card bg-gray-100 px-3 py-1 rounded-full">
                                                <FontAwesomeIcon icon={faStar} className="text-accent-green text-xs" />
                                                <span className="text-sm font-semibold">{project.rating}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="dark:text-text-light text-gray-700 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-2 pt-3">
                                            {project.tech.map((tech, j) => (
                                                <motion.span
                                                    key={j}
                                                    whileHover={{ scale: 1.1 }}
                                                    className="px-3 py-1 dark:bg-dark-card bg-gray-100 text-neon-cyan text-xs font-semibold rounded-full border border-neon-cyan border-opacity-20"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3 pt-4 border-t dark:border-dark-border border-gray-200">
                                            {project.internal ? (
                                                <Link
                                                    to={project.link}
                                                    className="flex-1 px-4 py-2 rounded-lg dark:bg-neon-cyan bg-neon-cyan text-dark-navy font-semibold text-center hover:shadow-glow-lg transition-all"
                                                >
                                                    View Project
                                                </Link>
                                            ) : (
                                                <button className="flex-1 px-4 py-2 rounded-lg dark:bg-neon-cyan bg-neon-cyan text-dark-navy font-semibold hover:shadow-glow-lg transition-all">
                                                    View Project
                                                </button>
                                            )}
                                            <button className="px-4 py-2 rounded-lg dark:border-neon-cyan border border-neon-cyan dark:text-neon-cyan text-neon-cyan hover:dark:bg-neon-cyan hover:dark:text-dark-navy transition-all">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Spotlight effect on hover */}
                                    <motion.div
                                        className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-neon-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 blur-3xl pointer-events-none"
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
