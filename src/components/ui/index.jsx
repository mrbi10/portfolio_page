import React from 'react';
import { motion } from 'framer-motion';

/* =========================================================
   BUTTON
========================================================= */

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const variants = {
    primary: `
      bg-gradient-to-r from-cyan-500 to-blue-600
      hover:from-cyan-400 hover:to-blue-500
      text-white
      shadow-lg shadow-cyan-500/20
      hover:shadow-cyan-500/40
    `,

    secondary: `
      bg-white dark:bg-slate-800
      text-slate-800 dark:text-white
      border border-slate-200 dark:border-slate-700
      hover:border-cyan-400 dark:hover:border-cyan-400
      hover:text-cyan-600 dark:hover:text-cyan-400
      shadow-sm
    `,

    ghost: `
      bg-transparent
      text-slate-700 dark:text-slate-300
      hover:bg-slate-100 dark:hover:bg-slate-800
      hover:text-cyan-600 dark:hover:text-cyan-400
    `,
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        px-5
        py-2.5
        rounded-xl
        font-semibold
        text-sm
        transition-all
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-500/50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}


/* =========================================================
   CARD
========================================================= */

export function Card({
  children,
  className = '',
  hover = true,
  glass = true,
  ...props
}) {
  const baseClass = glass
    ? `
      relative
      overflow-hidden
      rounded-2xl
      p-6
      md:p-8

      bg-white
      dark:bg-slate-900

      border
      border-slate-200
      dark:border-slate-800

      shadow-sm
      dark:shadow-none

      transition-all
      duration-300

      ${hover
        ? `
          hover:-translate-y-1
          hover:border-cyan-300
          dark:hover:border-cyan-500/40
          hover:shadow-xl
          hover:shadow-cyan-500/10
        `
        : ''
      }
    `
    : `
      rounded-2xl
      p-6
      md:p-8

      bg-white
      dark:bg-slate-900

      border
      border-slate-200
      dark:border-slate-800

      shadow-sm
    `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}


/* =========================================================
   CONTAINER
========================================================= */

export function Container({
  children,
  className = '',
}) {
  return (
    <div
      className={`
        w-full
        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        lg:px-8

        ${className}
      `}
    >
      {children}
    </div>
  );
}


/* =========================================================
   SECTION
========================================================= */

export function Section({
  children,
  className = '',
  id = '',
}) {
  return (
    <section
      id={id}
      className={`
        relative
        w-full

        py-16
        sm:py-20
        lg:py-24

        bg-slate-50
        dark:bg-slate-950

        text-slate-900
        dark:text-white

        ${className}
      `}
    >
      {children}
    </section>
  );
}


/* =========================================================
   GRADIENT TEXT
========================================================= */

export function GradientText({
  children,
  className = '',
}) {
  return (
    <span
      className={`
        bg-gradient-to-r
        from-cyan-500
        via-blue-500
        to-purple-600

        dark:from-cyan-400
        dark:via-blue-400
        dark:to-purple-400

        bg-clip-text
        text-transparent

        ${className}
      `}
    >
      {children}
    </span>
  );
}


/* =========================================================
   NEON TEXT
========================================================= */

export function NeonText({
  children,
  className = '',
}) {
  return (
    <span
      className={`
        text-cyan-600
        dark:text-cyan-400

        font-semibold

        ${className}
      `}
    >
      {children}
    </span>
  );
}


/* =========================================================
   ANIMATED HEADING
========================================================= */

export function AnimatedHeading({
  children,
  level = 'h1',
  className = '',
}) {
  const Component = level;

  const baseClass =
    level === 'h1'
      ? `
        text-4xl
        sm:text-5xl
        lg:text-6xl

        font-bold
        tracking-tight

        text-slate-900
        dark:text-white
      `
      : `
        text-3xl
        sm:text-4xl
        lg:text-5xl

        font-bold
        tracking-tight

        text-slate-900
        dark:text-white
      `;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <Component
        className={`${baseClass} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}


/* =========================================================
   GLASS DIVIDER
========================================================= */

export function GlassDivider() {
  return (
    <motion.div
      initial={{
        scaleX: 0,
      }}
      whileInView={{
        scaleX: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      className="
        h-px
        w-full

        my-8

        bg-gradient-to-r
        from-transparent
        via-cyan-500
        to-transparent

        opacity-70
      "
    />
  );
}