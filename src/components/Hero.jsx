import React, { useState, useEffect } from 'react';

const Hero = () => {
    const bgImages = [
        "url('/images/hero_bg.png')",
        "url('https://drkellymccann.com/wp-content/uploads/2023/02/healthy-foods-featured.jpg')",
        "url('https://t4.ftcdn.net/jpg/17/21/34/11/240_F_1721341101_929iuhqT98HsQBsl2Z8hnG6YBvYBqSUw.jpg')",
        "url('https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80')",
        "url('https://img.freepik.com/premium-photo/top-view-people-enjoying-indian-food-together_198067-743024.jpg')",
        "url('https://static.vecteezy.com/system/resources/thumbnails/048/341/350/small/among-the-spiciest-non-vegetarian-foods-is-tandoori-chicken-photo.jpg')"
    ];
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg(prev => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [bgImages.length]);

    return (
        <section className="hero">
            {bgImages.map((bg, index) => (
                <div
                    key={index}
                    className={`hero-bg ${index === currentBg ? 'active' : ''}`}
                    style={{ backgroundImage: bg }}
                ></div>
            ))}
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-trust-badge">
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star"></i>
                    <span>5.0 Customer Rating</span>
                </div>
                <h1 className="hero-title">Delicious Catering for<br />Every Celebration</h1>
                <p className="hero-subtitle">Make your events unforgettable with flavorful veg and non-veg catering services in East GangaVaram, Thallur Mandal, Prakasam District, Andhra Pradesh. Tailored menus, authentic taste, perfect service.</p>
                <div className="hero-features">
                    <span className="feature-tag"><i className="ph ph-check-circle"></i> Veg & Non-Veg</span>
                    <span className="feature-tag"><i className="ph ph-check-circle"></i> Customizable Menus</span>
                    <span className="feature-tag"><i className="ph ph-check-circle"></i> 24-Hour Service</span>
                </div>
                <div className="hero-cta">
                    <a href="#contact" className="btn btn-primary btn-large">Book Catering Now</a>
                    <a href="tel:9848926374" className="btn btn-secondary btn-large"><i className="ph ph-phone"></i> Call Now</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
