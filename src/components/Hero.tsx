import React from 'react';
import { MapPin, Mail, Phone, Download, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                    Ajay Kumar
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
                  Full Stack Developer
                </h2>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-blue-600" />
                  <span>Hyderabad, Telangana. 500090</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-blue-600" />
                  <a
                    href="mailto:bandari.ajaykumar2001@gmail.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    bandari.ajaykumar2001@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-blue-600" />
                  <a
                    href="tel:+918919275981"
                    className="hover:text-blue-600 transition-colors"
                  >
                    +91 8919275981
                  </a>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                3 years of experience in designing and developing scalable web applications using MERN stack, 
                and cloud platforms like AWS. Proficient in backend development with Node.js, and integration 
                of cloud services and third-party APIs.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToContact}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
                >
                  Get In Touch
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium flex items-center space-x-2">
                  <Download size={18} />
                  <span>Download CV</span>
                </button>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/Ajay-kumar2001" target='_blank'rel='noopener noreferer'
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-gray-700 hover:text-blue-600"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajay-kumar-bandari-b70007222/" target='_blank' rel='noopener noreferer'
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-gray-700 hover:text-blue-600"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full absolute top-0 left-0 animate-pulse"></div>
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full absolute top-4 left-4"></div>
                  <div className="w-80 h-80 bg-white rounded-full shadow-xl relative z-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-blue-600">3</div>
                      <div className="text-xl text-gray-700 font-medium">Years</div>
                      <div className="text-gray-600">Experience</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-0 left-0 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 animate-bounce">
                <span className="text-sm font-medium text-gray-700">MERN Stack</span>
              </div>
              <div className="absolute bottom-10 right-10 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-sm font-medium text-gray-700">AWS Cloud</span>
              </div>
              <div className="absolute top-32 right-0 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium text-gray-700">DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;