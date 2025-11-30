import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{
            padding: '8rem 2rem',
            backgroundColor: 'var(--color-midnight-light)',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Visit Us
                    </h3>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Contact & Location</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <MapPin color="var(--color-gold)" size={24} />
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Address</h4>
                                <p style={{ color: 'rgba(253, 252, 240, 0.7)' }}>123 Starry Lane<br />Metropolis, NY 10012</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Phone color="var(--color-gold)" size={24} />
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phone</h4>
                                <p style={{ color: 'rgba(253, 252, 240, 0.7)' }}>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Mail color="var(--color-gold)" size={24} />
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email</h4>
                                <p style={{ color: 'rgba(253, 252, 240, 0.7)' }}>reservations@celeste.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Clock color="var(--color-gold)" size={24} />
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Hours</h4>
                                <p style={{ color: 'rgba(253, 252, 240, 0.7)' }}>
                                    Tue - Sun: 5:00 PM - 11:00 PM<br />
                                    Mon: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Map Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{
                        backgroundColor: 'var(--color-midnight)',
                        border: '1px solid rgba(197, 160, 89, 0.2)',
                        height: '100%',
                        minHeight: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span style={{ color: 'var(--color-gold)', opacity: 0.5 }}>Interactive Map Placeholder</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
