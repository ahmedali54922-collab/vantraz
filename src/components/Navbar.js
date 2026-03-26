import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink
import './Navbar.css';
import mainLogo from '../assets/images/mainLogo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={mainLogo} alt="VantraLabz Logo" className="logo-img" />
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        {/* Use NavLink for items that need active styling */}
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/journal" onClick={closeMenu}>Journal</NavLink></li>
        <li><NavLink to="/contacts" onClick={closeMenu}>Contacts</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;