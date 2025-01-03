import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => (
  <AnimatedSection>
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="cyber-card p-8 rounded-2xl backdrop-blur-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img 
                  src="/api/placeholder/400/400"
                  alt="Prathamesh Chandekar"
                  className="relative rounded-lg w-full object-cover cyber-border"
                />
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/yourusername" className="cyber-button">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:20220802022@dypiu.ac.in" className="cyber-button">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+917414981774" className="cyber-button">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-mono text-gradient">About Me</h2>
              <div className="terminal-text space-y-4">
                <p className="typing-effect">
                  A highly motivated Computer Science (CSE) student with a strong foundation in Cybersecurity 
                  seeking a research internship to delve deeper into cutting-edge security challenges.
                </p>
                <p className="typing-effect-delayed">
                  With a proven track record in project-based internships and relevant certifications, 
                  I am eager to contribute my technical expertise and problem-solving skills.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="cyber-stats">
                  <span className="text-green-400">Location</span>
                  <span>Pune, IN</span>
                </div>
                <div className="cyber-stats">
                  <span className="text-green-400">Education</span>
                  <span>B.Tech CSE</span>
                </div>
                <div className="cyber-stats">
                  <span className="text-green-400">GPA</span>
                  <span>3.8/5.0</span>
                </div>
                <div className="cyber-stats">
                  <span className="text-green-400">Focus</span>
                  <span>Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
