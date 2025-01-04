import React, { useState, useEffect } from 'react';
import chapters from '../control/chapters';

  const Header = ({chapterIndex}) => {
   
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [lastTouchTime, setLastTouchTime] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop < lastScrollTop) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }

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
  }, [isDarkMode]);

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
      
      return chapters[chapterIndex].title;}
    return "";
  }


  if (!isHeaderVisible) return null;

  const ajustesTamanhoFonte = () => {
    alert("Ajustes");
  }
    
  return (
    <div className="header">
      <button onClick={ajustesTamanhoFonte}>A</button>
      <p className='header_titulo'>{adicionarTitulo()}</p>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'C' : 'N'}
        </button>
    </div>
  );
};

export default Header;
