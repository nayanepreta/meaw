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
    <p className="info_nome_autor">{autor}</p>
    <h1 className="info_titulo_livro">{titulo}</h1>
    <img 
      className="info_logo_editora" 
      src="https://via.placeholder.com/50" 
      alt={editora} loading="lazy"/>
    
    <Navigation 
      goToCover={goToCover} 
      onNext={onNext} 
      goToSummary={goToSummary} />
  </div>
); };

export default Infos;