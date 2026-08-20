import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Container,
    Section,
    AnimatedHeading,
    GradientText,
} from '../components/ui/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPaperPlane,
    faLocationDot,
    faClock,
    faArrowUpRightFromSquare,
    faCheck,
    faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
    {
        name: 'GitHub',
        icon: faGithub,
        url: 'https://github.com/mrbi10',
        description: 'Explore my projects',
        color:
            'hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/30',
    },
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/mrbi/',
        description: 'Connect professionally',
        color:
            'hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50',
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

const inputClass = `
    w-full
    rounded-xl
    border
    border-gray-200
    dark:border-white/10
    bg-gray-50
    dark:bg-white/[0.04]
    px-4 py-3.5
    text-gray-900
    dark:text-white
    placeholder:text-gray-400
    dark:placeholder:text-gray-500
    outline-none
    transition-all duration-300
    focus:border-cyan-500
    dark:focus:border-cyan-400
    focus:ring-4
    focus:ring-cyan-500/10
    dark:focus:ring-cyan-400/10
`;

export function Contact() {
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setSubmitted(false);
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

            setTimeout(() => {
                setSubmitted(false);
            }, 6000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setError(
                'Something went wrong while sending your message. Please try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section
            id="contact"
            className="
                relative overflow-hidden
                bg-white
                dark:bg-dark-blue
            "
        >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="
                        absolute
                        -top-40
                        -left-40
                        w-96 h-96
                        rounded-full
                        bg-cyan-400/10
                        dark:bg-cyan-400/5
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-40
                        -right-40
                        w-[28rem] h-[28rem]
                        rounded-full
                        bg-blue-500/10
                        dark:bg-blue-500/5
                        blur-3xl
                    "
                />
            </div>

            <Container className="relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    className="max-w-6xl mx-auto"
                >
                    {/* ================= HEADER ================= */}

                    <motion.div
                        variants={itemVariants}
                        className="text-center space-y-5 mb-14"
                    >
                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-cyan-200
                                dark:border-cyan-400/20
                                bg-cyan-50
                                dark:bg-cyan-400/5
                                px-4 py-2
                            "
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    tracking-wide
                                    uppercase
                                    text-cyan-700
                                    dark:text-cyan-300
                                "
                            >
                                Open to opportunities
                            </span>
                        </div>

                        <AnimatedHeading level="h2">
                            Let's <GradientText>Connect</GradientText>
                        </AnimatedHeading>

                        <p
                            className="
                                max-w-2xl
                                mx-auto
                                text-lg
                                leading-relaxed
                                text-gray-600
                                dark:text-text-muted
                            "
                        >
                            Have a project, opportunity, or idea you'd like to
                            discuss? Send me a message and I'll get back to you.
                        </p>
                    </motion.div>

                    {/* ================= CONTENT ================= */}

                    <div className="grid lg:grid-cols-[0.85fr_1.5fr] gap-8">

                        {/* ================= LEFT ================= */}

                        <motion.div
                            variants={itemVariants}
                            className="space-y-5"
                        >
                            {/* Main contact card */}

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    dark:border-white/10
                                    bg-white
                                    dark:bg-white/[0.03]
                                    p-7
                                    shadow-sm
                                    dark:shadow-none
                                "
                            >
                                {/* Accent */}

                                <div
                                    className="
                                        absolute
                                        left-0
                                        top-0
                                        bottom-0
                                        w-1
                                        bg-gradient-to-b
                                        from-cyan-400
                                        via-blue-500
                                        to-purple-500
                                    "
                                />

                                <div className="space-y-7">
                                    <div>
                                        <h3
                                            className="
                                                text-xl
                                                font-bold
                                                text-gray-900
                                                dark:text-white
                                            "
                                        >
                                            Get in touch
                                        </h3>

                                        <p
                                            className="
                                                mt-2
                                                text-sm
                                                leading-6
                                                text-gray-600
                                                dark:text-text-muted
                                            "
                                        >
                                            I'm always interested in discussing
                                            new projects, technical ideas,
                                            collaborations, and opportunities.
                                        </p>
                                    </div>

                                    {/* Email */}

                                    <a
                                        href="mailto:abinanthan1006@gmail.com"
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-4
                                            rounded-xl
                                            border
                                            border-gray-200
                                            dark:border-white/10
                                            bg-gray-50
                                            dark:bg-white/[0.03]
                                            p-4
                                            transition-all
                                            hover:border-cyan-400/40
                                            hover:bg-cyan-50
                                            dark:hover:bg-cyan-400/5
                                        "
                                    >
                                        <div
                                            className="
                                                w-11 h-11
                                                flex-shrink-0
                                                rounded-xl
                                                flex items-center justify-center
                                                bg-cyan-50
                                                dark:bg-cyan-400/10
                                            "
                                        >
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                                className="
                                                    text-cyan-600
                                                    dark:text-neon-cyan
                                                "
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <p
                                                className="
                                                    text-xs
                                                    font-medium
                                                    text-gray-500
                                                    dark:text-text-muted
                                                "
                                            >
                                                Email
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    font-semibold
                                                    truncate
                                                    text-gray-900
                                                    dark:text-gray-200
                                                    group-hover:text-cyan-600
                                                    dark:group-hover:text-cyan-300
                                                "
                                            >
                                                abinanthan1006@gmail.com
                                            </p>
                                        </div>
                                    </a>

                                    {/* Location */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                            rounded-xl
                                            border
                                            border-gray-200
                                            dark:border-white/10
                                            bg-gray-50
                                            dark:bg-white/[0.03]
                                            p-4
                                        "
                                    >
                                        <div
                                            className="
                                                w-11 h-11
                                                flex-shrink-0
                                                rounded-xl
                                                flex items-center justify-center
                                                bg-blue-50
                                                dark:bg-blue-400/10
                                            "
                                        >
                                            <FontAwesomeIcon
                                                icon={faLocationDot}
                                                className="
                                                    text-blue-600
                                                    dark:text-blue-400
                                                "
                                            />
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-xs
                                                    font-medium
                                                    text-gray-500
                                                    dark:text-text-muted
                                                "
                                            >
                                                Location
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    font-semibold
                                                    text-gray-900
                                                    dark:text-gray-200
                                                "
                                            >
                                                Chennai, India
                                            </p>
                                        </div>
                                    </div>

                                    {/* Response */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                            rounded-xl
                                            border
                                            border-gray-200
                                            dark:border-white/10
                                            bg-gray-50
                                            dark:bg-white/[0.03]
                                            p-4
                                        "
                                    >
                                        <div
                                            className="
                                                w-11 h-11
                                                flex-shrink-0
                                                rounded-xl
                                                flex items-center justify-center
                                                bg-emerald-50
                                                dark:bg-emerald-400/10
                                            "
                                        >
                                            <FontAwesomeIcon
                                                icon={faClock}
                                                className="
                                                    text-emerald-600
                                                    dark:text-emerald-400
                                                "
                                            />
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-xs
                                                    font-medium
                                                    text-gray-500
                                                    dark:text-text-muted
                                                "
                                            >
                                                Response time
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    font-semibold
                                                    text-gray-900
                                                    dark:text-gray-200
                                                "
                                            >
                                                Usually within 24 hours
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    dark:border-white/10
                                    bg-white
                                    dark:bg-white/[0.03]
                                    p-6
                                    shadow-sm
                                    dark:shadow-none
                                "
                            >
                                <p
                                    className="
                                        text-sm
                                        font-bold
                                        text-gray-900
                                        dark:text-white
                                        mb-4
                                    "
                                >
                                    Find me online
                                </p>

                                <div className="space-y-3">
                                    {socialLinks.map((link) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{
                                                x: 4,
                                            }}
                                            whileTap={{
                                                scale: 0.98,
                                            }}
                                            className={`
                                                group
                                                flex
                                                items-center
                                                gap-4
                                                rounded-xl
                                                border
                                                border-gray-200
                                                dark:border-white/10
                                                bg-gray-50
                                                dark:bg-white/[0.02]
                                                p-3
                                                text-gray-600
                                                dark:text-gray-400
                                                transition-all
                                                ${link.color}
                                            `}
                                        >
                                            <div
                                                className="
                                                    w-10 h-10
                                                    rounded-lg
                                                    flex
                                                    items-center
                                                    justify-center
                                                    bg-white
                                                    dark:bg-white/[0.05]
                                                "
                                            >
                                                <FontAwesomeIcon
                                                    icon={link.icon}
                                                    className="text-lg"
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <p className="text-sm font-semibold">
                                                    {link.name}
                                                </p>

                                                <p
                                                    className="
                                                        text-xs
                                                        text-gray-500
                                                        dark:text-gray-500
                                                    "
                                                >
                                                    {link.description}
                                                </p>
                                            </div>

                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                                className="
                                                    text-xs
                                                    opacity-40
                                                    group-hover:opacity-100
                                                    transition-opacity
                                                "
                                            />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* ================= FORM ================= */}

                        <motion.div variants={itemVariants}>
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    dark:border-white/10
                                    bg-white
                                    dark:bg-white/[0.03]
                                    p-6 md:p-8
                                    shadow-sm
                                    dark:shadow-none
                                "
                            >
                                {/* Form top gradient */}

                                <div
                                    className="
                                        absolute
                                        top-0
                                        left-0
                                        right-0
                                        h-px
                                        bg-gradient-to-r
                                        from-transparent
                                        via-cyan-400
                                        to-transparent
                                    "
                                />

                                <div className="space-y-6">

                                    {/* Form header */}

                                    <div>
                                        <h3
                                            className="
                                                text-2xl
                                                font-bold
                                                text-gray-900
                                                dark:text-white
                                            "
                                        >
                                            Send a message
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                text-gray-500
                                                dark:text-text-muted
                                            "
                                        >
                                            Tell me a little about what you're
                                            working on.
                                        </p>
                                    </div>

                                    {/* Name */}

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="user_name"
                                            className="
                                                block
                                                text-sm
                                                font-semibold
                                                text-gray-700
                                                dark:text-gray-300
                                            "
                                        >
                                            Name
                                        </label>

                                        <input
                                            id="user_name"
                                            type="text"
                                            name="user_name"
                                            required
                                            autoComplete="name"
                                            className={inputClass}
                                            placeholder="Your name"
                                        />
                                    </div>

                                    {/* Email */}

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="user_email"
                                            className="
                                                block
                                                text-sm
                                                font-semibold
                                                text-gray-700
                                                dark:text-gray-300
                                            "
                                        >
                                            Email
                                        </label>

                                        <input
                                            id="user_email"
                                            type="email"
                                            name="user_email"
                                            required
                                            autoComplete="email"
                                            className={inputClass}
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    {/* Message */}

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="
                                                block
                                                text-sm
                                                font-semibold
                                                text-gray-700
                                                dark:text-gray-300
                                            "
                                        >
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            className={`
                                                ${inputClass}
                                                resize-none
                                            `}
                                            placeholder="Tell me about your project, idea, or opportunity..."
                                        />
                                    </div>

                                    {/* Status */}

                                    <AnimatePresence mode="wait">

                                        {submitted && (
                                            <motion.div
                                                key="success"
                                                initial={{
                                                    opacity: 0,
                                                    y: -10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -10,
                                                }}
                                                className="
                                                    flex
                                                    items-start
                                                    gap-3
                                                    rounded-xl
                                                    border
                                                    border-emerald-200
                                                    dark:border-emerald-400/20
                                                    bg-emerald-50
                                                    dark:bg-emerald-400/5
                                                    p-4
                                                "
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    className="
                                                        mt-0.5
                                                        text-emerald-600
                                                        dark:text-emerald-400
                                                    "
                                                />

                                                <div>
                                                    <p
                                                        className="
                                                            text-sm
                                                            font-semibold
                                                            text-emerald-700
                                                            dark:text-emerald-400
                                                        "
                                                    >
                                                        Message sent successfully
                                                    </p>

                                                    <p
                                                        className="
                                                            mt-1
                                                            text-xs
                                                            text-emerald-600
                                                            dark:text-emerald-500
                                                        "
                                                    >
                                                        Thanks for reaching out.
                                                        I'll get back to you soon.
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}

                                        {error && (
                                            <motion.div
                                                key="error"
                                                initial={{
                                                    opacity: 0,
                                                    y: -10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -10,
                                                }}
                                                className="
                                                    flex
                                                    items-start
                                                    gap-3
                                                    rounded-xl
                                                    border
                                                    border-red-200
                                                    dark:border-red-400/20
                                                    bg-red-50
                                                    dark:bg-red-400/5
                                                    p-4
                                                "
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCircleExclamation}
                                                    className="
                                                        mt-0.5
                                                        text-red-600
                                                        dark:text-red-400
                                                    "
                                                />

                                                <p
                                                    className="
                                                        text-sm
                                                        text-red-700
                                                        dark:text-red-400
                                                    "
                                                >
                                                    {error}
                                                </p>
                                            </motion.div>
                                        )}

                                    </AnimatePresence>

                                    {/* Submit */}

                                    <motion.button
                                        type="submit"
                                        disabled={loading}
                                        whileHover={
                                            !loading
                                                ? {
                                                      y: -2,
                                                  }
                                                : {}
                                        }
                                        whileTap={
                                            !loading
                                                ? {
                                                      scale: 0.98,
                                                  }
                                                : {}
                                        }
                                        className="
                                            w-full
                                            rounded-xl
                                            px-6 py-3.5
                                            flex
                                            items-center
                                            justify-center
                                            gap-3
                                            font-bold
                                            text-white
                                            bg-gradient-to-r
                                            from-cyan-500
                                            to-blue-600
                                            shadow-lg
                                            shadow-cyan-500/20
                                            hover:shadow-cyan-500/30
                                            disabled:opacity-60
                                            disabled:cursor-not-allowed
                                            transition-all
                                        "
                                    >
                                        {loading ? (
                                            <>
                                                <motion.span
                                                    animate={{
                                                        rotate: 360,
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: 'linear',
                                                    }}
                                                    className="
                                                        w-4 h-4
                                                        rounded-full
                                                        border-2
                                                        border-white/30
                                                        border-t-white
                                                    "
                                                />

                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message

                                                <FontAwesomeIcon
                                                    icon={faPaperPlane}
                                                />
                                            </>
                                        )}
                                    </motion.button>

                                    <p
                                        className="
                                            text-center
                                            text-xs
                                            text-gray-400
                                            dark:text-gray-500
                                        "
                                    >
                                        Your message will be sent directly to
                                        my inbox.
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                    {/* Bottom line */}

                    <motion.div
                        variants={itemVariants}
                        className="
                            mt-10
                            text-center
                            text-sm
                            text-gray-500
                            dark:text-gray-500
                        "
                    >
                        <span className="text-gray-400 dark:text-gray-600">
                            Have something interesting in mind?
                        </span>{' '}
                        <span
                            className="
                                font-semibold
                                text-cyan-600
                                dark:text-cyan-400
                            "
                        >
                            Let's build it together.
                        </span>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
}