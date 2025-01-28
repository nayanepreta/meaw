import React, { useEffect } from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';

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
      <img 
        className="icone_cabeco" 
        src="https://placehold.co/25" 
        alt="Imagem Placeholder" 
        loading="lazy" 
      />

    <div className="menu-container">

      <div className="menu-item">
        <p className="menu-titulo">Sumário</p>
      </div>

      <div className='menu-fotos'>
        <img 
          src="https://placehold.co/300x150" 
          loading="lazy"/>
      </div>

      <div className="menu-item">
        <button 
          className="menu-button" 
          onClick={() => goToChapter(2)}>
            Introdução
        </button>
      </div>

      <div className="menu-item">
        <p 
          className="menu-titulo" >
            Alice’s Adventures in Wonderland
        </p>
      </div>

    <div className="menu-item">
      <button 
        className="menu-button" 
        onClick={() => goToChapter(4)}>
          Preface
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
        <span className="menu-index">{Number(chapterNumber)}</span>
      </div>
    ))}

      <div className="menu-item">
        <p 
          className="menu-titulo" >
            Through the Looking-Glass
        </p>
      </div>

    <div className="menu-item">
      <button 
        className="menu-button" 
        onClick={() => goToChapter(17)}>
          Afterword
      </button>
    </div>

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