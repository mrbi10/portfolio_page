import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-dark-navy bg-gray-900 border-t dark:border-dark-border border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold gradient-text">Abinanthan</h3>
            <p className="dark:text-text-muted text-gray-400 text-sm">
              Full-stack engineer crafting premium digital experiences with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-neon-cyan">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="dark:text-text-muted text-gray-400 hover:text-neon-cyan transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="dark:text-text-muted text-gray-400 hover:text-neon-cyan transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="dark:text-text-muted text-gray-400 hover:text-neon-cyan transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-neon-cyan">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="dark:text-text-muted text-gray-400 hover:text-neon-cyan transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-text-muted text-gray-400 hover:text-neon-cyan transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-text-muted text-gray-400 hover:text-neon-cyan transition-colors">
                  Docs
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-neon-cyan">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: faGithub, url: '#' },
                { icon: faLinkedin, url: '#' },
                { icon: faTwitter, url: '#' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-neon-cyan hover:text-neon-blue transition-colors"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px dark:bg-dark-border bg-gray-700 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="dark:text-text-muted text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Abinanthan. Made with <FontAwesomeIcon icon={faHeart} className="text-accent-red" /> by me.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 dark:bg-dark-card bg-gray-800 rounded-lg text-neon-cyan hover:shadow-glow-sm transition-all"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}

  export default Footer;
