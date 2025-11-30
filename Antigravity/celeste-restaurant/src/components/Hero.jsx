import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>
            {/* Background Image with Parallax-like fixed position */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.6)',
                zIndex: -1,
            }} />

            <div style={{
                textAlign: 'center',
                color: 'var(--color-cream)',
                padding: '0 2rem',
                maxWidth: '800px',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 style={{
                        fontSize: '1.2rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        color: 'var(--color-gold)',
                    }}>
                        Welcome to
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    }}
                >
                    CÉLESTE
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        fontWeight: 300,
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    A culinary journey through the stars. Modern French cuisine redefined.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <a
                        href="#reservations"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2.5rem',
                            border: '1px solid var(--color-gold)',
                            color: 'var(--color-gold)',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            transition: 'all 0.3s ease',
                            backgroundColor: 'rgba(10, 17, 40, 0.3)',
                            backdropFilter: 'blur(5px)',
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = 'var(--color-gold)';
                            e.target.style.color = 'var(--color-midnight)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'rgba(10, 17, 40, 0.3)';
                            e.target.style.color = 'var(--color-gold)';
                        }}
                    >
                        Reserve a Table
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(253, 252, 240, 0.5)',
                    fontSize: '0.8rem',
                    letterSpacing: '2px',
                }}
            >
                <span>SCROLL</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        width: '1px',
                        height: '40px',
                        backgroundColor: 'rgba(253, 252, 240, 0.3)',
                    }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
