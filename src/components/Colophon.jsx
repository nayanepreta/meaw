import React, { useEffect } from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';

const Colophon = ({ 
  
  onNext, 
  goToCover,
  goToSummary,
   }) => {

  
  return (
    <div className="page">
      Ends
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
    </div>
  );
};

export default Colophon;