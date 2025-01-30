import React, { useState, useEffect, useCallback } from 'react';
import book_infos from '../control/book_infos';
import chapters_in_wonderland from '../control/chapters_in_wonderland';

const Header = ({ chapterIndex }) => {
  // Estados
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [selectedFontSize, setSelectedFontSize] = useState(localStorage.getItem('font-size') || 'normal');
  const [isFontSizeBoxVisible, setFontSizeBoxVisible] = useState(false);
  const [selectedAlignment, setSelectedAlignment] = useState(localStorage.getItem('alignment') || 'centralizado');
  const [showTitle, setShowTitle] = useState(false); // Estado para alternar entre autor e título
  const adicionarTitulo = () => chapters_in_wonderland[chapterIndex]?.title || '';
  
  // Função para detectar rolagem e ajustar a visibilidade do cabeçalho e o estado do título
  const handleScroll = useCallback(() => {
    const headerElement = document.querySelector('.header');
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const lastScrollTop = parseInt(localStorage.getItem('lastScrollTop'), 10) || 0;
    
    // Verifica se o usuário está rolando para cima
    const isScrollingUp = currentScrollTop < lastScrollTop;

    if (headerElement) {
      if (isScrollingUp) {
        headerElement.classList.add('visible');
      } else {
        headerElement.classList.remove('visible');
         // Fecha Header durante a rolagem para baixo
        setFontSizeBoxVisible(false);
      }
    }

    // Atualiza estado para mostrar o título ao atingir 50% da página
    const scrollPercentage =
      (currentScrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    setShowTitle(scrollPercentage >= 4);

    // Salva a posição atual de rolagem no localStorage
    localStorage.setItem('lastScrollTop', currentScrollTop <= 0 ? 0 : currentScrollTop);
  }, []);

  // Função para lidar com toques (dispositivos móveis) e alternar a visibilidade do cabeçalho
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

  // Alterna entre modo escuro e claro
  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem('darkMode', newDarkModeState);
  };

  // Alterna a visibilidade do menu de ajuste de fonte
  const toggleFontSizeBox = () => {
    setFontSizeBoxVisible((prev) => !prev);
  };

  // Ajusta o tamanho da fonte no corpo do documento
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

    // Salva o tamanho da fonte no localStorage
    localStorage.setItem('font-size', newSize);
    setSelectedFontSize(newSize);

    // Mantém a posição de rolagem ao ajustar o tamanho da fonte
    window.scrollTo(0, scrollTop);
  };

  // Ajusta o alinhamento do texto no corpo do documento
  const adjustTextAlignment = (newAlignment) => {
    document.body.classList.remove('align-left', 'align-center');

    if (newAlignment === 'esquerda') {
      document.body.classList.add('align-left');
    } else if (newAlignment === 'centralizado') {
      document.body.classList.add('align-center');
    }

    // Salva o alinhamento no localStorage
    localStorage.setItem('alignment', newAlignment);
    setSelectedAlignment(newAlignment);
  };

  // Aplica configurações armazenadas no localStorage ao carregar o componente
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

  // Adiciona event listeners para rolagem e toque
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
      <button>
        <img
          src="https://placehold.co/20"
          alt="Logo editora"
          loading="lazy"
        />
      </button>

      {/* Alterna entre autor e título com base no estado */}
      <p className="header_titulo">{showTitle ? adicionarTitulo() : "Lewis Carroll"}</p>

      <button onClick={toggleFontSizeBox}>
        <img
          src="https://placehold.co/20"
          alt="Configurações"
          loading="lazy"
        />
      </button>

      <div className={`menu-config ${isFontSizeBoxVisible ? 'visible' : ''}`}>
        {/* Menu de configuração */}
        <div className="font-options">
          <button
            className={`ajust-option ${selectedFontSize === 'compacto' ? 'active' : ''}`}
            onClick={() => adjustFontSize('compacto')}
          >
            <img
              src="https://placehold.co/20"
              alt="Fonte compacta"
              loading="lazy"
            />
          </button>
          <button
            className={`ajust-option ${selectedFontSize === 'padrao' ? 'active' : ''}`}
            onClick={() => adjustFontSize('padrao')}
          >
            <img
              src="https://placehold.co/20"
              alt="Fonte padrão"
              loading="lazy"
            />
          </button>
          <button
            className={`ajust-option ${selectedFontSize === 'grande' ? 'active' : ''}`}
            onClick={() => adjustFontSize('grande')}
          >
            <img
              src="https://placehold.co/20"
              alt="Fonte grande"
              loading="lazy"
            />
          </button>
          <button
            className={`ajust-option ${selectedFontSize === 'super-grande' ? 'active' : ''}`}
            onClick={() => adjustFontSize('super-grande')}
          >
            <img
              src="https://placehold.co/20"
              alt="Baixa visão"
              loading="lazy"
            />
          </button>
        </div>

        <div>|</div>

        <div className="align-options">
          <button
            className={`ajust-option ${selectedAlignment === 'centralizado' ? 'active' : ''}`}
            onClick={() => adjustTextAlignment('centralizado')}
          >
            <img
              src="https://placehold.co/20"
              alt="Download"
              loading="lazy"
            />
          </button>
          <button
            className={`ajust-option ${selectedAlignment === 'esquerda' ? 'active' : ''}`}
            onClick={() => adjustTextAlignment('esquerda')}
          >
            <img
              src="https://placehold.co/20"
              alt="Download"
              loading="lazy"
            />
          </button>
        </div>

        <div>|</div>

        <div>
          <button>
            <img
              src="https://placehold.co/20"
              alt="Download"
              loading="lazy"
            />
          </button>
          <button onClick={toggleDarkMode}>
            <img
              src={isDarkMode ? 'https://placehold.co/20' : 'https://placehold.co/20'}
              alt={isDarkMode ? 'Ativar Modo Norturno' : 'Ativar modo Claro'}
              loading="lazy"
            />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
