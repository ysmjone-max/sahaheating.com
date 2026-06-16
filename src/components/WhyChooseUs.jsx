import React from 'react';
import { ShieldCheck, HeartHandshake, Clock, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      icon: <HeartHandshake size={28} />,
      title: 'Honest Advice & Transparent Pricing',
      description: 'We believe in building strong relationships with our customers. You will always receive honest advice and a free, transparent quotation without hidden fees.'
    },
    {
      icon: <Clock size={28} />,
      title: 'Punctual & Reliable',
      description: 'We respect your time and property. Our team is punctual, efficient, and ensures a clean, hazard-free environment while working.'
    },
    {
      icon: <ThumbsUp size={28} />,
      title: 'Premium Craftsmanship',
      description: 'We deliver quality work using only the best materials and tools in the business, guaranteeing long-lasting results for your home.'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Health & Safety Compliant',
      description: 'As a Gas Safe registered business, strict safety standards are our top priority. We ensure all work is completed meticulously to prevent any future issues.'
    }
  ];

  return (
    <section id="why-choose-us" className="section" style={{ background: '#0B1120', position: 'relative', zIndex: 10, color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
          
          <div className="animate-fade-up">
            <p style={{ color: 'var(--primary-orange)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              What to Expect
            </p>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', fontWeight: 800 }}>
              How do we uphold our excellent reputation?
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '32px' }}>
              Choose us as your partner, and experience the SAM H Heating & Plumbing difference with our expert craftsmanship and unparalleled customer service.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {points.map((point, index) => (
                <li key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '48px', height: '48px', 
                    borderRadius: '12px', background: 'rgba(255, 90, 0, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary-orange)', flexShrink: 0 
                  }}>
                    {point.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', margin: '0 0 8px 0', color: 'white', fontWeight: 600 }}>{point.title}</h4>
                    <p style={{ color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-in-right" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-20px', background: 'var(--gradient-mixed)', filter: 'blur(40px)', opacity: 0.3, borderRadius: '24px' }}></div>
            <img 
              src="/gallery/luxury-bathroom-1.jpg" 
              alt="Premium Plumbing Work" 
              style={{ width: '100%', borderRadius: '24px', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.5)', objectFit: 'cover', height: '600px' }} 
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
