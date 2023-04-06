import React, { useState } from 'react';
import { CharacterInfo } from '../searchbar';
import CardModal from './cardModal';

export type CardProps = {
  title: string;
  author: string;
  description: string;
};

function Card(card: CharacterInfo) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      {isClicked && <CardModal card={card} setIsClicked={setIsClicked} />}
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
