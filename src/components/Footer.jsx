import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const viewportHeight = window.innerHeight;

    const progressPercentage = Math.min((scrollTop / scrollHeight) * 100, 100);
    setProgress(progressPercentage);

    // Mostrar a barra apenas quando o scroll ultrapassar 50% da altura do viewport
    setIsVisible(scrollTop > viewportHeight / 2);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="footer">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Footer;
