import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';
import book_infos from '../control/book_infos';
import chapters from '../control/chapters_in_wonderland';
import Header from '../components/Header';
import Navigation from './Navigation';
import Footer from './Footer'; 

const Chapter = ({  chapterNumber, onNext, goToSummary, goToCover }) => {
  const { title: chapterTitle, chap: chapterRoman, img: image, texts: chapterTexts } = chapters[chapterNumber];

  useEffect(() => {
    const bookTitleT = book_infos.title;
    document.title = `${chapterTitle} | ${bookTitleT}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = book_infos.title;
    };
  }, [chapterTitle]);

  return (
    <div className="page chapter_page">
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        
      />
      <Footer />
      <Header chapterIndex={chapterNumber}/>
      
      <div className="chapter_head">
        <span className="chapter_subtitle">Chapter {chapterRoman}</span>
        <h2 className="chapter_title">{chapterTitle}</h2>
        <img className="chapter_img_abertura" src={image} alt="" loading="lazy" />
      </div>

      <div className="chapter_content">
        {chapterTexts.map((paragraph, index) => (
          <p
            className={paragraph.className}
            key={index}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph.text) }}
          ></p>
        ))}
      </div>

      

      
    </div>
  );
};

export default Chapter;
