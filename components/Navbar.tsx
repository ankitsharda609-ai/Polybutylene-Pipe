
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 z-50 w-full glass-morphism border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center group cursor-pointer">
            <div className="bg-[#0a192f] p-2 rounded-xl group-hover:bg-blue-600 transition-colors shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="ml-3">
              <span className="text-xl font-black tracking-tight text-[#0a192f]">BLUE PIPE <span className="text-blue-600">PRO</span></span>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">Rockville Master Plumbers</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#warnings" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">Our Process</a>
            <a href="#services" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            <a 
              href="tel:8443406413" 
              className="bg-[#0a192f] hover:bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-black shadow-xl hover:shadow-blue-500/20 transition-all active:scale-95"
            >
              (844) 340-6413
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
