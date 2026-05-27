import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ 
      padding: isScrolled ? '12px 0' : '24px 0',
      background: isScrolled ? 'rgba(17, 24, 39, 0.85)' : '#111827',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
      boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
      color: 'white',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        
        {/* Logo Area */}
        <div style={{ flex: '1 1 0', zIndex: 1001, display: 'flex', alignItems: 'center' }}>
          <img 
            src="/logo.png" 
            alt="SAM H Heating & Plumbing" 
            style={{ 
              height: isScrolled ? '45px' : '90px', 
              transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              objectFit: 'contain'
            }} 
          />
        </div>

        {/* Desktop Nav - Centered */}
        <div style={{ display: 'none', gap: '32px', alignItems: 'center', justifyContent: 'center', flex: '2 1 0' }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Call Button - Right Aligned */}
        <div style={{ display: 'none', alignItems: 'center', justifyContent: 'flex-end', flex: '1 1 0' }} className="desktop-nav">
          <a href="tel:+447424966646" className="btn-primary pulse-btn" style={{ padding: '12px 24px', fontSize: '1rem' }}>
            <Phone size={18} style={{ marginRight: '8px' }} />
            +447424966646
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', flex: '1 1 0' }} className="mobile-toggle-wrapper">
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ background: 'transparent', color: 'white', zIndex: 1001, border: 'none', cursor: 'pointer' }}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>


      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', 
          background: '#111827', display: 'flex', flexDirection: 'column', 
          justifyContent: 'center', alignItems: 'center', gap: '32px', zIndex: 1000 
        }}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', textDecoration: 'none' }}>
              {link.name}
            </a>
          ))}
          <a href="tel:+447424966646" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.2rem', marginTop: '16px' }}>
            <Phone size={20} style={{ marginRight: '12px' }} />
            +447424966646
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
