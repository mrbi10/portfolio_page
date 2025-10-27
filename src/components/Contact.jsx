import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission status

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button immediately

    emailjs
      .sendForm('service_7tdehjd', 'template_co4i509', form.current, 'tMV0ySkJN28-qI7fO')
      .then(
        () => {
          setStatusMessage('✅ Your message was sent successfully. I will get back to you soon!');
          setStatusType('success');
          form.current.reset();
          setIsSubmitting(false);
        },
        () => {
          setStatusMessage('❌ Something went wrong. Please try again later.');
          setStatusType('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Let’s Connect</h2>
      <p className="contact-subtext">
        Have a project in mind, or just want to say hi? Drop a message below.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {statusMessage && (
        <p className={`form-status ${statusType}`}>{statusMessage}</p>
      )}

      <div className="social-links">
        <a href="https://github.com/mrbi10" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mrbi/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:abinanthan1006@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;