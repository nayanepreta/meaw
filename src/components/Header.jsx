import React, { useState, useEffect, useCallback } from 'react';
import chapters from '../control/chapters';

const Header = ({ chapterIndex }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [selectedFontSize, setSelectedFontSize] = useState(localStorage.getItem('font-size') || 'normal');
  const [isFontSizeBoxVisible, setFontSizeBoxVisible] = useState(false);

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
    document.body.classList.remove('font-large', 'font-xlarge');
    if (newSize === 'grande') {
      document.body.classList.add('font-large');
    } else if (newSize === 'extragrande') {
      document.body.classList.add('font-xlarge');
    }
    localStorage.setItem('font-size', newSize);
    setSelectedFontSize(newSize);
    setFontSizeBoxVisible(false);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    if (selectedFontSize === 'grande') {
      document.body.classList.add('font-large');
    } else if (selectedFontSize === 'extragrande') {
      document.body.classList.add('font-xlarge');
    }
  }, [isDarkMode, selectedFontSize]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouch);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, [handleScroll, handleTouch]);

  const adicionarTitulo = () => chapters[chapterIndex]?.title || '';

  return (
    <div className="header">
      <button onClick={toggleFontSizeBox}>A</button>
      <p className="header_titulo">{adicionarTitulo()}</p>
      <button onClick={toggleDarkMode}>{isDarkMode ? 'C' : 'N'}</button>

      <div className={`menu-config ${isFontSizeBoxVisible ? 'visible' : ''}`}>
        <p>Tamanho fonte</p>
        <div>
          <input
            type="radio"
            id="normal"
            name="font-size"
            value="normal"
            checked={selectedFontSize === 'normal'}
            onChange={() => adjustFontSize('normal')}
          />
          <label className="ajust-option" htmlFor="normal">Normal</label>
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
          <label className="ajust-option" htmlFor="grande">Médio</label>
        </div>
        <div>
          <input
            type="radio"
            id="extragrande"
            name="font-size"
            value="extragrande"
            checked={selectedFontSize === 'extragrande'}
            onChange={() => adjustFontSize('extragrande')}
          />
          <label className="ajust-option" htmlFor="extragrande">Grande</label>
        </div>
      </div>
    </div>
  );
};

export default Header;
