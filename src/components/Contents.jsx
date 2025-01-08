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
      Não vi mais existir
    </div>
  );
};

export default Contents;
