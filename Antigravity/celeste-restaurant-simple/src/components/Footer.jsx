import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-midnight-light)',
            padding: '4rem 2rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(197, 160, 89, 0.3)',
        }}>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>CÉLESTE</h2>
                <p style={{ color: 'rgba(253, 252, 240, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
                    Experience the epitome of modern French cuisine in an atmosphere of celestial elegance.
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <a href="#" style={{ color: 'var(--color-gold)' }}><Instagram /></a>
                <a href="#" style={{ color: 'var(--color-gold)' }}><Facebook /></a>
                <a href="#" style={{ color: 'var(--color-gold)' }}><Twitter /></a>
            </div>

            <div style={{ fontSize: '0.9rem', color: 'rgba(253, 252, 240, 0.5)' }}>
                <p>123 Starry Lane, Metropolis, NY 10012</p>
                <p>+1 (555) 123-4567 | reservations@celeste.com</p>
                <p style={{ marginTop: '1rem' }}>© {new Date().getFullYear()} Céleste. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
