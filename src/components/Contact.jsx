import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );

  return (
    <footer id="contact" style={{ background: '#0B1120', color: 'white', paddingTop: '0', paddingBottom: '32px', position: 'relative', zIndex: 10 }}>
      {/* Top Gradient Separator */}
      <div style={{ width: '100%', height: '4px', background: 'var(--gradient-mixed)' }}></div>

      {/* Full-width Emergency Banner */}
      <div style={{ background: 'var(--primary-orange)', padding: '24px 0', textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <h3 style={{ margin: 0, color: 'white', fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Emergency Callout Available 24/7</h3>
          <p style={{ margin: '8px 0 0 0', color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem', fontWeight: 500 }}>Fast response across Middlesbrough. Call <a href="tel:+447424966646" style={{ color: 'white', textDecoration: 'underline', fontWeight: 700 }}>+447424966646</a> immediately.</p>
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '40px', 
          marginBottom: '64px' 
        }}>
          
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img 
              src="/logo.png" 
              alt="SAM H Heating & Plumbing" 
              style={{ height: '70px', objectFit: 'contain', display: 'block', alignSelf: 'flex-start' }} 
            />
            <p style={{ fontSize: '1.2rem', fontWeight: 700, margin: '8px 0', color: 'white', lineHeight: 1.4 }}>
              Trusted Professionals in Heating and Plumbing
            </p>
            <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>
              Fully insured, Gas Safe registered, and dedicated to excellence.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'white', fontWeight: 700 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Home', 'Our Services', 'About Us', 'Reviews'].map((item) => {
                const id = item === 'Home' ? '#home' : item === 'Our Services' ? '#services' : item === 'About Us' ? '#about' : '#reviews';
                return (
                  <li key={item}>
                    <a href={id} className="footer-link" style={{ fontSize: '1.05rem', fontWeight: 500 }}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'white', fontWeight: 700 }}>
              Contact Info
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <li style={{ marginBottom: '16px' }}>
                <a href="tel:+447424966646" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }} className="contact-link">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 90, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }}>
                    <Phone size={20} color="var(--primary-orange)" />
                  </div>
                  <div>
                    <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Call Us 24/7</p>
                    <p style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, margin: 0, letterSpacing: '0.5px', transition: 'color 0.3s ease' }} className="contact-text-orange">+447424966646</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:sahaheating@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', marginTop: '4px' }} className="contact-link">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 82, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }}>
                    <Mail size={20} color="var(--primary-blue)" />
                  </div>
                  <div>
                    <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Us</p>
                    <p style={{ color: 'white', fontSize: '1.05rem', fontWeight: 600, margin: 0, transition: 'color 0.3s ease' }} className="contact-text-blue">sahaheating@gmail.com</p>
                  </div>
                </a>
              </li>
              <li style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color="white"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Address</p>
                    <p style={{ color: 'white', fontSize: '0.95rem', fontWeight: 500, margin: 0, lineHeight: 1.4 }}>Middlesbrough, England<br/>and its surroundings</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'white', fontWeight: 700 }}>
              Follow Us
            </h4>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.6 }}>
              Stay updated with our latest projects and offers on social media.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://instagram.com/sam_h_heating_and_plumbing" target="_blank" rel="noreferrer" className="social-icon">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com/sam_h_heating_and_plumbing" target="_blank" rel="noreferrer" className="social-icon">
                <FacebookIcon />
              </a>
            </div>
          </div>

        </div>
        
        {/* Footer Bottom */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '32px', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          color: '#9CA3AF', 
          fontSize: '0.95rem',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} <span style={{ color: 'white', fontWeight: 600 }}>SAM H Heating & Plumbing</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
