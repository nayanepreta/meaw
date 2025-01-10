import React from 'react';
import chapters from '../control/chapters';

const Cover = ({ onNext }) => {
  const { titulo, autor, editora } = chapters[0];

  return (
    <div className="cover">
      <img 
        className="cover-image" 
        src="https://raw.githubusercontent.com/nayanepreta/alice-in-wonderland/refs/heads/main/src/assets/capa.png" 
        alt={`Capa do livro ${titulo}`} 
        loading="lazy" 
      />

      <p className="cover-author">{autor}</p>

      <img 
        className="cover-publisher-logo" 
        src="https://via.placeholder.com/25" 
        alt={`Logo da editora ${editora}`} 
        loading="lazy" 
      />

      <div className="navigation">
        <button onClick={onNext} aria-label="Próxima página">
          <img
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/depois.png"
            alt="Próxima"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      </div>
    </div>
  );
};

export default Cover;
