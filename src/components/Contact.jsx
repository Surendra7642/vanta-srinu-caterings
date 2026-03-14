import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        eventType: '',
        guests: '',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const ownerPhone = "919848926374";
        const waMessage = `*New Premium Catering Booking Inquiry!* 🍽️
        
*Customer Details:*
👤 Name: ${formData.name}
📱 Phone: ${formData.phone}

*Event Details:*
🎉 Type: ${formData.eventType}
👥 Guests: ${formData.guests}
📅 Date: ${formData.date}

*Additional Message/Preferences:*
${formData.message || 'No special preferences provided.'}

_Please reply to the customer to confirm their booking._`;

        const encodedMessage = encodeURIComponent(waMessage);
        const waLink = `https://wa.me/${ownerPhone}?text=${encodedMessage}`;

        window.open(waLink, '_blank');
    };

    return (
        <section id="contact" className="contact section-padding bg-light">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-form-container">
                        <span className="section-badge">Get in Touch</span>
                        <h2 className="section-title">Book Catering for Your Event</h2>
                        <p className="section-desc mb-4" style={{color: 'var(--text-light)'}}>Fill out the form below to send your booking details directly to us via WhatsApp.</p>

                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" required placeholder="Your Full Name" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" required placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="eventType">Event Type</label>
                                    <select id="eventType" required value={formData.eventType} onChange={handleChange}>
                                        <option value="" disabled>Select Event Type</option>
                                        <option value="Wedding / Reception">Wedding / Reception</option>
                                        <option value="Birthday Party">Birthday Party</option>
                                        <option value="Corporate Event">Corporate Event</option>
                                        <option value="Family Function">Family Function</option>
                                        <option value="Other Gathering">Other Gathering</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="guests">Number of Guests</label>
                                    <input type="number" id="guests" required placeholder="E.g., 200" value={formData.guests} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Event Date</label>
                                <input type="date" id="date" required value={formData.date} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message / Preferences (Optional)</label>
                                <textarea id="message" rows="4" placeholder="Any specific dietary requirements (e.g., Pure Veg only)" value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">Send Booking via WhatsApp <i className="ph-fill ph-whatsapp-logo" style={{ marginLeft: '8px', fontSize: '1.2rem', verticalAlign: 'middle' }}></i></button>
                        </form>
                    </div>

                    <div className="contact-info-container">
                        <div className="info-card">
                            <h3 className="mb-3">Serving East Gangavaram & Nearby Villages</h3>
                            <div className="info-item">
                                <i className="ph-fill ph-map-pin"></i>
                                <div>
                                    <strong>Address</strong>
                                    <p>opp ZP High School<br />near by Mazid, Boddikurapaadu road<br />East GangaVaram, Thallur(Md), Prakasam(Dist), AndhraPradesh 523264</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="ph-fill ph-phone-call"></i>
                                <div>
                                    <strong>Phone</strong>
                                    <p><a href="tel:9848926374" style={{color: 'var(--white)'}}>9848926374</a></p>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="ph-fill ph-clock"></i>
                                <div>
                                    <strong>Working Hours</strong>
                                    <p>Open 24 Hours</p>
                                </div>
                            </div>
                            <div className="map-container mt-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.7265100218756!2d79.84252339999999!3d15.7126603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ae5006c7684db%3A0xa662ffbe84448f72!2z4LC14LCC4LCf4LC-IOCwtuCxjeCwsOCxgOCwqOCxgSDgsJXgsYfgsJ_gsLDgsL_gsILgsJfgsY3gsLjgsY0!5e0!3m2!1sen!2sin!4v1773318520616!5m2!1sen!2sin"
                                    width="100%" height="250" style={{ border: 0, borderRadius: '8px', filter: 'invert(90%) hue-rotate(180deg)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
