import React, { Dispatch, SetStateAction } from 'react';
import { CharacterInfo } from '../../types/types';

function CardModal({
  card,
  setIsClicked,
}: {
  card: CharacterInfo;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className="overlay"
      onClick={() => {
        setIsClicked(false);
      }}
    >
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
          <p
            className="titleText closeIcon"
            onClick={() => {
              setIsClicked(false);
            }}
          >
            X
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
