import React from 'react';
import { CharacterInfo } from '../searchbar';

export type CardProps = {
  title: string;
  author: string;
  description: string;
};

function Card(card: CharacterInfo) {
  const handleClick = () => {
    console.log(card);
  };

  return (
    <div className="card">
      <div className="cardContent">
        <div
          className="cardImage"
          onClick={handleClick}
          style={{ backgroundImage: `url(${card.image})` }}
        ></div>
        <p className="titleText cardTitle">{card.name}</p>
        <p className="mainText cardAuthor">Species: {card.species}</p>
        <hr></hr>
        <p className="mainText cardText">Status: {card.status}</p>
      </div>
    </div>
  );
}

export default Card;
