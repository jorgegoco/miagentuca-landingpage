import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShiftSection from './components/ShiftSection';
import AgentsSection from './components/AgentsSection';
import AudienceSection from './components/AudienceSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ShiftSection />
        <AgentsSection />
        <AudienceSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;