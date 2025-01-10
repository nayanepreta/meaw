import React, { useState } from "react";

const Navigation = ({ onNext, goToSummary, goToCover }) => {
  

  

  return (

    
    <div className="navigation">
      
      
        {goToSummary && (<button onClick={goToSummary}>S</button>)}

     

      {goToCover && (
        <button onClick={goToCover}>
          <img
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/casa.png"
            alt="Cover"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      )}

      {onNext && (
        <button onClick={onNext}>
          <img
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/depois.png"
            alt="Next"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      )}
    </div>
  );
};

export default Navigation;
