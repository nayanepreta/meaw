import React from 'react';
import Navigation from './Navigation';

const Intro = ({ 
  onNext, 
  goToCover,
  goToSummary
  }) => {

  
  return (
    <div className="page">
      Ilustração de introdução
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
    </div>
  );
};

export default Intro;