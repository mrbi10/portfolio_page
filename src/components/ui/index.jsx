import React from 'react';
import { motion } from 'framer-motion';

export function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function Card({ 
  children, 
  className = '',
  hover = true,
  glass = true,
  ...props 
}) {
  const baseClass = glass ? 'glass-card' : 'rounded-xl p-6 md:p-8 dark:bg-dark-card bg-white';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Container({ children, className = '' }) {
  return (
    <div className={`container-custom ${className}`}>
      {children}
    </div>
  );
}

export function Section({ 
  children, 
  className = '',
  id = ''
}) {
  return (
    <section 
      id={id}
      className={`section-padding dark:bg-dark-navy bg-gray-50 ${className}`}
    >
      {children}
    </section>
  );
}

export function GradientText({ children, className = '' }) {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
    </span>
  );
}

export function NeonText({ children, className = '' }) {
  return (
    <span className={`neon-text ${className}`}>
      {children}
    </span>
  );
}

export function AnimatedHeading({ children, level = 'h1', className = '' }) {
  const Component = level;
  const baseClass = level === 'h1' ? 'neon-heading' : 'neon-subheading';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Component className={`${baseClass} ${className}`}>
        {children}
      </Component>
    </motion.div>
  );
}

export function GlassDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="gradient-divider my-8"
    />
  );
}
