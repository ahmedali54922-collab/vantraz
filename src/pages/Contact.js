import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <header className="contact-header">
          <h1>Let’s build something <span className="highlight">extraordinary</span> together.</h1>
          <p>Whether you have a specific project in mind or just want to explore the possibilities, we’re here to help you scale.</p>
        </header>

        <div className="contact-grid">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@company.com" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <select>
                <option>Brand Management</option>
                <option>Design & Development</option>
                <option>Ebook Services</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your project..." rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message <FaArrowRight />
            </button>
          </form>

          {/* Sidebar Info */}
          <div className="contact-info">
            <div className="info-block">
              <h3>Email us</h3>
              <p>hello@vantra.com</p>
            </div>
            <div className="info-block">
              <h3>Office</h3>
              <p>123 Digital Avenue<br />Innovation City, IC 54321</p>
            </div>
            <div className="info-block">
              <h3>Follow us</h3>
              <div className="social-links">
                <span>LinkedIn</span>
                <span>Twitter</span>
                <span>Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;