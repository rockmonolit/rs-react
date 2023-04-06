import React, { Dispatch, SetStateAction } from 'react';
import { CharacterInfo } from '../searchbar';

function CardModal({
  card,
  setIsClicked,
}: {
  card: CharacterInfo;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}) {
  const handleClick = () => {
    setIsClicked(false);
  };

  return (
    <div className="overlay" onClick={handleClick}>
      <div className="modal">
        <div className="modalContent">
          <div className="modalImage" style={{ backgroundImage: `url(${card.image})` }}></div>
          <div className="modalInfo">
            <p className="titleText cardTitle">{card.name}</p>
            <p className="mainText cardAuthor">Species: {card.species}</p>
            <hr></hr>
            <p className="mainText cardText">Status: {card.status}</p>
            <p className="mainText cardText">Location: {card.location.name}</p>
            <p className="mainText cardText">Origin: {card.origin.name}</p>
            <p className="mainText cardText">Gender: {card.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
