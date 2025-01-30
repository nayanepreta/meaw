import React, { useEffect } from 'react';
import book_infos from '../control/book_infos';
import chapters_in_wonderland from '../control/chapters_in_wonderland';
import chapters_looking_glass from '../control/chapters_looking_glass';
import Navigation from './Navigation';

const Summary = ({ 
  goToChapter, 
  onNext, 
  goToCover,
  goToSummary,
}) => {

const chapterTitle = "Summary";

useEffect(() => {
  const bookTitleT = book_infos.title; 
  document.title = `${chapterTitle} | ${bookTitleT}`;
  return () => {
    document.title = book_infos.title; 
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

      <div className='menu-fotos'>
        <img 
          src="https://placehold.co/300x150" 
          loading="lazy"/>
      </div>

      <div className="menu-item">
        <button 
          className="menu-button" 
          onClick={() => goToChapter(2)}>
            Introduction
        </button>
      </div>

      <div className="menu-item">
        <p 
          className="menu-titulo" >
            Alice’s Adventures in<br/> Wonderland
        </p>
      </div>

    <div className="menu-item">
      <button 
        className="menu-button" 
        onClick={() => goToChapter(4)}>
          Preface
      </button>
    </div>

    

    {Object.entries(chapters_in_wonderland).slice(1).map(([chapterNumber, chapterData], index) => (
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

      {Object.entries(chapters_looking_glass).slice(1).map(([chapterNumber, chapterData], index) => (
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