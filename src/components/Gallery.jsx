import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const scrollRef = useRef(null);

  const images = [
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1585909695084-3b6807802db4?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="section" style={{ background: 'var(--bg-color-alt)', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '16px', fontWeight: 800 }}>
            Our Recent Work
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Take a look at some of our recent plumbing and heating projects carried out for our satisfied customers.
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          
          <button 
            onClick={() => scroll('left')}
            style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 2, background: 'rgba(0,0,0,0.4)', color: 'white', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <ChevronLeft size={28} />
          </button>

          <div 
            ref={scrollRef}
            className="gallery-scroll"
            style={{ 
              display: 'flex', 
              gap: '24px', 
              overflowX: 'auto', 
              scrollSnapType: 'x mandatory', 
              scrollbarWidth: 'none',
              paddingBottom: '16px',
              borderRadius: '16px'
            }}
          >
            {images.map((img, i) => (
              <div key={i} style={{ minWidth: '100%', scrollSnapAlign: 'center', borderRadius: '16px', overflow: 'hidden' }}>
                <img src={img} alt={`Recent Work ${i + 1}`} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 2, background: 'rgba(0,0,0,0.4)', color: 'white', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <ChevronRight size={28} />
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default Gallery;
