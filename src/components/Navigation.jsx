import React, { useState } from "react";

const Navigation = ({ onNext, goToSummary, goToContents, goToCover }) => {
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  const handleFirstButtonClick = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };

  const ajustesTamanhoFonte = () => {
    alert("Ajustes");
  }

  return (

    
    <div className={`navigation ${showAdditionalButtons ? "show-extra-buttons" : ""}`}>
      
      <button onClick={handleFirstButtonClick}>
        <img
          src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/menu.png"
          alt="More Options"
          className="nav-icon"
          loading="lazy"
        />
      </button>

      <div
        className={`additional-buttons ${showAdditionalButtons ? "visible" : ""}`}
      >
        {goToSummary && <button onClick={goToSummary}>S</button>}
        {goToContents && <button onClick={goToContents}>C</button>}

      </div>

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
