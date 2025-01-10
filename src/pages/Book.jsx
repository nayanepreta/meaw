import React, { useState,  useEffect } from 'react';
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
  const setCurrentPageAndSave = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      localStorage.setItem('currentPage', page); 
    }
  };
  
  const pages = [
    <Cover  // 0
      goToSummary={() => setCurrentPageAndSave(3)}
      onNext={() => setCurrentPageAndSave(1)} />,

    <Infos // 1
      onNext={() => setCurrentPageAndSave(2)} 
      goToCover={() => setCurrentPageAndSave(0)}
      goToSummary={() => setCurrentPageAndSave(3)} />,

    <Intro // 2
      onNext={() => setCurrentPageAndSave(3)} 
      goToCover={() => setCurrentPageAndSave(0)}
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Summary // 3
      onNext={() => setCurrentPageAndSave(4)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToChapter={(pageIndex) => setCurrentPageAndSave(pageIndex)}/>,

    <Preface // 4
      onNext={() => setCurrentPageAndSave(5)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter1 // 5
      onNext={() => setCurrentPageAndSave(6)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,
      
    <Chapter2 // 6
      onNext={() => setCurrentPageAndSave(7)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,
    
    <Chapter3 // 7
      onNext={() => setCurrentPageAndSave(8)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,
    
    <Chapter4 // 8
      onNext={() => setCurrentPageAndSave(9)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter5 // 9
      onNext={() => setCurrentPageAndSave(10)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,


    <Chapter6 // 10
      onNext={() => setCurrentPageAndSave(11)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,


    <Chapter7 // 11
      onNext={() => setCurrentPageAndSave(12)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,


    <Chapter8 // 12
      onNext={() => setCurrentPageAndSave(13)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter9 // 13
      onNext={() => setCurrentPageAndSave(14)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter10 // 14
      onNext={() => setCurrentPageAndSave(15)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter11 // 15
      onNext={() => setCurrentPageAndSave(16)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,
    
    <Chapter12 // 16
      onNext={() => setCurrentPageAndSave(17)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Afterword // 17
      onNext={() => setCurrentPageAndSave(18)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Credits // 18
      onNext={() => setCurrentPageAndSave(19)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Colophon // 19
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,
  ];

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(parseInt(savedPage, 10));
    }
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