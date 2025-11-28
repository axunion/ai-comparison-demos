import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <a href="#">LUMIÈRE</a>
        </div>
        <ul className="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#reservation">Reservations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-cta">
          <a href="#reservation" className="btn-outline">Book Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
