import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{
            padding: '8rem 2rem',
            backgroundColor: 'var(--color-midnight)',
            position: 'relative',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
            }}>
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 style={{
                        color: 'var(--color-gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        marginBottom: '1rem',
                        fontSize: '0.9rem',
                    }}>Our Story</h3>
                    <h2 style={{
                        fontSize: '3rem',
                        marginBottom: '2rem',
                        lineHeight: 1.2,
                    }}>Where Tradition Meets Innovation</h2>
                    <p style={{
                        marginBottom: '1.5rem',
                        color: 'rgba(253, 252, 240, 0.8)',
                        fontSize: '1.1rem',
                    }}>
                        Founded by Chef Jean-Luc Dubois, Céleste represents the pinnacle of modern gastronomy.
                        We believe that dining is not just about sustenance, but an emotional journey that transcends the ordinary.
                    </p>
                    <p style={{
                        color: 'rgba(253, 252, 240, 0.8)',
                        fontSize: '1.1rem',
                    }}>
                        Our ingredients are sourced from the finest local purveyors and global artisans,
                        ensuring that every dish tells a story of its origin.
                    </p>
                </motion.div>

                {/* Image Placeholder (or generated image later) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'relative',
                        height: '500px',
                        backgroundColor: 'var(--color-midnight-light)',
                        border: '1px solid var(--color-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span style={{ color: 'var(--color-gold)', opacity: 0.5 }}>Chef / Interior Image</span>
                    {/* Decorative frame */}
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        right: '-20px',
                        bottom: '-20px',
                        border: '1px solid rgba(197, 160, 89, 0.3)',
                        zIndex: -1,
                    }} />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
