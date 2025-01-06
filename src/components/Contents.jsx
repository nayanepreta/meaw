import React, { useEffect } from 'react';
import chapters from '../control/chapters';

const Contents = ({ 
  goToChapter, 
  goToCover 
}) => {
  const chapterTitle = "Table of Contents";

  useEffect(() => {
    const bookTitleT = chapters[0].titulo; 
    document.title = `${chapterTitle} | ${bookTitleT}`;
    return () => {
      document.title = chapters[0].titulo; 
    };
  }, [chapterTitle]);

  return (
    <div className="page menu">
      <img 
        className="icone_cabeco" 
        src="https://via.placeholder.com/25" 
        alt="Imagem Placeholder" 
        loading="lazy" 
      />

      <div className="menu-container">
        <div className="menu-item">
          <span className="menu-index"></span>
          <button 
            className="menu-button" 
            onClick={() => goToChapter(0)}>
            Capa
          </button>
        </div>

        <div className="menu-item">
          <span className="menu-index"></span>
          <button 
            className="menu-button" 
            onClick={() => goToChapter(2)}>
            Sumário
          </button>
        </div>

        <div className="menu-item">
          <span className="menu-index"></span>
          <button 
            className="menu-button" 
            onClick={() => goToChapter(1)}>
            Folha de rosto
          </button>
        </div>

        <div className="menu-item">
          <span className="menu-index"></span>
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
              onClick={() => goToChapter(Number(chapterNumber) + 2)}>
              {chapterData.title}
            </button>
          </div>
        ))}

        
      </div>

      <div className="navigation">
        <button onClick={() => goToCover()}>
          <img
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/casa.png"
            alt="Home"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      </div>
    </div>
  );
};

export default Contents;
