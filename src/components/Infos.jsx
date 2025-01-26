import React from 'react';
import Navigation from './Navigation';
import chapters from '../control/chapters';

const { 
  titulo: titulo, 
  autor: autor,
  editora: editora} = chapters[0]; 

const Infos = ({ 
  onNext,  
  goToCover,
  goToSummary}) => {

return (
  <div className="page info">

    <div className='info_head'>
      <img 
          src="https://placehold.co/25" 
          alt="Imagem Placeholder" 
          loading="lazy" 
        />
      <p>{autor}</p>
    </div>

    <div className='info_titulo'>
      <img 
        src="https://placehold.co/350x250" 
        alt={editora} loading="lazy"/>
      <p>Alice’s Adventures in Wonderland</p>
    </div>

    <img 
      className="info_logo" 
      src="https://placehold.co/100" 
      alt={editora} loading="lazy"/>
    
    <Navigation 
      goToCover={goToCover} 
      onNext={onNext} 
      goToSummary={goToSummary} />
  </div>
); };

export default Infos;