import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Header from './Header';

const Preface = ({ 
  onNext, 
  goToCover,
  goToSummary }) => {

  return (
    <div className="page">
      <Header />
      Ilustração de prefácio
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
       />
    </div>
  );
};

export default Preface;