import React from 'react';
import { MessageSquare, Calculator, CalendarCheck } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <MessageSquare size={32} />,
      title: '1. Tell us the details',
      description: 'Reach out to us using whichever contact method suits you, and tell us about your project or plumbing emergency.',
    },
    {
      icon: <Calculator size={32} />,
      title: '2. We provide a quote',
      description: 'We will assess the details and provide you with a transparent, no-obligation quote to have the work carried out.',
    },
    {
      icon: <CalendarCheck size={32} />,
      title: '3. Receive a start date',
      description: "If you're satisfied with the quote, we will arrange a convenient date for us to complete the work to the highest standards.",
    }
  ];

  return (
    <section id="process" className="section" style={{ background: 'var(--bg-color)', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">Our Process</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 48px auto', fontSize: '1.1rem' }}>
          Hiring us to take care of your plumbing & heating work could not be simpler. Just get in touch with us and tell us what you need, and we will arrange the rest!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {steps.map((step, index) => (
            <div key={index} className="glass-panel hover-lift" style={{ padding: '40px', borderRadius: '20px', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
              <div style={{ 
                width: '80px', height: '80px', 
                borderRadius: '50%', background: 'var(--gradient-mixed)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', marginBottom: '24px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
              }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--text-main)' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, flexGrow: 1, fontSize: '1.05rem' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
