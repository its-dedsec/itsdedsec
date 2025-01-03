import React, { useState } from 'react';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import CertificationsSection from '../components/CertificationsSection';
import { Sun, Moon } from 'lucide-react';

const IndexPage = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={`bg-${theme === 'dark' ? 'gray-900' : 'white'} text-${
        theme === 'dark' ? 'white' : 'black'
      }`}
    >
      <div className="fixed top-4 right-4">
        <button onClick={toggleTheme} className="bg-green-500 p-2 rounded-full text-white shadow-lg">
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </div>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
    </div>
  );
};

export default IndexPage;
