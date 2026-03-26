import React from 'react';
import './Footer.css';
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          {/* Brand Identity */}
          <div className="footer-brand">
            <h2 className="brand-logo">VantraLabz</h2>
            <div className="social-links">
              <a href="#" className="social-icon"><FaXTwitter /></a>
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Managed Service Provider</a></li>
                <li><a href="#">Enterprises Projects</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Industries</h4>
              <ul>
                <li><a href="#">Medical & Health Care</a></li>
                <li><a href="#">Accounting Firms</a></li>
                <li><a href="#">Construction</a></li>
                <li><a href="#">Logistics</a></li>
                <li><a href="#">Retail & E-commerce</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>&nbsp;</h4> {/* Empty header for alignment */}
              <ul>
                <li><a href="#">Manufacturings</a></li>
                <li><a href="#">Energy & Utilities</a></li>
                <li><a href="#">Finance & Banking</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">Supports</a></li>
                <li><a href="#">Sales</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2025 VantraLabz. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;