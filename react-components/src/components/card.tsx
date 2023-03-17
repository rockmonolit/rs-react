import React from 'react';
import { CardInfo } from '../helpers/generateCardData';

class Card extends React.Component<CardInfo> {
  constructor(props: CardInfo) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="cardContent">
          <div className="cardImage"></div>
          <p className="titleText cardTitle">{this.props.title}</p>
          <p className="mainText cardAuthor">{this.props.author}</p>
          <hr></hr>
          <p className="mainText cardText">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
