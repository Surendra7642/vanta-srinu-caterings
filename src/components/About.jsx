import React from 'react';

const About = () => (
    <section id="about" className="about section-padding bg-dynamic-dark">
        <div className="container about-container">
            <div className="about-image">
                <div className="image-wrapper">
                    <img src="/images/shared image (1).jpg" alt="Catering Service Preparation" />
                    <div className="experience-badge">
                        <span className="number">30+ years</span>
                        <span className="text">Experience<br />Always giving best</span>
                    </div>
                </div>
            </div>
            <div className="about-content">
                <span className="section-badge">About Us</span>
                <h2 className="section-title">Trusted Catering Service in East GangaVaram, Thallur Mandal, Prakasam District.</h2>
                <p className="section-desc">Subbaih Gaari Caterings (వంట శ్రీను) provides delicious food and reliable catering services for weddings, parties, family functions, and corporate events. Our experienced team prepares authentic vegetarian and non-vegetarian dishes that delight guests and make every occasion memorable.</p>
                <p className="section-desc">We focus on quality ingredients, customizable menus, and excellent service so you can enjoy your celebration without worrying about food arrangements.</p>
                <ul className="about-list">
                    <li><i className="ph-fill ph-check-circle"></i> Owned business</li>
                    <li><i className="ph-fill ph-check-circle"></i> Affordable catering packages</li>
                    <li><i className="ph-fill ph-check-circle"></i> Trusted by local customers</li>
                </ul>
            </div>
        </div>
    </section>
);

export default About;
