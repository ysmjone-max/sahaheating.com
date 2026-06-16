import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const scrollRef = useRef(null);

  const images = [
    { src: '/gallery/radiator-1.jpg', title: 'Designer Radiator Installation' },
    { src: '/gallery/luxury-bathroom-1.jpg', title: 'Luxury Bathroom Installation' },
    { src: '/gallery/pipework-1.jpg', title: 'Precision Manifold Pipework' },
    { src: '/gallery/designer-radiator-2.jpg', title: 'Premium Designer Radiators' },
    { src: '/gallery/boiler-1.jpg', title: 'Baxi Boiler Installation' },
    { src: '/gallery/luxury-shower-1.jpg', title: 'Modern Shower Enclosures' },
    { src: '/gallery/radiator-2.jpg', title: 'Modern Radiator Fitting' },
    { src: '/gallery/pipework-2.jpg', title: 'Copper Pipework Routing' },
    { src: '/gallery/boiler-2.jpg', title: 'Heating System Upgrades' }
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
            {images.map((item, i) => (
              <div key={i} style={{ minWidth: '100%', scrollSnapAlign: 'center', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
                <img src={item.src} alt={item.title} loading="lazy" style={{ width: '100%', height: '500px', objectFit: 'cover', filter: 'contrast(1.15) brightness(1.05) saturate(1.1)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 24px', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
                  <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{item.title}</h3>
                </div>
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
