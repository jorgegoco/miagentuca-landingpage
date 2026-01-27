import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShiftSection from './components/ShiftSection';
import MethodologySection from './components/MethodologySection';
import AgentsSection from './components/AgentsSection';
import DemoSection from './components/DemoSection';
import AudienceSection from './components/AudienceSection';
import FAQSection from './components/FAQSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import SectionDivider from './components/SectionDivider';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('contact') === 'true') {
      setIsModalOpen(true);
      window.history.replaceState({}, '', '/');
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <SectionDivider fromColor="navy" toColor="white" variant="wave" />
        <ShiftSection />
        <MethodologySection />
        <SectionDivider fromColor="white" toColor="navy" variant="wave" />
        <AgentsSection />
        <SectionDivider fromColor="navy" toColor="slate" variant="gradient" />
        <DemoSection />
        <AudienceSection />
        <FAQSection />
        <SectionDivider fromColor="slate" toColor="white" variant="gradient" />
        <AboutSection />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;