import React from 'react';
import { Droplet, Wrench, Shield, CheckCircle, Flame } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Droplet size={32} />,
      title: 'Plumbing & Heating',
      description: 'All aspects of plumbing and heating covered, from minor repairs to full installations.',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Repairs',
      description: 'Fast and reliable repairs for boilers, pipes, and all plumbing fixtures to get things running smoothly.',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Installation',
      description: 'Professional installation of new boilers, radiators, bathrooms, and complete heating systems.',
    },
    {
      icon: <Flame size={32} />,
      title: 'Annual Boiler Service',
      description: 'Keep your boiler running safely and efficiently with our comprehensive annual servicing.',
    },
    {
      icon: <Shield size={32} />,
      title: 'Landlord Safety',
      description: 'Certified Gas Safe Register inspections and landlord safety certificates.',
    }
  ];

  return (
    <section id="services" className="section" style={{ background: 'var(--bg-color-alt)', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">All aspects of...</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 48px auto', fontSize: '1.1rem' }}>
          From quick fixes to complete overhauls, our comprehensive range of services ensures your home stays warm and safe.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {services.map((service, index) => (
            <div key={index} className="service-card glass-panel hover-lift" style={{ padding: '40px', borderRadius: '20px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                width: '64px', height: '64px', 
                borderRadius: '16px', background: 'var(--gradient-orange)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', marginBottom: '24px',
                boxShadow: '0 8px 16px rgba(255, 90, 0, 0.2)'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--text-main)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, flexGrow: 1, fontSize: '1.05rem' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
