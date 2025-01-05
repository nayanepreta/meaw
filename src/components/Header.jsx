import React, { useState, useEffect } from 'react';
import chapters from '../control/chapters';

const Header = ({ chapterIndex }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [lastTouchTime, setLastTouchTime] = useState(0);
  const [isFontSizeBoxVisible, setFontSizeBoxVisible] = useState(false);
  const [selectedFontSize, setSelectedFontSize] = useState(localStorage.getItem('font-size') || 'normal');

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

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsHeaderVisible(currentScrollTop < lastScrollTop);
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };

  const handleTouch = () => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastTouchTime;

    if (timeDifference < 300) {
      setIsHeaderVisible((prevState) => !prevState);
    }
    setLastTouchTime(currentTime);
  };

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem('darkMode', newDarkModeState);
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
  }, [lastScrollTop, lastTouchTime]);

  const adicionarTitulo = () => {
    if (chapters[chapterIndex]) {
      return chapters[chapterIndex].title;
    }
    return '';
  };

  if (!isHeaderVisible) return null;

  return (
    <div className="header">
      <button onClick={toggleFontSizeBox}>A</button>
      <p className="header_titulo">{adicionarTitulo()}</p>
      <button onClick={toggleDarkMode}>{isDarkMode ? 'C' : 'N'}</button>

      {isFontSizeBoxVisible && (
        <div className="font-size-box">
          <label>
            <div>
              <input
                
                type="radio"
                id="normal"
                name="font-size"
                value="normal"
                checked={selectedFontSize === 'normal'}
                onChange={() => adjustFontSize('normal')}
              />
              <label className='ajust-option' htmlFor="normal">Normal</label>
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
              <label className='ajust-option' htmlFor="grande">Médio</label>
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
              <label className='ajust-option' htmlFor="extragrande">Grande</label>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default Header;
