
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { AIAssistant } from './components/AIAssistant';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero onCtaClick={() => setShowAI(true)} />
        <Features />
        <Services />
        <Contact />
      </main>
      <Footer />

      {/* Persistent AI Trigger Button */}
      <button
        onClick={() => setShowAI(!showAI)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-2"
      >
        <span className="font-semibold px-2">Ask Pipe Expert AI</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* AI Assistant Modal/Overlay */}
      {showAI && (
        <div className="fixed inset-0 z-[60] flex items-end justify-end p-4 pointer-events-none">
          <div className="pointer-events-auto">
            <AIAssistant onClose={() => setShowAI(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
