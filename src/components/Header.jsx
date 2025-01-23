import React, { useState, useEffect, useCallback } from 'react';
import chapters from '../control/chapters';

const Header = ({ chapterIndex }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [selectedFontSize, setSelectedFontSize] = useState(localStorage.getItem('font-size') || 'normal');
  const [isFontSizeBoxVisible, setFontSizeBoxVisible] = useState(false);
  const [selectedAlignment, setSelectedAlignment] = useState(localStorage.getItem('alignment') || 'centralizado');
  const adicionarTitulo = () => chapters[chapterIndex]?.title || '';
  
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
        setFontSizeBoxVisible(false);
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
        setFontSizeBoxVisible(false);
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
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    document.body.classList.remove('font-compact', 'font-large', 'font-super-grande');
  
    if (newSize === 'compacto') {
      document.body.classList.add('font-compact');
    } else if (newSize === 'grande') {
      document.body.classList.add('font-large');
    } else if (newSize === 'super-grande') {
      document.body.classList.add('font-super-grande');
    }
  
    localStorage.setItem('font-size', newSize);
    setSelectedFontSize(newSize);
  
    window.scrollTo(0, scrollTop);
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
    } else if (selectedFontSize === 'super-grande') {
      document.body.classList.add('font-super-grande');
    }

    if (selectedAlignment === 'esquerda') {
      document.body.classList.add('align-left');
    } else if (selectedAlignment === 'centralizado') {
      document.body.classList.add('align-center');
    }
  }, [isDarkMode, selectedFontSize, selectedAlignment]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouch);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, [handleScroll, handleTouch]);

  return (
    <div className="header">
      <button onClick={toggleFontSizeBox}>A</button>
      <p className="header_titulo">{adicionarTitulo()}</p>
      <button onClick={toggleDarkMode}>{isDarkMode ? 'C' : 'N'}</button>

      <div className={`menu-config ${isFontSizeBoxVisible ? 'visible' : ''}`}>
        <div className="font-options">
          <button className='mds'>M</button>
          <div className="buttons">
            <button
              className={`ajust-option ${selectedFontSize === 'compacto' ? 'active' : ''}`}
              onClick={() => adjustFontSize('compacto')}
            >
              C
            </button>
            <button
              className={`ajust-option ${selectedFontSize === 'padrao' ? 'active' : ''}`}
              onClick={() => adjustFontSize('padrao')}
            >
              P
            </button>
            <button
              className={`ajust-option ${selectedFontSize === 'grande' ? 'active' : ''}`}
              onClick={() => adjustFontSize('grande')}
            >
              G
            </button>

            <button
              className={`ajust-option ${selectedFontSize === 'super-grande' ? 'active' : ''}`}
              onClick={() => adjustFontSize('super-grande')}
            >
              SG
            </button>
          </div>
          <button className='mds'>M</button>
        </div>

        <div className="align-options">
          <button
            className={`ajust-option ${selectedAlignment === 'centralizado' ? 'active' : ''}`}
            onClick={() => adjustTextAlignment('centralizado')}
          >
            A
          </button>
          <button
            className={`ajust-option ${selectedAlignment === 'esquerda' ? 'active' : ''}`}
            onClick={() => adjustTextAlignment('esquerda')}
          >
            E
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
