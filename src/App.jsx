import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import RibbonBackground from './components/RibbonBackground';

import CtaBanner from './components/CtaBanner';
import Gallery from './components/Gallery';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <>
      <RibbonBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <About />
        <Gallery />
        <Reviews />
      </main>
      <CtaBanner />
      <Contact />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/447424966646" 
        target="_blank" 
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
}

export default App;
