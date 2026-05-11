/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0d1117',
        'dark-blue': '#090c10',
        'dark-card': '#161b22',
        'dark-border': '#30363d',
        'dark-hover': '#1f2937',
        'neon-cyan': '#00bcd4',
        'neon-blue': '#1e90ff',
        'neon-purple': '#a855f7',
        'neon-pink': '#ec4899',
        'accent-green': '#34d058',
        'accent-red': '#f85149',
        'text-muted': '#8b949e',
        'text-light': '#e6edf3',
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 188, 212, 0.1)',
        'glow-md': '0 0 20px rgba(0, 188, 212, 0.2)',
        'glow-lg': '0 0 40px rgba(0, 188, 212, 0.3)',
        'glow-cyan': '0 0 20px rgba(0, 188, 212, 0.4)',
        'glow-blue': '0 0 20px rgba(30, 144, 255, 0.4)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(0, 188, 212, 0.1)',
        'neon': '0 0 20px rgba(0, 188, 212, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'orbit': 'orbit 8s linear infinite',
        'bounce-slow': 'bounce 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'reveal': 'reveal 0.5s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 188, 212, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 188, 212, 0.6)',
          },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'reveal': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'subheading': ['1.875rem', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(13, 17, 23, 0.5)',
          border: '1px solid rgba(0, 188, 212, 0.1)',
        },
        '.glass-dark': {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(13, 17, 23, 0.7)',
          border: '1px solid rgba(0, 188, 212, 0.15)',
        },
        '.glass-light': {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(0, 188, 212, 0.2)',
        },
        '.gradient-text': {
          backgroundImage: 'linear-gradient(135deg, #00bcd4 0%, #1e90ff 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
        '.gradient-border': {
          backgroundImage: 'linear-gradient(135deg, #00bcd4 0%, #1e90ff 100%)',
          padding: '1px',
        },
        '.neon-text': {
          color: '#00bcd4',
          textShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
        },
        '.neon-border': {
          borderColor: '#00bcd4',
          boxShadow: 'inset 0 0 10px rgba(0, 188, 212, 0.1)',
        },
      });
    },
  ],
};
