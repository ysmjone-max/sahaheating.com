import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "David Smith",
      date: "2 weeks ago",
      text: "Sam was brilliant. Arrived on time, found the fault with my boiler straight away, and fixed it within the hour. Highly recommend his services!",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      date: "1 month ago",
      text: "Excellent service from start to finish. Had a completely new heating system installed. Very professional, tidy, and great communication throughout.",
      rating: 5
    },
    {
      name: "Michael T.",
      date: "3 months ago",
      text: "Needed a landlord gas safety certificate done quickly. Sam accommodated my schedule and was very thorough. Will definitely use again.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="section" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="section-title">What Our Customers Say</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>5.0</span>
            <div style={{ display: 'flex', color: '#FABB05' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '1.1rem' }}>
            Based on Google Reviews
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '64px' }}>
          {reviews.map((review, i) => (
            <div key={i} className="hover-lift animate-fade-up" style={{ 
              background: '#FFFFFF',
              padding: '32px', 
              borderRadius: '20px', 
              animationDelay: `${i * 0.1}s`,
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid #E5E7EB',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--gradient-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.3rem', boxShadow: '0 4px 10px rgba(0, 68, 204, 0.2)' }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 700 }}>{review.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>{review.date}</span>
                  </div>
                </div>
                {/* Simulated Google G Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div style={{ display: 'flex', color: '#FABB05', marginBottom: '16px' }}>
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontStyle: 'italic', flexGrow: 1 }}>
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a 
            href="https://share.google/xYG04dGoS9OpQZUO9" 
            target="_blank" 
            rel="noreferrer"
            className="btn-primary animate-fade-up" 
            style={{ animationDelay: '0.4s', padding: '16px 32px' }}
          >
            Leave us a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
