import React from 'react';
import Card from './card';
import { getRandomCardInfo } from '../helpers/generateCardData';

const numberOfCards = 8;

class CardList extends React.Component {
  insertCards(times: number) {
    const cards = [];
    for (let i = 0; i < times; i++) {
      const props = getRandomCardInfo();
      cards.push(
        <Card key={i} author={props.author} title={props.title} description={props.description} />
      );
    }
    return <div className="cardsContainer">{cards}</div>;
  }

  render() {
    return <>{this.insertCards(numberOfCards)}</>;
  }
}

export default CardList;
