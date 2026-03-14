import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const initialReviews = [
        { text: `"Very tasty veg and non-veg food. Customizable menus and elegant service. They made our family function truly special!"`, author: 'Rahul M.', event: 'Family Function', rating: 5 },
        { text: `"Delicious food and premium service. The rates are very reasonable compared to the incredible luxury they provide."`, author: 'Sneha P.', event: 'Birthday Party', rating: 5 },
        { text: `"Yummy food and classic experience. Highly recommended by customers for a reason. Will definitely book again."`, author: 'Kiran V.', event: 'Wedding Event', rating: 5 }
    ];

    const [reviews, setReviews] = useState(() => {
        const savedReviews = localStorage.getItem('caterings_reviews');
        if (savedReviews) {
            try {
                return JSON.parse(savedReviews);
            } catch (e) {
                return initialReviews;
            }
        }
        return initialReviews;
    });

    const [showForm, setShowForm] = useState(false);
    const [displayCount, setDisplayCount] = useState(3);

    const [newReview, setNewReview] = useState({
        author: '',
        event: '',
        rating: 5,
        text: ''
    });

    useEffect(() => {
        localStorage.setItem('caterings_reviews', JSON.stringify(reviews));
    }, [reviews]);

    const handleReviewChange = (e) => {
        setNewReview({ ...newReview, [e.target.id]: e.target.value });
    };

    const handleStarClick = (ratingValue) => {
        setNewReview({ ...newReview, rating: ratingValue });
    };

    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i key={i} className={i <= rating ? "ph-fill ph-star" : "ph ph-star"} style={{ color: i <= rating ? 'var(--secondary-color)' : 'var(--text-light)' }}></i>
            );
        }
        return stars;
    };

    const submitReview = (e) => {
        e.preventDefault();

        if (!newReview.text || !newReview.author) return;

        const addedReview = {
            text: `"${newReview.text}"`,
            author: newReview.author,
            event: newReview.event || 'Customer Event',
            rating: newReview.rating
        };

        setReviews([addedReview, ...reviews]);

        const ownerPhone = "919848926374";
        const waMessage = `*New Customer Review!* ⭐⭐⭐⭐⭐
        
*Customer Name:* ${addedReview.author}
*Event type:* ${addedReview.event}
*Rating given:* ${addedReview.rating} out of 5

*Their Feedback:*
${addedReview.text}`;

        const encodedMessage = encodeURIComponent(waMessage);
        const waLink = `https://wa.me/${ownerPhone}?text=${encodedMessage}`;

        setNewReview({ author: '', event: '', rating: 5, text: '' });
        setShowForm(false);
        window.open(waLink, '_blank');
    };

    return (
        <section id="reviews" className="reviews section-padding bg-dynamic-dark">
            <div className="container">
                <div className="section-header text-center">
                    <div className="review-stars-header">
                        {[1, 2, 3, 4, 5].map(i => <i key={i} className="ph-fill ph-star"></i>)}
                    </div>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">Consistently rated 5.0 out of 5 for our premium experiences.</p>
                </div>
                <div className="reviews-grid">
                    {reviews.slice(0, displayCount).map((r, i) => (
                        <div key={i} className="review-card">
                            <div className="review-stars">
                                {renderStars(r.rating || 5)}
                            </div>
                            <p className="review-text">{r.text}</p>
                            <div className="review-author">
                                <strong>{r.author}</strong>
                                <span>{r.event}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    {!showForm ? (
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            {reviews.length > displayCount && (
                                <button className="btn btn-outline" onClick={() => setDisplayCount(reviews.length)}>
                                    Show More Reviews
                                </button>
                            )}
                            <button className="btn btn-primary" onClick={() => setShowForm(true)}>
                                <i className="ph ph-chat-teardrop-text"></i> Leave a Review
                            </button>
                        </div>
                    ) : (
                        <div className="review-form-container">
                            <h3 className="mb-3">Share Your Experience</h3>
                            <form onSubmit={submitReview} className="booking-form text-left" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="author">Your Name</label>
                                        <input type="text" id="author" required placeholder="E.g., John Doe" value={newReview.author} onChange={handleReviewChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="event">Event Type</label>
                                        <input type="text" id="event" placeholder="E.g., Wedding Reception" value={newReview.event} onChange={handleReviewChange} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Your Rating</label>
                                    <div className="rating-selector">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <i
                                                key={star}
                                                className={star <= newReview.rating ? "ph-fill ph-star" : "ph ph-star"}
                                                onClick={() => handleStarClick(star)}
                                                style={{ cursor: 'pointer', fontSize: '2rem', color: star <= newReview.rating ? 'var(--secondary-color)' : 'var(--text-light)', marginRight: '5px' }}
                                            ></i>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="text">Your Feedback</label>
                                    <textarea id="text" rows="3" required placeholder="Tell us how we did..." value={newReview.text} onChange={handleReviewChange}></textarea>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
                                    <button type="submit" className="btn btn-primary">Submit Review <i className="ph-fill ph-paper-plane-right" style={{ marginLeft: '5px' }}></i></button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
