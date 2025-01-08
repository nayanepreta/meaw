import React, { useEffect } from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';
import Header from '../components/Header';

const Credits = ({ 
  onNext, 
  goToCover,
  goToSummary,
   }) => {

  const chapterTitle = "Créditos";
  
    useEffect(() => {
      const bookTitleT = chapters[0].titulo; 
      document.title = `${chapterTitle} • ${bookTitleT}`;
      return () => {
        document.title = chapters[0].titulo; 
      };
    }, [chapterTitle]);
  return (
    <div className="page">
      <Header />
      Créditos
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
    </div>
  );
};

export default Credits;