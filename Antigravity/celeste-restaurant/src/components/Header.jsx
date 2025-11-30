import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/global.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Reservations', href: '#reservations' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.3s ease, padding 0.3s ease',
                backgroundColor: isScrolled ? 'rgba(10, 17, 40, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(197, 160, 89, 0.2)' : 'none',
            }}
        >
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src="/logo.png" alt="Céleste Logo" style={{ height: '40px' }} />
                <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    color: 'var(--color-gold)',
                    letterSpacing: '2px',
                    fontWeight: 700
                }}>
                    CÉLESTE
                </span>
            </div>

            {/* Desktop Nav */}
            <nav style={{ display: 'none', gap: '2rem', md: { display: 'flex' } }} className="desktop-nav">
                <style>{`
          @media (min-width: 768px) {
            .desktop-nav { display: flex !important; }
            .mobile-toggle { display: none !important; }
          }
        `}</style>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        style={{
                            color: 'var(--color-cream)',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            position: 'relative',
                        }}
                        className="nav-link"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>

            {/* Mobile Toggle */}
            <button
                className="mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{ background: 'none', color: 'var(--color-gold)' }}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'var(--color-midnight)',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            borderBottom: '1px solid var(--color-gold)',
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    color: 'var(--color-cream)',
                                    fontSize: '1.2rem',
                                    fontFamily: 'var(--font-heading)',
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
