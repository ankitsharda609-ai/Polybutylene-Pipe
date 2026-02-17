
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center">
              <span className="text-xl font-black tracking-tight text-blue-900">BLUE PIPE <span className="text-blue-500">PRO</span></span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Serving Rockville and Montgomery County since 2005.</p>
          </div>
          <div className="flex space-x-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">MD Master Plumber #98221</a>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Blue Pipe Pro Replacement. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
