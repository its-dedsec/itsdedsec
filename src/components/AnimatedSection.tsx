import React, { useState, useEffect } from 'react';

const AnimatedSection = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    const element = document.querySelector('.animate-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`animate-section transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
