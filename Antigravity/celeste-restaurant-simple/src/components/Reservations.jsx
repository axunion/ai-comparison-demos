import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Reservations = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Reservation request received! (Demo only)');
    };

    return (
        <section id="reservations" style={{
            padding: '8rem 2rem',
            backgroundColor: 'var(--color-midnight)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1,
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h3 style={{ color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        Book a Table
                    </h3>
                    <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Reservations</h2>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2rem',
                        backgroundColor: 'rgba(28, 37, 65, 0.5)',
                        padding: '3rem',
                        border: '1px solid rgba(197, 160, 89, 0.2)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ color: 'var(--color-gold)', fontSize: '0.9rem' }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            style={{
                                padding: '1rem',
                                backgroundColor: 'transparent',
                                border: '1px solid rgba(253, 252, 240, 0.2)',
                                color: 'var(--color-cream)',
                                fontFamily: 'var(--font-body)',
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ color: 'var(--color-gold)', fontSize: '0.9rem' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            style={{
                                padding: '1rem',
                                backgroundColor: 'transparent',
                                border: '1px solid rgba(253, 252, 240, 0.2)',
                                color: 'var(--color-cream)',
                                fontFamily: 'var(--font-body)',
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ color: 'var(--color-gold)', fontSize: '0.9rem' }}>Date</label>
                        <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            style={{
                                padding: '1rem',
                                backgroundColor: 'transparent',
                                border: '1px solid rgba(253, 252, 240, 0.2)',
                                color: 'var(--color-cream)',
                                fontFamily: 'var(--font-body)',
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ color: 'var(--color-gold)', fontSize: '0.9rem' }}>Time</label>
                        <select
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            style={{
                                padding: '1rem',
                                backgroundColor: 'transparent',
                                border: '1px solid rgba(253, 252, 240, 0.2)',
                                color: 'var(--color-cream)',
                                fontFamily: 'var(--font-body)',
                            }}
                        >
                            <option value="" style={{ color: 'black' }}>Select Time</option>
                            <option value="18:00" style={{ color: 'black' }}>6:00 PM</option>
                            <option value="19:00" style={{ color: 'black' }}>7:00 PM</option>
                            <option value="20:00" style={{ color: 'black' }}>8:00 PM</option>
                            <option value="21:00" style={{ color: 'black' }}>9:00 PM</option>
                        </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                        <label style={{ color: 'var(--color-gold)', fontSize: '0.9rem' }}>Guests</label>
                        <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            style={{
                                padding: '1rem',
                                backgroundColor: 'transparent',
                                border: '1px solid rgba(253, 252, 240, 0.2)',
                                color: 'var(--color-cream)',
                                fontFamily: 'var(--font-body)',
                            }}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                <option key={num} value={num} style={{ color: 'black' }}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        style={{
                            gridColumn: 'span 2',
                            padding: '1rem',
                            backgroundColor: 'var(--color-gold)',
                            color: 'var(--color-midnight)',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            border: 'none',
                            marginTop: '1rem',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = 'var(--color-gold-hover)'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'var(--color-gold)'}
                    >
                        Request Reservation
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Reservations;
