import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShiftSection from './components/ShiftSection';
import AgentsSection from './components/AgentsSection';
import AudienceSection from './components/AudienceSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <ShiftSection />
        <AgentsSection />
        <AudienceSection />
        <AboutSection />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;