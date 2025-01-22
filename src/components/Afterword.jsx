import React, { useEffect } from 'react';
import Navigation from './Navigation';

const Afterword = ({ 
 
  onNext, 
  goToCover,
  goToSummary }) => {

  
  return (
    <div className="page">
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