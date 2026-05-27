import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, var(--primary-blue) 0%, #0b1120 100%)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10,
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
          Ready for a Professional Service?
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '32px', color: '#9CA3AF' }}>
          Don't wait for a small leak to become a big problem. Contact us now for a free, no-obligation quote and let our experts handle the rest.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn-primary" style={{ background: 'var(--gradient-orange)', color: 'white', border: 'none' }}>
            Get a Free Quote
          </a>
          <a href="tel:+447424966646" className="btn-secondary" style={{ background: 'transparent', borderColor: 'white', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Phone size={20} />
            Call +447424966646
          </a>
          <a href="https://wa.me/447424966646" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: '#25D366', color: 'white', border: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageCircle size={20} />
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
