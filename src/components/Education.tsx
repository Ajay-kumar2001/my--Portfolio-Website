import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Users } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Activities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Academic foundation and community involvement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Education Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mr-4">
                      <GraduationCap size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Bachelor's Degree</h3>
                      <p className="text-lg text-blue-600 font-semibold">MECS (Mathematics, Electronics, Computer Science)</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Award size={18} className="mr-3 text-blue-500" />
                      <span className="font-medium">Government City College (B)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-3 text-blue-500" />
                      <span>Hyderabad, Telangana</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={18} className="mr-3 text-blue-500" />
                      <span>Graduated</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialization Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Mathematics', 'Electronics', 'Computer Science'].map((subject, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium shadow-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Extracurricular Activities Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-green-500 to-teal-500"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mr-4">
                      <Users size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Extracurricular</h3>
                      <p className="text-lg text-green-600 font-semibold">Community Service & Leadership</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">NSS Volunteer</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Actively participated in various community service initiatives and projects as a 
                        National Service Scheme (NSS) volunteer during college years.
                      </p>
                      
                      <div className="space-y-3">
                        <h5 className="font-medium text-gray-900">Key Activities:</h5>
                        <div className="space-y-2">
                          {[
                            'Community development projects',
                            'Social awareness campaigns',
                            'Environmental conservation initiatives',
                            'Educational support programs',
                            'Team coordination and leadership',
                          ].map((activity, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Leadership', 'Teamwork', 'Communication', 'Project Management'].map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Foundation</h3>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  My educational background in Mathematics, Electronics, and Computer Science provided a strong 
                  foundation for my career in software development. The diverse curriculum helped me develop 
                  analytical thinking, problem-solving skills, and a deep understanding of computational systems. 
                  My involvement in NSS activities further enhanced my leadership and collaborative skills, 
                  which have been invaluable in my professional journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;