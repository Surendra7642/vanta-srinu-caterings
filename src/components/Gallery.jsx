import React from 'react';

const Gallery = () => {
    const items = [
        { img: 'https://baanali.in/cdn/shop/articles/best-south-indian-food-wedding-lunch.jpg?v=1682338348&width=1100', text: 'Authentic Veg Dishes' },
        { img: 'https://english.cdn.zeenews.com/sites/default/files/2025/06/17/1772535-msa.png', text: 'Rich Non-Veg Curries' },
        { img: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80', text: 'Elegant Buffet Setups' },
        { img: 'https://img.freepik.com/premium-photo/indian-food-feast-with-chicken-tikka-masala_641503-86616.jpg', text: 'Party Food Displays' },
        { img: 'https://th.bing.com/th/id/OIP.bjFSu8y_kmlSuAWmUSErywHaET?w=314&h=182&c=7&r=0&o=7&pid=1.7&rm=3', text: 'Delicious Sweets' },
        { img: 'https://assets.architecturaldigest.in/photos/600849631dd783c692024e30/master/w_1600%2Cc_limit/Mumbai-Best-Biryani-Awadhi-gosht-chap-biryani-at-Ummrao.jpg', text: 'Delicious Biryanis' }
    ];

    return (
        <section id="gallery" className="gallery section-padding bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-badge">Portfolio</span>
                    <h2 className="section-title">Our Premium Catering Dishes</h2>
                    <p className="section-subtitle">A glimpse into our food preparation and elegant event setups.</p>
                </div>
                <div className="gallery-grid">
                    {items.map((item, i) => (
                        <div key={i} className="gallery-item">
                            <img src={item.img} alt={item.text} />
                            <div className="gallery-overlay">
                                <span>{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
