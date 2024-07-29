import { useState } from "react";
import "./Card.scss";

const WordCard = ({ word, transcription, translation, topic }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className="word-card">
      <div className="card-side front">
        <p className="word">{word}</p>
        <p className="transcription">{transcription}</p>
      </div>
      <div className="card-side back">       
        {showTranslation && <p className="translation">{translation}</p>}
        <button className="show-translation-btn" onClick={handleShowTranslation}>Показать перевод</button>
      </div>
    </div>
  );
};

export default WordCard;