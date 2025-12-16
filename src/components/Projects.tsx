import React from 'react';
import { ExternalLink, Github, Calendar, Users, Code, Database, Cloud, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Thapala (Mailing Platform)',
      description: 'Comprehensive mailing and emailing platform with notes, daily planners, event scheduling, email encryption, and file management.',
      type: 'Full-Stack Application',
      duration: '6 months',
      projectUrl: "https://www.thapala.com/",
      team: '3 developers',
      responsibilities: [
        'Led backend development and system design',
        'Implemented folder and file management functionalities',
        'Developed email encryption and security features',
        'Configured Linux servers and Nginx for hosting',
        'Automated deployment with GitHub Actions',
        'Collaborated with frontend team for seamless integration',
      ],
      technologies: [
        'Node.js',
        'TypeScript',
        'SQL',
        'Sequelize',
        'Twilio',
        'Azure Blob Storage',
        'Linux Server',
        'Nginx',
      ],
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Dosen (US Based Mentoring Application)',
      description: 'Sophisticated mentoring application with 5 user roles, program management, real-time chat, video calls, and administrative insights.',
      type: 'Enterprise Application',
      duration: '8 months',
      team: '5 developers',
      projectUrl: "https://dosen.io/",
      responsibilities: [
        'System design and architecture planning',
        'Backend development and implementation',
        'Database design and management with CosmosDB',
        'Integration of Azure Communication Services',
        'Code reviews and quality maintenance',
        'Development process oversight',
      ],
      technologies: [
        'Node.js',
        'TypeScript',
        'Azure Function App',
        'CosmosDB',
        'Mongoose',
        'Azure Communication Services',
        'Auth0',
        'Twilio',
      ],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Furniture Care Bot System',
      description: 'AI-powered chatbot for WhatsApp and WeChat customer support, integrated with ZOHO Books & CRM for ticket management.',
      type: 'AI/ML Application',
      duration: '4 months',
      team: '2 developers',
      projectUrl: "https://www.stellarglobal.com/",
      responsibilities: [
        'ZOHO CRM & Books integration',
        'Custom Flowise tool development',
        'Admin dashboard design and implementation',
        'Image compression optimization',
        'AI chatbot workflow optimization',
      ],
      technologies: [
        'Flask',
        'JavaScript',
        'LangChain',
        'OpenAI',
        'ZOHO APIs',
        'Twilio API',
        'Flowise',
        'HTML/CSS',
      ],
      icon: Bot,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Hotel Booking System',
      description: 'Secure and scalable backend for hotel booking with room categories, premium options, and integrated payment processing.',
      type: 'Backend System',
      duration: '3 months',
      team: '2 developers',
      projectUrl: "https://www.thapala.com/",
      gutHubUrl: "",
      responsibilities: [
        'Backend API development and maintenance',
        'Razorpay payment integration',
        'Room categorization and premium features',
        'Security implementation with Helmet',
        'Frontend API integration support',
      ],
      technologies: [
        'Node.js',
        'TypeScript',
        'Express.js',
        'MongoDB',
        'Razorpay',
        'Helmet',
      ],
      icon: Code,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Essential Lab Grown Diamonds (E-Commerce)',
      description: 'B2B e-commerce platform for lab-grown diamonds with AI chatbot, inventory sync, and automated email responses.',
      type: 'E-Commerce Platform',
      duration: '7 months',
      team: '4 developers',
      projectUrl: "https://elgdiamonds.ahexlab.com/",
      responsibilities: [
        'Backend development and architecture',
        'Third-party inventory integration (RightCliq & VDB)',
        'Gmail automation system with OpenAI',
        'AI chatbot for customer engagement',
        'Secure API development',
        'Team collaboration and code quality',
      ],
      technologies: [
        'Node.js',
        'TypeScript',
        'SQL',
        'Sequelize ORM',
        'RightCliq API',
        'VDB API',
        'OpenAI',
        'Gmail API',
        'Azure',
      ],
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing impactful solutions across e-commerce, communication, AI automation, and enterprise applications
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Project Header */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color}`}>
                          <project.icon size={32} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                              {project.type}
                            </span>
                            <div className="flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                              <Calendar size={14} className="mr-1" />
                              {project.duration}
                            </div>
                            <div className="flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                              <Users size={14} className="mr-1" />
                              {project.team}
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{project.description}</p>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.responsibilities.map((responsibility, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2 text-sm text-gray-600"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0`}></div>
                              <span>{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Actions */}
                      <div className="flex flex-wrap gap-4">
                        {/* <a
                          href={project.gutHubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg"
                        >
                          <Github size={18} />
                          <span>View Code</span>
                        </a> */}

                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-2 border-2 border-gray-700 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white"
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      </div>

                    </div>

                    {/* Technologies */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                        <div className="space-y-3">
                          {project.technologies.map((tech, idx) => (
                            <div
                              key={idx}
                              className="flex items-center px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color} mr-3`}></div>
                              <span className="text-gray-700 font-medium">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          {/* <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
              View All Projects on GitHub
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;