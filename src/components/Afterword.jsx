import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Header from './Header';

const Afterword = ({ 
 
  onNext, 
  goToCover,
  goToSummary }) => {

  
  return (
    <div className="page">
      <Header />
      Encerramento
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
    </div>
  );
};

export default Afterword;