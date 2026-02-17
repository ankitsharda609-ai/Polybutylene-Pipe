
import React from 'react';

export const Features: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "The Site Walk",
      desc: "No high-pressure sales. Pete or one of our lead techs walks your home, identifies your specific pipe class, and explains the risk level.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    },
    {
      num: "02",
      title: "Full-House Repipe",
      desc: "We replace every inch of your supply plumbing with commercial-grade PEX-a. This isn't just a fix; it's a 50-year upgrade.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      num: "03",
      title: "Master Drywall Finish",
      desc: "Most plumbers leave holes. Our specialized finishing crew follows right behind, patching and texture-matching so your walls look like new.",
      icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    }
  ];

  return (
    <section id="warnings" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-black text-gray-900 leading-tight">The Rockville <br/><span className="text-blue-600">Standard.</span></h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We've spent 20 years refining a process that minimizes mess and maximizes home value. Here's how we handle your repipe from start to finish.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-blue-600 transition-all duration-500 overflow-hidden">
                <span className="text-6xl font-black absolute -top-4 -right-4 text-black/5 group-hover:text-white/10 transition-colors">
                  {step.num}
                </span>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-blue-50 transition-colors">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
