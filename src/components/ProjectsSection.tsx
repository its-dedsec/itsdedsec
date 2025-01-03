import React from 'react';
import { Code, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'CyberGuard NIDS Dashboard',
      description: 'React-based NIDS dashboard connecting with Streamlit backend for real-time anomaly detection and security alerts.',
      link: 'https://github.com/Prathamesh-Chandekar/dedsec'
    },
    {
      title: 'Energy Consumption Analysis',
      description: 'Performed statistical analysis on energy consumption data using contingency tables and Chi-Square Test of Independence.',
      link: '#'
    }
  ];

  return (
    <AnimatedSection>
      <div className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono text-gradient">
          <Code className="inline-block w-8 h-8 mr-2 mb-1" />
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="cyber-card p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400">{project.title}</h3>
              <p className="text-gray-300 my-2">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
