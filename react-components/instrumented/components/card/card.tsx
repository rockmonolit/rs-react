import React, { useState } from 'react';
import { CharacterInfo } from '../../types/types';
import CardModal from './cardModal';
import { rickApi } from '../../slices/apiSlice';
import 'whatwg-fetch';

export type CardProps = {
  title: string;
  author: string;
  description: string;
};

function Card(card: CharacterInfo) {
  const [isClicked, setIsClicked] = useState(false);
  const [trigger, { data, error, isFetching }] = rickApi.endpoints.getCharacterById.useLazyQuery();

  const handleClick = async () => {
    await trigger(card.id);
    setIsClicked(true);
  };

  return (
    <>
      {isClicked && data && <CardModal card={data} setIsClicked={setIsClicked} />}
      {error && <p className="titleText cardTitle errorText">Something Went Wrong</p>}
      {isFetching && <p className="titleText cardTitle loading">Loading. Please, wait.</p>}
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
