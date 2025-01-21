import React, { useState, useEffect, useCallback } from 'react';
import chapters from '../control/chapters';

const Header = ({ chapterIndex }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [selectedFontSize, setSelectedFontSize] = useState(localStorage.getItem('font-size') || 'normal');
  const [selectedMargin, setSelectedMargin] = useState(localStorage.getItem('margin-size') || 'padrao');
  const [isFontSizeBoxVisible, setFontSizeBoxVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('layout'); // Define a aba ativa
  const [selectedAlignment, setSelectedAlignment] = useState(localStorage.getItem('alignment') || 'centralizado');



  const handleScroll = useCallback(() => {
    const headerElement = document.querySelector('.header');
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const lastScrollTop = parseInt(localStorage.getItem('lastScrollTop'), 10) || 0;

    const isScrollingUp = currentScrollTop < lastScrollTop;

    

    if (headerElement) {
      if (isScrollingUp) {
        headerElement.classList.add('visible');
      } else {
        headerElement.classList.remove('visible');
        setFontSizeBoxVisible(false); // Fecha o menu caso esteja aberto
      }
    }

    localStorage.setItem('lastScrollTop', currentScrollTop <= 0 ? 0 : currentScrollTop);
  }, []);

  const handleTouch = useCallback(() => {
    const headerElement = document.querySelector('.header');
    const lastTouchTime = parseInt(localStorage.getItem('lastTouchTime'), 10) || 0;
    const currentTime = new Date().getTime();

    if (headerElement) {
      if (currentTime - lastTouchTime < 300) {
        headerElement.classList.toggle('visible');
        setFontSizeBoxVisible(false); // Fecha o menu caso esteja aberto
      }
      localStorage.setItem('lastTouchTime', currentTime);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem('darkMode', newDarkModeState);
  };

  const toggleFontSizeBox = () => {
    setFontSizeBoxVisible((prev) => !prev);
  };

  const adjustFontSize = (newSize) => {
    document.body.classList.remove('font-compact', 'font-large');

    if (newSize === 'compacto') {
      document.body.classList.add('font-compact');
    } else if (newSize === 'grande') {
      document.body.classList.add('font-large');
    }

    localStorage.setItem('font-size', newSize);
    setSelectedFontSize(newSize);
    setFontSizeBoxVisible(false); // Fecha o menu após a interação
  };

  const adjustMarginSize = (newSize) => {
    document.body.classList.remove('margin-none', 'margin-medium', 'margin-large');
  
    if (newSize === 'sem-margem') {
      document.body.classList.add('margin-none');
    } else if (newSize === 'padrao') {
      document.body.classList.add('margin-medium');
    } else if (newSize === 'margem-grande') {
      document.body.classList.add('margin-large');
    }
  
    localStorage.setItem('margin-size', newSize);
    setSelectedMargin(newSize);
    setFontSizeBoxVisible(false); // Fecha o menu após a interação
  };
  

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    if (selectedFontSize === 'grande') {
      document.body.classList.add('font-large');
    } else if (selectedFontSize === 'compacto') {
      document.body.classList.add('font-compact');
    }

    if (selectedMargin === 'sem-margem') {
      document.body.classList.add('margin-none');
    } else if (selectedMargin === 'padrao') {
      document.body.classList.add('margin-medium');
    } else if (selectedMargin === 'margem-grande') {
      document.body.classList.add('margin-large');
    }
  }, [isDarkMode, selectedFontSize, selectedMargin]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouch);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, [handleScroll, handleTouch]);

  const adicionarTitulo = () => chapters[chapterIndex]?.title || '';

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };
  

  const adjustTextAlignment = (newAlignment) => {
    document.body.classList.remove('align-left', 'align-center');
  
    if (newAlignment === 'esquerda') {
      document.body.classList.add('align-left');
    } else if (newAlignment === 'centralizado') {
      document.body.classList.add('align-center');
    }
  
    localStorage.setItem('alignment', newAlignment);
    setSelectedAlignment(newAlignment);
    setFontSizeBoxVisible(false); // Fecha o menu após a interação
  };
  
  useEffect(() => {
    if (selectedAlignment === 'esquerda') {
      document.body.classList.add('align-left');
    } else if (selectedAlignment === 'centralizado') {
      document.body.classList.add('align-center');
    }
  }, [selectedAlignment]);
  
  

  return (
    <div className="header">
      <button onClick={toggleFontSizeBox}>A</button>
      <p className="header_titulo">{adicionarTitulo()}</p>
      <button onClick={toggleDarkMode}>{isDarkMode ? 'C' : 'N'}</button>

   
       

        <div className={`menu-config ${isFontSizeBoxVisible ? 'visible' : ''}`}>
   <div className="musi" onClick={toggleFontSizeBox}>------</div>

  <div className="tabs">
    
    <button
      className={activeTab === 'layout' ? 'active' : ''}
      onClick={() => toggleTab('layout')}
    >
      Fonte
    </button>

    <button
  className={activeTab === 'alinhamento' ? 'active' : ''}
  onClick={() => toggleTab('alinhamento')}
>
  Layout
</button>

    <button
      className={activeTab === 'margem' ? 'active' : ''}
      onClick={() => toggleTab('margem')}
    >
      Margem
    </button>

    

  </div>

  {activeTab === 'layout' && (
    <div className="op">
      <div className="ap">
        
        <div>
          <input
            type="radio"
            id="padrao-id"
            name="font-size"
            value="padrao"
            checked={selectedFontSize === 'padrao'}
            onChange={() => adjustFontSize('padrao')}
          />
          <label className="ajust-option" htmlFor="padrao-id">Padrão</label>
        </div>
        <div>
          <input
            type="radio"
            id="compacto"
            name="font-size"
            value="compacto"
            checked={selectedFontSize === 'compacto'}
            onChange={() => adjustFontSize('compacto')}
          />
          <label className="ajust-option" htmlFor="compacto">Compacto</label>
        </div>
        <div>
          <input
            type="radio"
            id="grande"
            name="font-size"
            value="grande"
            checked={selectedFontSize === 'grande'}
            onChange={() => adjustFontSize('grande')}
          />
          <label className="ajust-option" htmlFor="grande">Grande</label>
        </div>
      </div>
    </div>
  )}

{activeTab === 'alinhamento' && (
  <div className="op">
    <div className=" ap-dois">

    <div>
        <input
          type="radio"
          id="centralizado"
          name="alignment"
          value="centralizado"
          checked={selectedAlignment === 'centralizado'}
          onChange={() => adjustTextAlignment('centralizado')}
        />
        <label className="ajust-option" htmlFor="centralizado">Justificado</label>
      </div>

      <div>
        <input
          type="radio"
          id="esquerda"
          name="alignment"
          value="esquerda"
          checked={selectedAlignment === 'esquerda'}
          onChange={() => adjustTextAlignment('esquerda')}
        />
        <label className="ajust-option" htmlFor="esquerda">Esquerda</label>
      </div>
      
    </div>
  </div>
)}

  {activeTab === 'margem' && (
    <div className="op">
      <div className="ap">
        
        <div>
          <input
            type="radio"
            id="padrao"
            name="margin-size"
            value="padrao"
            checked={selectedMargin === 'padrao'}
            onChange={() => adjustMarginSize('padrao')}
          />
          <label className="ajust-option" htmlFor="padrao">Padrão</label>
        </div>
        <div>
          <input
            type="radio"
            id="sem-margem"
            name="margin-size"
            value="sem-margem"
            checked={selectedMargin === 'sem-margem'}
            onChange={() => adjustMarginSize('sem-margem')}
          />
          <label className="ajust-option" htmlFor="sem-margem">Compacto</label>
        </div>
        <div>
          <input
            type="radio"
            id="margem-grande"
            name="margin-size"
            value="margem-grande"
            checked={selectedMargin === 'margem-grande'}
            onChange={() => adjustMarginSize('margem-grande')}
          />
          <label className="ajust-option" htmlFor="margem-grande">Grande</label>
        </div>
      </div>
    </div>
  )}





</div>



        </div>
   
  );
};

export default Header;
