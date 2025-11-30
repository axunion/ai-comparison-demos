import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    <span className="hero-subtitle">Welcome to Lumière</span>
                    Taste the <span className="text-gold">Extraordinary</span>
                </h1>
                <p className="hero-description">
                    Experience a culinary journey where tradition meets innovation in an atmosphere of timeless elegance.
                </p>
                <div className="hero-actions">
                    <a href="#menu" className="btn-primary">View Menu</a>
                    <a href="#reservation" className="btn-outline">Book a Table</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
