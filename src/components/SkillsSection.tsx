import React from 'react';
import { Wrench } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SkillsSection = () => {
  const skills = [
    'C, Python, SQL, MATLAB',
    'React, Tailwind CSS',
    'Ubuntu (Cybersecurity)',
    'Statistical Analysis (SPSS, Excel)'
  ];

  return (
    <AnimatedSection>
      <div className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono text-gradient">
          <Wrench className="inline-block w-8 h-8 mr-2 mb-1" />
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="cyber-card p-4 text-center">
              <span className="text-gray-300 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
