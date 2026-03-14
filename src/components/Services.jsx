import React from 'react';

const Services = () => {
    const services = [
        { icon: 'ph-rings-wedding', title: 'Wedding Catering', desc: 'Elegant catering solutions for weddings and receptions, leaving a lasting impression on your guests.' },
        { icon: 'ph-cake', title: 'Birthday Party Catering', desc: 'Delicious food arrangements perfect for birthday celebrations, both intimate and grand.' },
        { icon: 'ph-plant', title: 'Veg Catering', desc: 'Fresh vegetarian dishes prepared with authentic flavors and traditional recipes.' },
        { icon: 'ph-cooking-pot', title: 'Non-Veg Catering', desc: 'Flavorful chicken, mutton, and seafood dishes loved by guests, cooked to perfection.' },
        { icon: 'ph-list-dashes', title: 'Custom Menu Catering', desc: 'Menus tailored precisely to your event needs and the diverse taste preferences of your guests.' },
        { icon: 'ph-briefcase', title: 'Corporate Event Catering', desc: 'Professional catering for office events, seminars, and business gatherings.' }
    ];

    return (
        <section id="services" className="services section-padding bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-badge">What We Offer</span>
                    <h2 className="section-title">Our Catering Services</h2>
                    <p className="section-subtitle">Comprehensive catering solutions tailored for every occasion and palate in a luxurious setting.</p>
                </div>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <div key={i} className="service-card">
                            <div className="service-icon"><i className={`ph ${s.icon}`}></i></div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
