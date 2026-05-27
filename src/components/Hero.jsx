import React from 'react';
import { ArrowRight, CheckCircle2, Phone, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{ 
      paddingTop: '160px', 
      paddingBottom: '80px', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <div className="animate-fade-up" style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(0, 68, 204, 0.1)', color: 'var(--primary-blue)', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '24px', letterSpacing: '0.5px' }}>
            London's Premier Heating & Plumbing
          </div>

          <h1 className="hero-title animate-fade-up" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1, animationDelay: '0.1s' }}>
            Expert Solutions for a <span className="text-gradient">Warmer Home</span>
          </h1>
          
          <p className="animate-fade-up" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.7, animationDelay: '0.2s', maxWidth: '650px', margin: '0 auto 16px auto' }}>
            From emergency repairs to full boiler installations, our Gas Safe certified engineers deliver fast, reliable, and premium service you can trust.
          </p>

          <p className="animate-fade-up" style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '40px', fontWeight: 500, animationDelay: '0.2s', maxWidth: '650px', margin: '0 auto 40px auto' }}>
            Guarantee ~ All major works carried out are guaranteed for 12 months.
          </p>

          <div className="animate-fade-up" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', animationDelay: '0.3s', marginBottom: '24px' }}>
            <a href="tel:07424966646" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={22} />
              Call 07424 966646
            </a>
            <a href="#services" className="btn-secondary" style={{ padding: '16px 36px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Our Services
              <ArrowRight size={22} />
            </a>
          </div>

          <div className="animate-fade-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-main)', fontWeight: 600, animationDelay: '0.3s' }}>
            <Clock size={20} color="var(--primary-blue)" />
            24/7 Emergency Service Available
          </div>

          <div className="animate-fade-up" style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '48px', flexWrap: 'wrap', animationDelay: '0.4s' }}>
            {['Gas Safe Registered', 'Fast Response', 'Fully Insured'].map(feature => (
              <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontWeight: 500 }}>
                <CheckCircle2 size={20} color="var(--primary-blue)" />
                {feature}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
