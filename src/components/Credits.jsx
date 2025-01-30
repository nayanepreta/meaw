import React, { useEffect } from 'react';
import book_infos from '../control/book_infos';
import Navigation from './Navigation';

const Credits = ({onNext, goToCover, goToSummary}) => {

  const chapterTitle = "Créditos";
  
    useEffect(() => {
      const bookTitleT = book_infos.title; 
      document.title = `${chapterTitle} • ${bookTitleT}`;
      return () => {
        document.title = book_infos.title; 
      };
    }, [chapterTitle]);

  return (
    <div className="page">
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