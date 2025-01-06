import React, { useEffect } from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';
import Header from '../components/Header';

const Credits = ({ 
  goToChapter, 
  onNext, 
  goToCover,
  goToSummary,
  goToContents }) => {

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
        goToContents={goToContents}/>
    </div>
  );
};

export default Credits;