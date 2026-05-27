import React from 'react';
import { ShieldCheck, Award, ThumbsUp, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Top Grid: Text and Van Photo */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          
          <div className="animate-slide-in-right">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Trusted Professionals in <span className="text-gradient">Heating & Plumbing</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '24px' }}>
              At SAM H Heating & Plumbing, we pride ourselves on delivering top-tier service across Middlesbrough, England and its surroundings. With years of experience and full Gas Safe registration, we handle every job with precision, safety, and a commitment to customer satisfaction.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px' }}>
              {[
                { 
                  icon: <ShieldCheck size={24} color="var(--primary-blue)" />, 
                  title: 'Gas Safe Registered', 
                  desc: 'Fully compliant and certified for all gas works.',
                  link: 'https://www.gassaferegister.co.uk/businesscompetencies?ep=1xPOGK1AdTeDy4hfLti5P%252bDWdGsTrdvrfTppefbZbQrYlBiMCC0rXXnJQpu7IPU%252b%252bRWN9MvuMdfrQ88mdu%252fZWPyfSAZ%252b17MiIljiPj5tMcvcKxTtHsOe2K6FT8fb9HZ1OBbK3ApVZubC92Ov7cRyLQ%253d%253d'
                },
                { 
                  icon: <Award size={24} color="var(--primary-orange)" />, 
                  title: 'Premium Brands', 
                  desc: 'We expertly install and service Ideal, BAXI, Vaillant, and Worcester Bosch.' 
                },
                { 
                  icon: <ThumbsUp size={24} color="var(--primary-blue)" />, 
                  title: 'Satisfaction Guaranteed', 
                  desc: 'Over 150+ 5-star reviews from happy customers.' 
                }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 82, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', padding: '8px', marginLeft: '-8px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary-orange)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          {item.title} 
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                      </a>
                    ) : (
                      <>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '4px' }}>{item.title}</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Van Photo Column */}
          <div className="animate-fade-up" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img src="/van.jpg" alt="SAM H Heating & Plumbing Fully Equipped Van" loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 24px', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)' }}>
              <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem', fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Fully Equipped Mobile Workshop</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', margin: '8px 0 0 0', fontSize: '1.05rem', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Ready to respond rapidly across Middlesbrough</p>
            </div>
          </div>
          
        </div>

        {/* Horizontal Brands Strip */}
        <div className="animate-fade-up" style={{ marginTop: '80px', paddingTop: '48px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '40px', fontWeight: 600 }}>Partnering with Premium Brands</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '64px' }}>
            <img src="/BAXI_logo.svg.png" alt="Baxi" loading="lazy" style={{ height: '40px', objectFit: 'contain', filter: 'brightness(1.2) contrast(1.2)' }} />
            <img src="/Worcester-Bosch-Logo.png" alt="Worcester Bosch Group" loading="lazy" style={{ height: '45px', objectFit: 'contain', filter: 'brightness(1.2) contrast(1.2)' }} />
            <img src="/vaillant-logo-aw-2104046.jpg" alt="Vaillant" loading="lazy" style={{ height: '45px', objectFit: 'contain', borderRadius: '4px' }} />
            <a 
              href="https://www.gassaferegister.co.uk/businesscompetencies?ep=1xPOGK1AdTeDy4hfLti5P%252bDWdGsTrdvrfTppefbZbQrYlBiMCC0rXXnJQpu7IPU%252b%252bRWN9MvuMdfrQ88mdu%252fZWPyfSAZ%252b17MiIljiPj5tMcvcKxTtHsOe2K6FT8fb9HZ1OBbK3ApVZubC92Ov7cRyLQ%253d%253d"
              target="_blank"
              rel="noreferrer"
              style={{ transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src="/gassafe-logo.png" alt="Gas Safe Register" loading="lazy" style={{ height: '65px', objectFit: 'contain' }} />
            </a>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="animate-fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginTop: '80px', paddingTop: '64px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
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
