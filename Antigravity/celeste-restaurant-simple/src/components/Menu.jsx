import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = {
    starters: [
        { name: "Foie Gras Terrine", price: "$32", description: "Fig jam, toasted brioche, truffle honey" },
        { name: "Scallop Carpaccio", price: "$28", description: "Yuzu vinaigrette, caviar, micro herbs" },
        { name: "Wild Mushroom Soup", price: "$24", description: "Porcini dust, truffle oil, chives" },
    ],
    mains: [
        { name: "Duck Confit", price: "$45", description: "Braised red cabbage, potato gratin, orange glaze" },
        { name: "Pan-Seared Halibut", price: "$48", description: "Saffron risotto, asparagus, beurre blanc" },
        { name: "Wagyu Beef Tenderloin", price: "$85", description: "Truffle mash, glazed carrots, red wine jus" },
    ],
    desserts: [
        { name: "Chocolate Soufflé", price: "$18", description: "Grand Marnier crème anglaise (allow 20 mins)" },
        { name: "Lemon Tart", price: "$16", description: "Meringue kisses, raspberry coulis" },
        { name: "Artisan Cheese Board", price: "$24", description: "Selection of French cheeses, honeycomb, crackers" },
    ]
};

const Menu = () => {
    const [activeTab, setActiveTab] = useState('starters');

    return (
        <section id="menu" style={{
            padding: '8rem 2rem',
            backgroundColor: 'var(--color-midnight-light)',
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h3 style={{ color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        Gastronomy
                    </h3>
                    <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Curated Menu</h2>
                </motion.div>

                {/* Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
                    {Object.keys(menuItems).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                background: 'none',
                                color: activeTab === tab ? 'var(--color-gold)' : 'rgba(253, 252, 240, 0.5)',
                                fontSize: '1.2rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                paddingBottom: '0.5rem',
                                borderBottom: activeTab === tab ? '1px solid var(--color-gold)' : '1px solid transparent',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Menu Items */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'grid', gap: '2rem' }}
                    >
                        {menuItems[activeTab].map((item, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                borderBottom: '1px solid rgba(197, 160, 89, 0.1)',
                                paddingBottom: '1.5rem',
                            }}>
                                <div>
                                    <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-cream)' }}>{item.name}</h4>
                                    <p style={{ color: 'rgba(253, 252, 240, 0.6)', fontStyle: 'italic' }}>{item.description}</p>
                                </div>
                                <span style={{ fontSize: '1.2rem', color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}>{item.price}</span>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Menu;
