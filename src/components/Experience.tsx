import React from 'react';
import { Calendar, MapPin, Building, CheckCircle } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    'Led backend development and system design for complex web applications',
    'Developed and maintained scalable APIs using Node.js and TypeScript',
    'Implemented cloud solutions using Azure services and AWS',
    'Configured Linux servers and Nginx for reliable hosting',
    'Automated deployment processes with GitHub Actions and CI/CD pipelines',
    'Conducted code reviews to maintain high code quality and best practices',
    'Collaborated with frontend developers for seamless integration',
    'Integrated third-party APIs and services for enhanced functionality',
    'Built AI-powered features and chatbots for improved user experience',
    'Managed database design and optimization for high performance',
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building scalable solutions and leading backend development initiatives
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>
              
              {/* Experience Card */}
              <div className="relative flex items-start mb-12">
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-20 w-full">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="p-8">
                      {/* Company Header */}
                      <div className="flex flex-wrap items-center justify-between mb-6">
                        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg">
                            <Building className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Ahex Technologies Pvt. Ltd.</h3>
                            <p className="text-xl text-blue-600 font-semibold">Software Engineer (Back-end)</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end text-right">
                          <div className="flex items-center text-gray-600 mb-1">
                            <Calendar size={16} className="mr-2" />
                            <span className="font-medium">2023 - Present</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <MapPin size={16} className="mr-2" />
                            <span>Hyderabad</span>
                          </div>
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements & Responsibilities</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {responsibilities.map((responsibility, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                              <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm leading-relaxed">{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Node.js',
                            'TypeScript',
                            'JavaScript',
                            'Express.js',
                            'Azure',
                            'AWS',
                            'MongoDB',
                            'SQL',
                            'React.js',
                            'Linux',
                            'Nginx',
                            'GitHub Actions',
                            'OpenAI',
                          ].map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 text-gray-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-teal-200 transition-colors cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Status */}
              <div className="relative flex items-center">
                <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                <div className="ml-20">
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Currently Working
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2.5+', label: 'Years Experience' },
              { value: '5+', label: 'Major Projects' },
              { value: '10+', label: 'Technologies' },
              { value: '3+', label: 'Cloud Platforms' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;