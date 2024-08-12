import { useState } from "react";
import "./Card.scss";

const WordCard = ({ word, transcription, translation, tags }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className="word-card">
      <div className="card-header">
        <p className="word">{word}</p>
        <p className="tags">{tags}</p>
      </div>
      <div className="card-body">
        <p className="transcription">{transcription}</p>
        {!showTranslation && (
          <button className="show-translation-btn" onClick={handleShowTranslation}>Показать перевод</button>)}
        {showTranslation && <p className="translation">{translation}</p>} 
      </div>
    </div>
  );
};

export default WordCard;