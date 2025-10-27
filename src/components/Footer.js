import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} Abinanthan V All rights reserved.</p>
      <div style={styles.links}>
        <a href="https://github.com/mrbi10" target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>
        <a href="https://www.linkedin.com/in/mrbi/" target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a>
        <a href="mailto:abinanthan1006@gmail.com" style={styles.link}>Email</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#f5f5f5',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: '60px',
  },
  text: {
    margin: '0 0 10px 0',
    color: '#555',
    fontSize: '14px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    color: '#0077b6',
    textDecoration: 'none',
    fontWeight: 500,
  },
};

export default Footer;
