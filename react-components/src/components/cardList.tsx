import React from 'react';
import Card from './card';
import { getCardsInfo } from '../helpers/getCardsInfo';

class CardList extends React.Component {
  render() {
    return (
      <div className="cardsContainer">
        {getCardsInfo().map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    );
  }
}

export default CardList;
