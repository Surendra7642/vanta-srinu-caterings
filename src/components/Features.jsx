import React from 'react';

const Features = () => (
    <section className="features section-padding">
        <div className="container">
            <div className="features-wrapper">
                <div className="features-content">
                    <span className="section-badge">Why Choose Us</span>
                    <h2 className="section-title">Perfect For All Events</h2>
                    <p className="section-desc">We believe in delivering not just food, but a memorable culinary experience for your guests with a touch of elegance.</p>
                    <div className="features-list">
                        <div className="feature-item">
                            <div className="feature-icon"><i className="ph ph-bowl-food"></i></div>
                            <div>
                                <h4>Delicious Veg & Non-Veg Food</h4>
                                <p>Authentic recipes cooked with premium ingredients.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><i className="ph ph-faders"></i></div>
                            <div>
                                <h4>Customizable Menu Options</h4>
                                <p>You choose exactly what you want to serve.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><i className="ph ph-currency-inr"></i></div>
                            <div>
                                <h4>Affordable Premium Packages</h4>
                                <p>Luxurious taste and service at reasonable pricing.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><i className="ph ph-clock"></i></div>
                            <div>
                                <h4>24-Hour Availability</h4>
                                <p>We are ready to serve you round the clock.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-image">
                    <img src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=800&q=80" alt="Excellent Catering Service" />
                </div>
            </div>
        </div>
    </section>
);

export default Features;
