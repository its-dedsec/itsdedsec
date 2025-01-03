import React from 'react';
import { Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CertificationsSection = () => {
  const certifications = [
    'Certified in C Programming',
    'Completed JavaScript Course',
    'Intro to Cybersecurity Certification'
  ];

  return (
    <AnimatedSection>
      <div className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono text-gradient">
          <Award className="inline-block w-8 h-8 mr-2 mb-1" />
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="cyber-card p-4 text-center">
              <span className="text-gray-300 font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CertificationsSection;
