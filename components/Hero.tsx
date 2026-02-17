
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#0a192f] pt-20 pb-24 lg:pt-32 lg:pb-40 text-white">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now servicing Fallsgrove & King Farm
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              The Rockville <span className="text-blue-400">Repipe</span> Specialists.
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We don't just fix pipes; we protect Rockville homes. If your home was built between 1978 and 1995, you're likely sitting on a plumbing "time bomb." Let's defuse it properly.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Chat with Pete (Our Expert AI)
              </button>
              <a
                href="tel:8443406413"
                className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold rounded-2xl transition-all"
              >
                Call the Shop: (844) 340-6413
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
              <div className="text-center">
                <p className="text-2xl font-bold">1,200+</p>
                <p className="text-xs uppercase tracking-widest font-bold">Homes Saved</p>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="text-center">
                <p className="text-2xl font-bold">Rockville</p>
                <p className="text-xs uppercase tracking-widest font-bold">Locally Owned</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000"
                alt="Master Plumber Working"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <p className="text-sm font-medium italic">"They were in and out in 3 days. Drywall was patched so perfectly I couldn't tell where they entered. Highly recommend for any Rockville homeowner."</p>
                <p className="mt-3 font-bold text-blue-400">— Sarah M., Twinbrook</p>
              </div>
            </div>
            {/* Artistic Blur Blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
