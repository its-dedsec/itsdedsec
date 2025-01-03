import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Cyber Security Intern",
      company: "LearnSmashers Edutech Pvt. Ltd.",
      period: "June 2024 – Sept 2024",
      location: "Pune, MH, IN",
      details: [
        "Engaged in hands-on projects focusing on cryptography and algorithms",
        "Developed and implemented projects centred on log analysis",
        "Enhanced system integrity through certificate checking frameworks"
      ]
    },
    {
      title: "Rural Internship",
      company: "Waghrali Gram Panchayat",
      period: "May 2023 – June 2023",
      location: "Kolhapur, MH, IN",
      details: [
        "Innovative Solutions to Water Access in Rural Areas",
        "Developed GSM-based system for remote water motor control",
        "Collaborated with farmers to enhance agricultural practices"
      ]
    }
  ];

  return (
    <AnimatedSection>
      <div className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono text-gradient">
          <Briefcase className="inline-block w-8 h-8 mr-2 mb-1" />
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="cyber-card p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-400">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
                <span className="text-green-500 font-mono">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
