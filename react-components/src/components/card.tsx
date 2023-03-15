import React from 'react';
import { getRandomCardInfo, CardInfo } from '../helpers/generateCardData'

class Card extends React.Component {
  render() {
    const cardInfo: CardInfo = getRandomCardInfo();
    return (
      <div className="card">
        <div className="cardContent">
          <div className="cardImage"></div>
          <p className="titleText cardTitle">{cardInfo.title}</p>
          <p className="mainText cardAuthor">{cardInfo.author}</p>
          <hr></hr>
          <p className="mainText cardText">{cardInfo.description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
