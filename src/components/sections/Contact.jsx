import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Section, Button, AnimatedHeading, GradientText } from '../ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
    {
        name: 'GitHub',
        icon: faGithub,
        url: 'https://github.com/mrbi10',
        color: 'hover:text-gray-400',
    },
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        url: 'https://linkedin.com/in/mrbi',
        color: 'hover:text-neon-blue',
    },
    {
        name: 'Email',
        icon: faEnvelope,
        url: 'mailto:abinanthan1006@gmail.com',
        color: 'hover:text-neon-cyan',
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

export function Contact() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await emailjs.sendForm(
                'service_cm2b2ln',
                'template_co4i509',
                formRef.current,
                'tMV0ySkJN28-qI7fO'
            );
            setSubmitted(true);
            formRef.current.reset();
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            setError('Failed to send message. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section id="contact" className="dark:bg-dark-blue bg-gray-50">
            <Container>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center space-y-4 mb-12"
                    >
                        <AnimatedHeading level="h2">
                            Get In <GradientText>Touch</GradientText>
                        </AnimatedHeading>
                        <p className="dark:text-text-muted text-gray-600 text-lg">
                            Have a project in mind? Let's collaborate and create something amazing
                        </p>
                    </motion.div>

                    {/* Contact grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left column - Info */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-8"
                        >
                            {/* Contact info cards */}
                            <div className="space-y-4">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="glass-card space-y-2"
                                >
                                    <p className="text-neon-cyan font-semibold">Email</p>
                                    <a
                                        href="mailto:abinanthan@example.com"
                                        className="dark:text-text-light text-gray-700 hover:text-neon-cyan transition-colors"
                                    >
                                        abinanthan1006@gmail.com
                                    </a>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="glass-card space-y-2"
                                >
                                    <p className="text-neon-cyan font-semibold">Location</p>
                                    <p className="dark:text-text-light text-gray-700">
                                        Chennai, India
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="glass-card space-y-2"
                                >
                                    <p className="text-neon-cyan font-semibold">Response Time</p>
                                    <p className="dark:text-text-light text-gray-700">
                                        24 hours
                                    </p>
                                </motion.div>
                            </div>

                            {/* Social links */}
                            <div className="space-y-3">
                                <p className="text-neon-cyan font-semibold">Follow</p>
                                <div className="flex gap-4">
                                    {socialLinks.map((link) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-12 h-12 glass rounded-lg flex items-center justify-center text-neon-cyan transition-all ${link.color}`}
                                        >
                                            <FontAwesomeIcon icon={link.icon} size="lg" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right column - Form */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-2"
                        >
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="glass-card space-y-6"
                            >
                                {/* Name field */}
                                <div className="space-y-2">
                                    <label className="block text-neon-cyan font-semibold">
                                        Name
                                    </label>
                                    <motion.input
                                        type="text"
                                        name="user_name"
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                        className="w-full px-4 py-3 dark:bg-dark-card bg-white border dark:border-dark-border border-gray-200 rounded-lg dark:text-text-light text-gray-900 focus:border-neon-cyan focus:outline-none transition-all dark:focus:shadow-glow-sm"
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email field */}
                                <div className="space-y-2">
                                    <label className="block text-neon-cyan font-semibold">
                                        Email
                                    </label>
                                    <motion.input
                                        type="email"
                                        name="user_email"
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                        className="w-full px-4 py-3 dark:bg-dark-card bg-white border dark:border-dark-border border-gray-200 rounded-lg dark:text-text-light text-gray-900 focus:border-neon-cyan focus:outline-none transition-all dark:focus:shadow-glow-sm"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* Message field */}
                                <div className="space-y-2">
                                    <label className="block text-neon-cyan font-semibold">
                                        Message
                                    </label>
                                    <motion.textarea
                                        name="message"
                                        required
                                        rows="5"
                                        whileFocus={{ scale: 1.02 }}
                                        className="w-full px-4 py-3 dark:bg-dark-card bg-white border dark:border-dark-border border-gray-200 rounded-lg dark:text-text-light text-gray-900 focus:border-neon-cyan focus:outline-none resize-none transition-all dark:focus:shadow-glow-sm"
                                        placeholder="Your message here..."
                                    />
                                </div>

                                {/* Status messages */}
                                <AnimatePresence>
                                    {submitted && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="p-4 dark:bg-accent-green dark:bg-opacity-10 bg-accent-green bg-opacity-10 border border-accent-green rounded-lg text-accent-green"
                                        >
                                            Message sent successfully! I'll get back to you soon.
                                        </motion.div>
                                    )}
                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="p-4 dark:bg-accent-red dark:bg-opacity-10 bg-accent-red bg-opacity-10 border border-accent-red rounded-lg text-accent-red"
                                        >
                                            {error}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit button */}
                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-primary flex items-center justify-center gap-2"
                                >
                                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
