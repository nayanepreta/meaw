import React, { useEffect } from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';
import Header from './Header';

const Colophon = ({ 
  
  onNext, 
  goToCover,
  goToSummary,
   }) => {

  
  return (
    <div className="page">
      <Header />
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