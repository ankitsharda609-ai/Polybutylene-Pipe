
import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Whole-House Repiping",
      price: "Full Service",
      description: "Complete replacement of all supply lines with modern, durable PEX or Copper plumbing systems.",
      img: "https://picsum.photos/id/1029/400/300"
    },
    {
      title: "Blue Pipe Removal",
      price: "Specific Target",
      description: "Specialized removal of PB-1 pipes and fittings common in Maryland mid-century developments.",
      img: "https://picsum.photos/id/1015/400/300"
    },
    {
      title: "Insurance Claim Help",
      price: "Complimentary",
      description: "We provide the detailed documentation and master plumbing reports required for insurance recovery.",
      img: "https://picsum.photos/id/1048/400/300"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Expert Solutions</h2>
            <p className="mt-4 text-xl text-gray-500">
              We focus exclusively on repiping to give you the highest quality results at the best price point.
            </p>
          </div>
          <a href="tel:8443406413" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
            View all services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <img src={s.img} alt={s.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">{s.price}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
