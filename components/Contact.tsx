
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="flex-1 text-white z-10">
            <h2 className="text-4xl font-black mb-6">Ready for a Safer Home?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-lg">
              Visit our Rockville showroom or call us today to schedule a comprehensive whole-house repiping assessment. 
              Our team of master plumbers is standing by.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-lg">100 Maryland Ave</p>
                  <p className="text-blue-200">Rockville, Maryland 20850</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-lg">(844) 340-6413</p>
                  <p className="text-blue-200 text-sm">Mon - Sat: 8am to 6pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full z-10">
            <form className="bg-white p-8 rounded-[2rem] shadow-xl space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full p-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full p-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="(301) 555-0123" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Inquiry Type</label>
                <select className="w-full p-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                  <option>Polybutylene Inspection</option>
                  <option>Whole House Repipe Quote</option>
                  <option>Active Leak Emergency</option>
                  <option>Other</option>
                </select>
              </div>
              <button className="w-full py-4 bg-blue-600 text-white font-black text-lg rounded-xl shadow-lg hover:bg-blue-700 transition-all transform hover:scale-[1.02]">
                Request Estimate
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">We respect your privacy. No spam, ever.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
