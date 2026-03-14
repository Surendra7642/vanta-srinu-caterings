import React, { useState, useEffect } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Features from './components/Features.jsx';
import Gallery from './components/Gallery.jsx';
import Reviews from './components/Reviews.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
    // 1. Sticky Header State
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        closeMobileMenu();
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 70; // approx header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/* Sticky Header */}
            <header className={`site-header bg-dynamic-dark glass-header ${scrolled ? 'scrolled' : ''}`} id="header">
                <div className="container header-container">
                    <a href="#" className="logo">
                        <img src="/images/ambassador.jpg.jpeg" alt="Vanta Srinu - Brand Ambassador" className="brand-ambassador-img" />
                        <span className="logo-text">Subbaih Gaari Caterings (వంట శ్రీను)</span>
                    </a>

                    <nav className="main-nav">
                        <ul className="nav-links">
                            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                            <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
                            <li><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>Gallery</a></li>
                            <li><a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')}>Reviews</a></li>
                            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <a href="tel:9848926374" className="btn btn-outline"><i className="ph ph-phone"></i> Call Now</a>
                        <a href="#contact" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>Book Now</a>
                    </div>

                    <button className="mobile-menu-btn" aria-label="Toggle menu" onClick={toggleMobileMenu}>
                        <i className={`ph ${mobileMenuOpen ? 'ph-x' : 'ph-list'}`}></i>
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
                    <ul className="mobile-nav-links">
                        <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                        <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
                        <li><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>Gallery</a></li>
                        <li><a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')}>Reviews</a></li>
                        <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                    </ul>
                </div>
            </header>

            <Hero />
            <About />
            <Services />
            <Features />
            <Gallery />
            <Reviews />
            <Contact />
            <Footer />

            {/* Floating WhatsApp Button */}
            <a href="https://wa.me/919848926374" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
                <i className="ph-fill ph-whatsapp-logo"></i>
            </a>
        </>
    );
};

export default App;
