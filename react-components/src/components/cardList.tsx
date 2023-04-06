import React from 'react';
import Card from './card/card';
import { CharacterInfo } from './searchbar';

function CardList({ cards }: { cards: CharacterInfo[] }) {
  return (
    <div className="cardsContainer">
      {cards &&
        cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
    </div>
  );
}
export default CardList;
