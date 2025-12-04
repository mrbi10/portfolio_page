import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Code, Lightbulb, Zap, User, Briefcase, GraduationCap, Mail, Github, Linkedin, Twitter, ArrowRight, X, Menu } from 'lucide-react';

// --- 0. CONSTANTS & DATA ---

// General Configuration
const PRIMARY_COLOR = 'indigo-500';
const SECONDARY_COLOR = 'indigo-600';
const BG_COLOR = 'gray-900';
const TEXT_COLOR = 'gray-50';

// Hero Section Texts
const rotatingTexts = [
  "Full-Stack Developer",
  "React & Tailwind Enthusiast",
  "Lover of Clean Code",
  "Built in Chennai",
  "Open Source Contributor"
];

// Tech Stack Data
const techData = [
    { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
    { name: 'Next.js', icon: 'fas fa-arrow-right-to-bracket', color: 'text-gray-300' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
    { name: 'Python', icon: 'fab fa-python', color: 'text-yellow-400' },
    { name: 'Tailwind CSS', icon: 'fab fa-css3-alt', color: 'text-cyan-500' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-blue-700' },
    { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-500' },
    { name: 'AWS', icon: 'fab fa-aws', color: 'text-orange-500' },
    { name: 'TypeScript', icon: 'fas fa-file-code', color: 'text-blue-600' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-600' },
];

// Project Data
const projectsData = [
    { title: "E-commerce Platform", description: "A scalable full-stack e-commerce site with integrated payment gateways and user authentication.", tags: ["React", "Node.js", "MongoDB", "Stripe"], link: "#", image: "https://placehold.co/800x600/1e293b/d1d5db?text=E-commerce+Platform" },
    { title: "Real-time Chat App", description: "Built with WebSockets for instant messaging, group chats, and online status tracking.", tags: ["React", "Express", "Socket.io"], link: "#", image: "https://placehold.co/800x600/1e293b/d1d5db?text=Chat+App" },
    { title: "Dev Portfolio Generator", description: "A command-line tool to generate static portfolio websites from a JSON configuration file.", tags: ["Python", "Jinja2", "CLI"], link: "#", image: "https://placehold.co/800x600/1e293b/d1d5db?text=CLI+Tool" },
    { title: "Task Management API", description: "A robust REST API for managing tasks, users, and projects, secured with JWT.", tags: ["Node.js", "PostgreSQL", "JWT", "REST"], link: "#", image: "https://placehold.co/800x600/1e293b/d1d5db?text=Task+API" },
];

// Timeline Data
const timelineData = [
    { type: 'work', icon: Briefcase, title: "Software Engineer I", company: "Innovative Tech Solutions", date: "2023 - Present", description: "Developing and maintaining core features for the flagship SaaS product using React and Node.js. Optimized database queries resulting in a 30% latency reduction." },
    { type: 'education', icon: GraduationCap, title: "M.S. in Computer Science", company: "University of Madras", date: "2021 - 2023", description: "Specialized in Distributed Systems and Cloud Computing. Thesis on 'Optimizing Container Orchestration in Edge Devices'." },
    { type: 'work', icon: Briefcase, title: "Junior Developer", company: "Local Startup Agency", date: "2020 - 2021", description: "Contributed to various client projects, focusing primarily on front-end development and UI implementation with Vue.js." },
    { type: 'education', icon: GraduationCap, title: "B.E. in Information Technology", company: "Anna University", date: "2017 - 2021", description: "Graduated with First Class Honours. Completed capstone project on Machine Learning model deployment." },
];

// Achievement Data
const achievementsData = [
    "Published 5 technical articles on Medium, reaching over 10,000 readers.",
    "Recognized with 'Innovator of the Quarter' award for developing a new internal tooling system.",
    "Contributor to 3 popular open-source repositories on GitHub (React-related).",
    "Successfully mentored 4 junior developers in best practices for modern web development.",
    "Certified AWS Solutions Architect – Associate.",
];

// Navigation Links
const navLinks = [
    { name: "About", id: "about", icon: User },
    { name: "Experience", id: "timeline", icon: Briefcase },
    { name: "Projects", id: "projects", icon: Code },
    { name: "Skills", id: "techstack", icon: Zap },
    { name: "Contact", id: "contact", icon: Mail },
];


// --- 1. UTILITY COMPONENTS ---

const Section = ({ id, title, subtitle, children, className = '' }) => (
    <motion.section 
        id={id} 
        className={`py-20 md:py-28 px-4 sm:px-8 lg:px-16 min-h-screen flex flex-col justify-center text-${TEXT_COLOR} ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
    >
        <div className="max-w-6xl mx-auto w-full">
            <motion.h2 
                className={`text-4xl md:text-5xl font-extrabold mb-2 text-${PRIMARY_COLOR} drop-shadow-lg`}
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p 
                    className="text-xl text-gray-400 mb-12 border-b-2 border-gray-700 pb-4"
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            )}
            {children}
        </div>
    </motion.section>
);


// --- 2. NAVBAR COMPONENT ---

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <motion.header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? `bg-gray-800/95 backdrop-blur-md shadow-lg` : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <motion.a 
                        href="#hero" 
                        className={`text-2xl font-bold tracking-widest text-${PRIMARY_COLOR}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => scrollToSection('hero')}
                    >
                        ABINANTHAN V
                    </motion.a>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.id}
                                className={`text-gray-300 hover:text-${PRIMARY_COLOR} transition duration-300 font-medium tracking-wider`}
                                whileHover={{ scale: 1.05, color: '#6366f1' }} // Custom color for hover
                                onClick={() => scrollToSection(link.id)}
                            >
                                {link.name}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`text-gray-300 hover:text-${PRIMARY_COLOR} focus:outline-none`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`md:hidden bg-gray-800 border-t border-gray-700`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                className={`block w-full text-left py-3 px-6 text-gray-300 hover:bg-gray-700 hover:text-${PRIMARY_COLOR} transition duration-150 border-b border-gray-700 last:border-b-0`}
                                onClick={() => scrollToSection(link.id)}
                            >
                                <link.icon size={18} className="inline mr-3" />
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};


// --- 3. SECTION COMPONENTS ---

const AboutSection = () => (
    <Section id="about" title="About Me" subtitle="Who I Am & What I Do">
        <div className="grid md:grid-cols-3 gap-12 items-center">
            <motion.div 
                className="md:col-span-2 space-y-6 text-lg text-gray-300 leading-relaxed"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <p>Hello! I'm Abinanthan V, a highly motivated **Software Engineer** specializing in the development of modern, scalable web applications. My passion lies in bridging the gap between elegant design and robust back-end architecture.</p>
                <p>I focus primarily on the **MERN stack**, leveraging the power of React for dynamic user interfaces and Node.js/Express for reliable server-side logic. I am also deeply committed to writing **clean, maintainable, and well-tested code** that stands the test of time.</p>
                <p>When I'm not coding, you can find me exploring new open-source technologies, diving into competitive programming, or enjoying the vibrant culture of Chennai. I'm always looking for opportunities to contribute to projects that solve real-world problems.</p>
            </motion.div>
            <motion.div 
                className="md:col-span-1 flex justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className={`p-6 rounded-full shadow-2xl bg-gray-800 border-4 border-${PRIMARY_COLOR} transition duration-500 hover:scale-105`}>
                    <User size={96} className={`text-${PRIMARY_COLOR}`} />
                </div>
            </motion.div>
        </div>
    </Section>
);

const TimelineSection = () => (
    <Section id="timeline" title="Career Journey" subtitle="Experience & Education Milestones">
        <div className="relative border-l border-gray-700 space-y-12 pl-8">
            {timelineData.map((item, index) => (
                <motion.div 
                    key={index} 
                    className="mb-8 flex justify-start items-center w-full"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                    <div className={`absolute w-4 h-4 rounded-full mt-1.5 -left-2.5 border-4 border-${BG_COLOR} bg-${PRIMARY_COLOR} shadow-lg`}></div>
                    <div className="ml-6 flex-1 bg-gray-800 p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-gray-700/70">
                        <div className={`flex items-center space-x-3 mb-2 text-${PRIMARY_COLOR}`}>
                            <item.icon size={20} />
                            <p className="text-lg font-semibold">{item.title}</p>
                        </div>
                        <h4 className="text-xl font-bold text-gray-200">{item.company}</h4>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{item.date}</time>
                        <p className="text-base font-normal text-gray-300">{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);

const ProjectsSection = () => (
    <Section id="projects" title="Featured Projects" subtitle="A showcase of my full-stack work">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project, index) => (
                <motion.div 
                    key={index} 
                    className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-primary-lg flex flex-col"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    <div className="h-48 overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={`Screenshot of ${project.title}`} 
                            className="w-full h-full object-cover transition duration-500 hover:scale-110"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/1e293b/d1d5db?text=Project+Image"; }}
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-3 text-gray-50">{project.title}</h3>
                        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className={`text-xs font-medium px-3 py-1 rounded-full bg-${SECONDARY_COLOR}/50 text-${PRIMARY_COLOR} border border-${PRIMARY_COLOR}/70`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`mt-auto inline-flex items-center text-${PRIMARY_COLOR} font-semibold hover:underline transition duration-300`}
                        >
                            View Details <ArrowRight size={16} className="ml-2" />
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);

const AchievementsSection = () => (
    <Section id="achievements" title="Achievements" subtitle="Selected career and personal highlights">
        <div className="space-y-6">
            {achievementsData.map((achievement, index) => (
                <motion.div 
                    key={index} 
                    className="flex items-start p-4 bg-gray-800 rounded-lg shadow-lg border-l-4 border-yellow-500"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Lightbulb size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="ml-4 text-gray-300 text-lg">{achievement}</p>
                </motion.div>
            ))}
        </div>
    </Section>
);

const TechStackSection = () => (
    <Section id="techstack" title="Technology Stack" subtitle="Tools and Languages I master">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
            {techData.map((tech, index) => (
                <motion.div 
                    key={index} 
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <i className={`${tech.icon} text-5xl mb-3 ${tech.color} transition-transform duration-300 group-hover:scale-110`}></i>
                    <p className="text-sm font-medium text-gray-200 group-hover:text-white">{tech.name}</p>
                </motion.div>
            ))}
        </div>
    </Section>
);

const ContactSection = () => {
    // Simple state for a mock submission message
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate an API call
        setTimeout(() => {
            setStatus('success');
            setMessage('Thank you for reaching out! I will get back to you soon.');
            e.target.reset(); // Reset form fields
        }, 1500);
    };

    return (
        <Section id="contact" title="Get In Touch" subtitle="Let's build something great together">
            <div className="grid md:grid-cols-2 gap-12">
                
                {/* Contact Form */}
                <motion.div
                    className="bg-gray-800 p-8 rounded-xl shadow-2xl"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h4 className="text-2xl font-bold mb-4 text-gray-50">Send a Message</h4>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            required 
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-${PRIMARY_COLOR} focus:border-${PRIMARY_COLOR} transition"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            required 
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-${PRIMARY_COLOR} focus:border-${PRIMARY_COLOR} transition"
                        />
                        <textarea 
                            placeholder="Your Message" 
                            rows="5" 
                            required 
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-${PRIMARY_COLOR} focus:border-${PRIMARY_COLOR} transition"
                        ></textarea>
                        
                        <motion.button 
                            type="submit" 
                            className={`w-full p-3 rounded-lg font-bold text-gray-900 bg-${PRIMARY_COLOR} hover:bg-${SECONDARY_COLOR} transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </motion.button>
                        
                        {status === 'success' && (
                            <div className="p-3 bg-green-500/20 text-green-300 rounded-lg text-sm transition-opacity duration-300">
                                {message}
                            </div>
                        )}
                    </form>
                </motion.div>
                
                {/* Social Links */}
                <motion.div
                    className="space-y-8"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h4 className="text-2xl font-bold text-gray-50">Connect with Me</h4>
                    <div className="space-y-4">
                        <ContactLink icon={Github} label="mrbi10" href="https://github.com/mrbi10" />
                        <ContactLink icon={Linkedin} label="abinathanv" href="https://linkedin.com/in/abinathanv" />
                        <ContactLink icon={Mail} label="abinathan@example.com" href="mailto:abinathan@example.com" />
                        <ContactLink icon={Twitter} label="@abinancodes" href="https://twitter.com/abinancodes" />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

const ContactLink = ({ icon: Icon, label, href }) => (
    <motion.a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-700/80 hover:scale-[1.01]"
        whileHover={{ x: 5 }}
    >
        <Icon size={24} className={`text-${PRIMARY_COLOR} flex-shrink-0`} />
        <span className="ml-4 text-lg text-gray-300">{label}</span>
    </motion.a>
);

const Footer = () => (
    <footer className="bg-gray-800/90 py-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Abinanthan V. All rights reserved.
            </p>
            <p className="text-xs mt-2">
                Designed & Built with React, Tailwind CSS, and Framer Motion.
            </p>
        </div>
    </footer>
);

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 p-3 rounded-full bg-${PRIMARY_COLOR} text-white shadow-xl hover:bg-${SECONDARY_COLOR} transition-colors duration-300 z-50`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};


// --- 4. MAIN APP COMPONENT ---

const App = () => {
    const [index, setIndex] = useState(0);

    // Effect for the rotating text animation
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % rotatingTexts.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, []);

    const Hero = () => {
        return (
            <motion.div 
                id="hero" 
                className={`relative flex items-center justify-center min-h-screen bg-${BG_COLOR} overflow-hidden`}
            >
                {/* Background Grid/Noise Effect */}
                <div className="absolute inset-0 bg-repeat opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='none' stroke='%23374151' stroke-width='0.5'/%3E%3C/svg%3E")` }}></div>
                
                {/* Central Content */}
                <div className="relative z-10 text-center px-4">
                    <motion.p 
                        className={`text-xl font-medium text-${PRIMARY_COLOR} mb-4 uppercase tracking-widest`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Hi, I'm
                    </motion.p>
                    
                    <motion.h1 
                        className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.6 }}
                    >
                        ABINANTHAN V
                    </motion.h1>
                    
                    <div className="h-10 sm:h-12 overflow-hidden mb-8">
                        <AnimatePresence mode="wait">
                            <motion.p 
                                className="text-2xl sm:text-3xl font-light text-gray-400"
                                key={index} 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }} 
                                transition={{ duration: 0.5 }}
                            >
                                {rotatingTexts[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                    
                    <motion.button
                        className={`cta-button inline-flex items-center px-8 py-3 text-lg font-semibold rounded-full bg-${PRIMARY_COLOR} text-gray-900 shadow-lg transition duration-300 hover:bg-${SECONDARY_COLOR} hover:shadow-xl`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore My Work <ArrowRight size={20} className="ml-3" />
                    </motion.button>
                    
                    {/* Scroll Indicator */}
                    <motion.div 
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hidden md:block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        <div className="animate-bounce">
                            <ArrowUp size={30} className="rotate-180" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className={`bg-${BG_COLOR} font-sans min-h-screen`}>
            {/* The Navbar should appear first */}
            <Navbar />
            
            <main>
                <Hero />
                <AboutSection />
                <TimelineSection />
                <ProjectsSection />
                <AchievementsSection />
                <TechStackSection />
                <ContactSection />
            </main>
            
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default App;