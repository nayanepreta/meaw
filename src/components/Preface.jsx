import React, { useEffect } from 'react';
import Navigation from './Navigation';

const Preface = ({ 
  onNext, 
  goToCover,
  goToSummary }) => {

  return (
    <div className="page">
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