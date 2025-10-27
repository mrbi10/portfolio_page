import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        // Use the 'navbar' class from App.css for global styling (sticky, blur, etc.)
        <nav className="navbar">
            <div className="navbar-brand">
                {/* Developer's Initials/Name as a prominent brand element */}
                <a href="#hero">ABINANTHAN V</a>
            </div>
            <ul className="navbar-links">
                {/* Use clear, professional link names */}
                <li><a href="#about">About</a></li>
                <li><a href="#timeline">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#tech">Skills</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#contact" className="contact-link">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;