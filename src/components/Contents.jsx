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
    <div 
      className="page menu">
      <img 
        className="icone_cabeco" 
        src="https://via.placeholder.com/25" 
        alt="Imagem Placeholder" loading="lazy"/>

    <table 
      className="menu_tabela">
      <tbody>
        <tr>
          <td 
            className="lista_topico">0</td>
          <td>
            <button 
              className="lista-item" 
              onClick={() => goToChapter(0)}>
              Capa
            </button>
          </td>
        </tr>

        {Object.entries(chapters).slice(1).map(([chapterNumber, chapterData], index) => (
          <tr key={chapterNumber}>
            <td 
              className="lista_topico">
                {chapterData.chap}
            </td>
            <td>
              <button 
                className="lista-item" 
                onClick={() => goToChapter(Number(chapterNumber) + 2)}>
                  {chapterData.title}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="navigation">
        <button onClick={() => goToChapter(0)}>
          <img
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/casa.png"
            alt="Next"
            className="nav-icon"
            loading="lazy"
          />
        </button>
    </div>
</div>
    
  );
};

export default Contents;