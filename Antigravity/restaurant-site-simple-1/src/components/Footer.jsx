import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>LUMIÈRE</h3>
                        <p>Experience the Art of Dining</p>
                    </div>
                    <div className="footer-info">
                        <h4>Contact</h4>
                        <p>123 Culinary Avenue</p>
                        <p>New York, NY 10012</p>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="footer-hours">
                        <h4>Hours</h4>
                        <p>Mon-Sun: 5pm - 11pm</p>
                        <p>Happy Hour: 5pm - 7pm</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Lumière Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
