import React from 'react';
import { Award, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Expert Backend Developer',
      description: 'Specialized in Node.js, TypeScript, and cloud integration with 2.5+ years of hands-on experience.',
    },
    {
      icon: Target,
      title: 'High-Impact Solutions',
      description: 'Delivered scalable solutions across e-commerce, communication, and productivity platforms.',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led backend development teams and conducted code reviews to maintain high quality standards.',
    },
    {
      icon: Lightbulb,
      title: 'AI Integration',
      description: 'Built AI-powered chatbots and automation tools using OpenAI and modern AI frameworks.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer with expertise in designing and developing scalable web applications. 
              Passionate about backend development, cloud integration, and AI-powered solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  As a Full Stack Developer with over 2.5 years of experience, I specialize in building robust, 
                  scalable web applications using the MERN stack and modern cloud platforms. My expertise spans 
                  across backend development with Node.js, cloud integration with Azure and AWS, and implementing 
                  CI/CD practices.
                </p>
                <p>
                  I have a proven track record in delivering high-impact solutions across various domains including 
                  e-commerce platforms, communication systems, and productivity applications. My experience includes 
                  leading development teams, architecting complex systems, and integrating AI-powered features to 
                  enhance user experiences.
                </p>
                <p>
                  I'm passionate about writing clean, maintainable code and staying up-to-date with the latest 
                  technologies and best practices in software development. My goal is to create innovative solutions 
                  that not only meet business requirements but also provide exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;