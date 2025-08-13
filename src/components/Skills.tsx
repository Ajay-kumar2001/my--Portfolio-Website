import React from 'react';
import { Code, Database, Cloud, Wrench, Cpu, Bot } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'from-blue-500 to-blue-600',
      skills: ['TypeScript', 'JavaScript'],
    },
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-teal-500 to-teal-600',
      skills: ['HTML', 'CSS', 'React JS', 'React-Redux'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'from-green-500 to-green-600',
      skills: ['Node JS', 'Express JS'],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-purple-500 to-purple-600',
      skills: ['SQL', 'MongoDB', 'CosmosDB'],
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      color: 'from-orange-500 to-orange-600',
      skills: ['Azure', 'AWS'],
    },
    {
      icon: Wrench,
      title: 'DevOps & Tools',
      color: 'from-red-500 to-red-600',
      skills: ['Git (Github)', 'Linux Servers', 'Nginx', 'GitHub Actions'],
    },
  ];

  const cloudServices = [
    'Azure Communication Services',
    'Azure Function Apps',
    'Azure Blob Storage',
    'AWS EC2',
    'AWS S3',
    'AWS Lambda',
    'OAuth',
  ];

  const toolsAndApis = [
    'Gmail APIs',
    'Twilio',
    'Razorpay',
    'Stripe',
    'Firebase',
    'ZOHO CRM',
    'OpenAI',
  ];

  const aiTools = [
    'Flowise',
    'n8n',
    'LangChain',
    'OpenAI API',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across modern web technologies, cloud platforms, and AI integration
            </p>
          </div>

          {/* Main Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                      <category.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Sections */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cloud Services */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 mr-4">
                  <Cloud size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Cloud Services</h3>
              </div>
              <div className="space-y-2">
                {cloudServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center px-3 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & APIs */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 mr-4">
                  <Wrench size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Tools & APIs</h3>
              </div>
              <div className="space-y-2">
                {toolsAndApis.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center px-3 py-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Automation Tools */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                  <Bot size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">AI Automation</h3>
              </div>
              <div className="space-y-2">
                {aiTools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center px-3 py-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;