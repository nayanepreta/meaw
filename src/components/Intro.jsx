import React from 'react';
import Navigation from './Navigation';
import Header from './Header';

const Intro = ({ 
  onNext, 
  goToCover,
  goToSummary
  }) => {

  
  return (
    <div className="page">
      <Header />
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