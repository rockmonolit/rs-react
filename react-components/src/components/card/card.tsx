import React, { useState } from 'react';
import { CharacterInfo } from '../../types/types';
import CardModal from './cardModal';
import { fetchApiCharacter } from '../../api/apiCalls';
import 'whatwg-fetch';

export type CardProps = {
  title: string;
  author: string;
  description: string;
};

function Card(card: CharacterInfo) {
  const [isClicked, setIsClicked] = useState(false);
  const [modalContent, setModalContent] = useState<CharacterInfo>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await fetchApiCharacter(card.id, { setLoading, setModalContent, setError });
    setIsClicked(true);
  };

  return (
    <>
      {isClicked && modalContent && <CardModal card={modalContent} setIsClicked={setIsClicked} />}
      {error && <p className="titleText cardTitle errorText">{error}</p>}
      {loading && <p className="titleText cardTitle loading">Loading. Please, wait.</p>}
      <div className="card" onClick={handleClick}>
        <div className="cardContent">
          <div className="cardImage" style={{ backgroundImage: `url(${card.image})` }}></div>
          <p className="titleText cardTitle">{card.name}</p>
          <p className="mainText cardAuthor">Species: {card.species}</p>
          <hr></hr>
          <p className="mainText cardText">Status: {card.status}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
