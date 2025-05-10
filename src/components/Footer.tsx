
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black dark:bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-xl font-semibold">Brain<span className="gradient-text">Heart</span></span>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Exploring Heart–Brain Interactions Through Open Science
            </p>
          </div>
          
          <div className="flex space-x-8">
            <div>
              <h4 className="font-medium mb-3 text-gray-300">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#tech" className="text-gray-400 hover:text-white transition-colors">Tech Stack</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-gray-300">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} BrainHeart Project. All rights reserved.</p>
          <p className="mt-2">Open-source software for the advancement of heart-brain research.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
