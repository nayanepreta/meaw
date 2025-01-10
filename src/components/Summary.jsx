import React, { useEffect } from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';
import Header from '../components/Header';

const Summary = ({ 
  goToChapter, 
  onNext, 
  goToCover,
  goToSummary,
}) => {

const chapterTitle = "Summary";

useEffect(() => {
  const bookTitleT = chapters[0].titulo; 
  document.title = `${chapterTitle} | ${bookTitleT}`;
  return () => {
    document.title = chapters[0].titulo; 
  };
}, [chapterTitle]);

  return (
    <div className="page summary">
      <Header />
      <img 
        className="icone_cabeco" 
        src="https://via.placeholder.com/25" 
        alt="Imagem Placeholder" 
        loading="lazy" 
      />

    <div className="menu-container">
      <div className="menu-item">
        <button 
          className="menu-button" 
          onClick={() => goToChapter(0)}>
          Cover
        </button>
    </div>

    <div className="menu-item">
      <button 
        className="menu-button" 
        onClick={() => goToChapter(2)}>
          Introducion
      </button>
    </div>

    <div className="menu-item">
      <button 
        className="menu-button" 
        onClick={() => goToChapter(4)}>
          Preface
      </button>
    </div>

    <div className="menu-item">
      <button 
        className="menu-button menu-titulo" >
          Alice’s Adventures in Wonderland
      </button>
    </div>

    {Object.entries(chapters).slice(1).map(([chapterNumber, chapterData], index) => (
      <div key={chapterNumber} className="menu-item">
        <span className="menu-index">{chapterData.chap}</span>
        <button 
          className="menu-button" 
          onClick={() => goToChapter(Number(chapterNumber) + 4)}>
            {chapterData.title}
        </button>
      </div>
    ))}

    <div className="menu-item">
      <button 
        className="menu-button" 
        onClick={() => goToChapter(18)}>
          Credits
      </button>
    </div>
  </div>
  <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
      />
    </div>
  );
};

export default Summary;