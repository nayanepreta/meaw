import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import '../control/copy';
import '../styles/ebook.css';

import Cover from '../components/Cover';
import Infos from '../components/Infos';
import Intro from '../components/Intro';
import Summary from '../components/Summary';
import Preface from '../components/Preface';
import Chapter1 from '../chapters/Chapter1';
import Chapter2 from '../chapters/Chapter2';
import Chapter3 from '../chapters/Chapter3';
import Chapter4 from '../chapters/Chapter4';
import Chapter5 from '../chapters/Chapter5';
import Chapter6 from '../chapters/Chapter6';
import Chapter7 from '../chapters/Chapter7';
import Chapter8 from '../chapters/Chapter8';
import Chapter9 from '../chapters/Chapter9';
import Chapter10 from '../chapters/Chapter10';
import Chapter11 from '../chapters/Chapter11';
import Chapter12 from '../chapters/Chapter12';
import Afterword from '../components/Afterword';
import Credits from '../components/Credits';
import Colophon from '../components/Colophon';

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Função para alterar página e salvar no localStorage
  const setCurrentPageAndSave = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      localStorage.setItem('currentPage', page);
    }
  };

  const pages = [
    <Cover goToSummary={() => setCurrentPageAndSave(3)} onNext={() => setCurrentPageAndSave(1)} />,
    <Infos onNext={() => setCurrentPageAndSave(2)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Intro onNext={() => setCurrentPageAndSave(3)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Summary onNext={() => setCurrentPageAndSave(4)} goToCover={() => setCurrentPageAndSave(0)} goToChapter={(pageIndex) => setCurrentPageAndSave(pageIndex)} />,
    <Preface onNext={() => setCurrentPageAndSave(5)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter1 onNext={() => setCurrentPageAndSave(6)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter2 onNext={() => setCurrentPageAndSave(7)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter3 onNext={() => setCurrentPageAndSave(8)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter4 onNext={() => setCurrentPageAndSave(9)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter5 onNext={() => setCurrentPageAndSave(10)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter6 onNext={() => setCurrentPageAndSave(11)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter7 onNext={() => setCurrentPageAndSave(12)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter8 onNext={() => setCurrentPageAndSave(13)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter9 onNext={() => setCurrentPageAndSave(14)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter10 onNext={() => setCurrentPageAndSave(15)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter11 onNext={() => setCurrentPageAndSave(16)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Chapter12 onNext={() => setCurrentPageAndSave(17)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Afterword onNext={() => setCurrentPageAndSave(18)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Credits onNext={() => setCurrentPageAndSave(19)} goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
    <Colophon goToCover={() => setCurrentPageAndSave(0)} goToSummary={() => setCurrentPageAndSave(3)} />,
  ];

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    const savedPosition = localStorage.getItem('currentScrollPosition');

    if (savedPage) {
      setCurrentPage(parseInt(savedPage, 10));
    }

    if (savedPosition) {
      // Garantir que o scroll ocorra após a renderização completa.
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScrollSave = () => {
      localStorage.setItem('currentScrollPosition', window.scrollY || 0);
    };

    // Salva posição no evento de rolagem e fechamento.
    window.addEventListener('beforeunload', handleScrollSave);
    window.addEventListener('unload', handleScrollSave);

    return () => {
      window.removeEventListener('beforeunload', handleScrollSave);
      window.removeEventListener('unload', handleScrollSave);
    };
  }, []);

  const handleSwipeLeft = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPageAndSave(currentPage + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentPage > 0) {
      setCurrentPageAndSave(currentPage - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...swipeHandlers}>
      {pages[currentPage]}
    </div>
  );
};

export default Book;
