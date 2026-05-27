import React from 'react';
import { ShieldCheck, Award, ThumbsUp, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          
          <div className="animate-slide-in-right">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Trusted Professionals in <span className="text-gradient">Heating & Plumbing</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '24px' }}>
              At SAM H Heating & Plumbing, we pride ourselves on delivering top-tier service across London. With years of experience and full Gas Safe registration, we handle every job with precision, safety, and a commitment to customer satisfaction.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
              {[
                { icon: <ShieldCheck size={24} color="var(--primary-blue)" />, title: 'Gas Safe Registered', desc: 'Fully compliant and certified for all gas works.' },
                { icon: <Award size={24} color="var(--primary-orange)" />, title: 'Premium Brands', desc: 'We expertly install and service Ideal, BAXI, and Worcester Bosch.' },
                { icon: <ThumbsUp size={24} color="var(--primary-blue)" />, title: 'Satisfaction Guaranteed', desc: 'Over 150+ 5-star reviews from happy customers.' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 82, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '48px', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '32px' }}>Brands We Trust</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src="/ideal.png" alt="Ideal" style={{ height: '40px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0052FF', letterSpacing: '2px', display: 'none' }}>ideal</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src="/baxi.png" alt="Baxi" style={{ height: '40px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1B365D', letterSpacing: '2px', display: 'none' }}>BAXI</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src="/worcester.png" alt="Worcester Bosch Group" style={{ height: '40px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#D32128', letterSpacing: '1px', display: 'none' }}>WORCESTER</div>
              </div>

              <a 
                href="https://www.gassaferegister.co.uk/businesscompetencies?ep=1xPOGK1AdTeDy4hfLti5P%252bDWdGsTrdvrfTppefbZbQrYlBiMCC0rXXnJQpu7IPU%252b%252bRWN9MvuMdfrQ88mdu%252fZWPyfSAZ%252b17MiIljiPj5tMcvcKxTtHsOe2K6FT8fb9HZ1OBbK3ApVZubC92Ov7cRyLQ%253d%253d"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px', transition: 'transform 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img src="/gassafe.png" alt="Gas Safe Register" style={{ height: '60px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#FABB05', display: 'none' }}>GAS SAFE REGISTER</div>
              </a>

            </div>
          </div>
          
        </div>

        {/* Trust Stats */}
        <div className="animate-fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginTop: '80px', textAlign: 'center' }}>
          {[
            { icon: <Users size={32} />, stat: '500+', label: 'Happy Customers' },
            { icon: <Award size={32} />, stat: '10+', label: 'Years Experience' },
            { icon: <Clock size={32} />, stat: '24/7', label: 'Available Service' },
            { icon: <ThumbsUp size={32} />, stat: '100%', label: 'Satisfaction Rate' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0, 82, 255, 0.1)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                {item.icon}
              </div>
              <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 8px 0' }}>{item.stat}</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0, fontWeight: 500 }}>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
