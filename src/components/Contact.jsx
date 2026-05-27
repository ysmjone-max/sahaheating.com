import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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
        
        {/* Contact Form and Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '64px', marginBottom: '80px' }}>
          
          {/* Form */}
          <div className="animate-fade-up" style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <h3 style={{ fontSize: '2rem', margin: '0 0 8px 0', color: 'white', fontWeight: 700 }}>Send us a Message</h3>
            <p style={{ color: '#9CA3AF', marginBottom: '32px', fontSize: '0.95rem' }}>We aim to respond to all inquiries within 24 hours.</p>
            
            <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Replace value with your Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px' }}>
                <input type="text" name="name" placeholder="Your Name" required style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                <input type="tel" name="phone" placeholder="Phone" style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>
              <input type="email" name="email" placeholder="Your Email" required style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white', fontSize: '1rem', boxSizing: 'border-box', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              <textarea name="message" placeholder="How can we help you? (e.g. Boiler Service, Emergency Repair)" required rows="4" style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white', fontSize: '1rem', resize: 'vertical', boxSizing: 'border-box', outline: 'none', fontFamily: 'inherit' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}></textarea>
              <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: '1.1rem', marginTop: '8px', border: 'none', cursor: 'pointer', borderRadius: '8px', fontWeight: 600, transition: 'transform 0.2s', width: '100%' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>Send Message</button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="animate-slide-in-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 16px 0', color: 'white', fontWeight: 800 }}>Get in Touch</h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '48px' }}>
              Whether you need an emergency repair, a routine boiler service, or a complete installation quote, our Gas Safe registered team is ready to help. Reach out directly via phone or email.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <li>
                <a href="tel:+447424966646" style={{ display: 'flex', alignItems: 'center', gap: '24px', textDecoration: 'none' }} className="contact-link">
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 90, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease', flexShrink: 0 }}>
                    <Phone size={24} color="var(--primary-orange)" />
                  </div>
                  <div>
                    <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Call Us 24/7</p>
                    <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, margin: 0, letterSpacing: '0.5px', transition: 'color 0.3s ease' }} className="contact-text-orange">+447424966646</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:sahaheating@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '24px', textDecoration: 'none' }} className="contact-link">
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0, 82, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease', flexShrink: 0 }}>
                    <Mail size={24} color="var(--primary-blue)" />
                  </div>
                  <div>
                    <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Email Us</p>
                    <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: 600, margin: 0, transition: 'color 0.3s ease' }} className="contact-text-blue">sahaheating@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={24} color="white" />
                  </div>
                  <div>
                    <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Service Area</p>
                    <p style={{ color: 'white', fontSize: '1.1rem', fontWeight: 500, margin: 0, lineHeight: 1.5 }}>Middlesbrough, England<br/>and surrounding areas</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Setup */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '32px', 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src="/logo.png" alt="SAM H Heating & Plumbing Logo" style={{ height: '40px', objectFit: 'contain' }} />
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem', margin: 0 }}>
              &copy; {new Date().getFullYear()} <span style={{ color: 'white', fontWeight: 600 }}>SAM H Heating & Plumbing</span>. All rights reserved.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span style={{ color: '#9CA3AF', fontSize: '0.95rem', fontWeight: 600 }}>Follow Us:</span>
            <a href="https://instagram.com/sam_h_heating_and_plumbing" target="_blank" rel="noreferrer" className="social-icon" style={{ color: 'white', transition: 'color 0.3s', display: 'flex' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-orange)'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
              <InstagramIcon />
            </a>
            <a href="https://facebook.com/sam_h_heating_and_plumbing" target="_blank" rel="noreferrer" className="social-icon" style={{ color: 'white', transition: 'color 0.3s', display: 'flex' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-blue)'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
              <FacebookIcon />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Contact;
