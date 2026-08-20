import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faArrowUp,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  {
    name: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/mrbi10',
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/mrbi/',
  },
  {
    name: 'X',
    icon: faTwitter,
    url: 'https://x.com/mr_bi_10',
  },
  {
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://www.instagram.com/mr_bi_10/',
  },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#timeline' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative overflow-hidden
        border-t
        dark:border-dark-border
        border-gray-200
        dark:bg-dark-navy
        bg-white
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            -top-32
            left-1/4
            w-96
            h-96
            rounded-full
            bg-neon-cyan
            opacity-[0.04]
            dark:opacity-[0.08]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            right-1/4
            w-96
            h-96
            rounded-full
            bg-neon-blue
            opacity-[0.04]
            dark:opacity-[0.06]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-5"
            >
              {/* Logo / Name */}
              <a
                href="#"
                className="inline-block group"
                aria-label="Back to top"
              >
                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-extrabold
                    tracking-tight
                    gradient-text
                    group-hover:opacity-80
                    transition-opacity
                  "
                >
                  Abinanthan V
                </h3>
              </a>

              <p
                className="
                  max-w-md
                  text-sm
                  md:text-base
                  leading-7
                  dark:text-text-muted
                  text-gray-600
                "
              >
                Full-stack engineer focused on building scalable systems,
                modern digital experiences, AI integrations, and reliable
                cloud-powered applications.
              </p>

              {/* Availability */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  border
                  dark:border-accent-green/20
                  border-green-200
                  dark:bg-accent-green/5
                  bg-green-50
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      rounded-full
                      bg-accent-green
                      opacity-75
                      animate-ping
                    "
                  />
                  <span
                    className="
                      relative
                      inline-flex
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-accent-green
                    "
                  />
                </span>

                <span
                  className="
                    text-xs
                    font-semibold
                    dark:text-accent-green
                    text-green-700
                  "
                >
                  Open to opportunities
                </span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <h4
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-neon-cyan
                  mb-5
                "
              >
                Navigation
              </h4>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="
                        inline-flex
                        items-center
                        text-sm
                        dark:text-text-muted
                        text-gray-600
                        hover:text-neon-cyan
                        dark:hover:text-neon-cyan
                        hover:translate-x-1
                        transition-all
                      "
                    >
                      <span className="mr-2 text-neon-cyan opacity-0 group-hover:opacity-100">
                        →
                      </span>

                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4"
            >
              <h4
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-neon-cyan
                  mb-5
                "
              >
                Let's Connect
              </h4>

              <p
                className="
                  text-sm
                  leading-6
                  dark:text-text-muted
                  text-gray-600
                  mb-5
                "
              >
                Have an idea, project, or opportunity?
                Feel free to reach out.
              </p>

              {/* Email */}
              <motion.a
                href="mailto:abinanthan1006@gmail.com"
                whileHover={{ y: -2 }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  mb-6
                  text-sm
                  font-medium
                  dark:text-text-light
                  text-gray-800
                  hover:text-neon-cyan
                  transition-colors
                "
              >
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-9
                    h-9
                    rounded-lg
                    dark:bg-dark-card
                    bg-gray-100
                    border
                    dark:border-dark-border
                    border-gray-200
                  "
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-neon-cyan"
                  />
                </span>

                abinanthan1006@gmail.com
              </motion.a>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      w-11
                      h-11
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      border
                      dark:border-dark-border
                      border-gray-200
                      dark:bg-dark-card/70
                      bg-gray-50
                      dark:text-text-muted
                      text-gray-600
                      hover:text-neon-cyan
                      hover:border-neon-cyan/50
                      hover:shadow-[0_0_20px_rgba(0,188,212,0.15)]
                      transition-all
                    "
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="text-lg"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="
            h-px
            dark:bg-dark-border
            bg-gray-200
          "
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            py-6
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          {/* Copyright */}
          <p
            className="
              text-xs
              sm:text-sm
              dark:text-text-muted
              text-gray-500
              text-center
              md:text-left
            "
          >
            © {currentYear} Abinanthan V. All rights reserved.
          </p>

          {/* Made with */}
          <p
            className="
              text-xs
              sm:text-sm
              dark:text-text-muted
              text-gray-500
              flex
              items-center
              gap-1.5
            "
          >
            Built with
            <FontAwesomeIcon
              icon={faHeart}
              className="text-accent-red text-xs"
            />
            and lots of code
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            aria-label="Back to top"
            title="Back to top"
            className="
              w-10
              h-10
              rounded-xl
              flex
              items-center
              justify-center
              border
              dark:border-dark-border
              border-gray-200
              dark:bg-dark-card
              bg-gray-50
              text-neon-cyan
              hover:border-neon-cyan/50
              hover:shadow-[0_0_20px_rgba(0,188,212,0.2)]
              transition-all
            "
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;