import React from 'react';

const Footer = () => (
    <>
        <section className="final-cta">
            <div className="cta-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?auto=format&fit=crop&w=1200&q=80')" }}></div>
            <div className="cta-overlay"></div>
            <div className="container cta-content text-center">
                <h2>Planning an Event? Let Us Handle the Food.</h2>
                <p>From family celebrations to large gatherings, Subbaih Caterings delivers premium food and excellent service.</p>
                <div className="cta-buttons">
                    <a href="#contact" className="btn btn-primary btn-large">Book Catering</a>
                    <a href="tel:9848926374" className="btn btn-outline btn-large text-white" style={{ borderColor: 'white', color: 'white' }}><i className="ph ph-phone"></i> Call Now</a>
                </div>
            </div>
        </section>

        <footer className="site-footer bg-dynamic-dark">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3>Subbaih Gaari Caterings (వంట శ్రీను) </h3>
                    <p>Premium Catering for Every Occasion. We bring luxury flavor, quality, and hospitality to your events.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><i className="ph-fill ph-facebook-logo"></i></a>
                        <a href="#" aria-label="Instagram"><i className="ph-fill ph-instagram-logo"></i></a>
                        <a href="https://wa.me/919848926374" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="ph-fill ph-whatsapp-logo"></i></a>
                    </div>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>9848926374</p>
                    <p>opp ZP High School ,near by Mazid, Boddikurapaadu road<br />East GangaVaram, Thallur(Md), Prakasam(Dist), AndhraPradesh</p>
                    <p>Open 24 Hours</p>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} Subbaih Gaari Caterings &ndash; All Rights Reserved.</p>
            </div>
        </footer>
    </>
);

export default Footer;
