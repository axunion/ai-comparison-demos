import React from 'react';
import './MenuPreview.css';
import dishImage from '../assets/dish.png';

const MenuPreview = () => {
    const dishes = [
        {
            id: 1,
            name: "Truffle Risotto",
            description: "Arborio rice, black truffle, parmesan crisp, gold leaf.",
            price: "$45"
        },
        {
            id: 2,
            name: "Wagyu Beef Tartare",
            description: "A5 Wagyu, quail egg, capers, toasted brioche.",
            price: "$60"
        },
        {
            id: 3,
            name: "Pan-Seared Scallops",
            description: "Cauliflower purée, caviar, lemon butter sauce.",
            price: "$52"
        }
    ];

    return (
        <section id="menu" className="menu-preview section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Curated <span className="text-gold">Menu</span></h2>
                    <p className="section-subtitle">A symphony of flavors crafted with passion</p>
                </div>

                <div className="menu-content-wrapper">
                    <div className="menu-image-container">
                        <img src={dishImage} alt="Signature Dish" className="menu-featured-image" />
                    </div>

                    <div className="menu-grid">
                        {dishes.map(dish => (
                            <div key={dish.id} className="menu-item">
                                <div className="menu-item-content">
                                    <h3 className="menu-item-title">
                                        {dish.name}
                                        <span className="menu-item-price">{dish.price}</span>
                                    </h3>
                                    <p className="menu-item-description">{dish.description}</p>
                                </div>
                            </div>
                        ))}
                        <div className="menu-cta">
                            <a href="#" className="btn-outline">View Full Menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
