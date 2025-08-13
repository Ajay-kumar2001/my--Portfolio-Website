import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Ajay Kumar Bandari</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>

            <div className="flex justify-center mb-8">
              <button
                onClick={scrollToTop}
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors transform hover:-translate-y-1"
              >
                <ArrowUp size={24} />
              </button>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <div className="flex items-center space-x-1 mb-4 md:mb-0">
                  <span>© 2025 Ajay Kumar Bandari. Made with</span>
                  <Heart size={16} className="text-red-500" />
                  <span>and lots of coffee</span>
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;