import React from 'react';
import './Reservation.css';

const Reservation = () => {
    return (
        <section id="reservation" className="reservation section-padding">
            <div className="container">
                <div className="reservation-content">
                    <div className="reservation-text">
                        <h2 className="section-title">Book Your <span className="text-gold">Table</span></h2>
                        <p className="reservation-description">
                            Secure your spot for an unforgettable dining experience.
                            For parties larger than 8, please contact us directly.
                        </p>
                    </div>
                    <form className="reservation-form">
                        <div className="form-group">
                            <input type="text" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input type="date" required />
                        </div>
                        <div className="form-group">
                            <select required>
                                <option value="">Guests</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                                <option value="5+">5+ People</option>
                            </select>
                        </div>
                        <button type="submit" className="btn-primary">Confirm Reservation</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
