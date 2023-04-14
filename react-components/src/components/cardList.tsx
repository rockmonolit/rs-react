import React from 'react';
import Card from './card/card';
import type { RootState } from '../store/store';
import { useSelector } from 'react-redux';

function CardList() {
  const reduxSearchResults = useSelector((state: RootState) => state.searchResults.searchResults);
  return (
    <div className="cardsContainer">
      {reduxSearchResults &&
        reduxSearchResults.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
    </div>
  );
}
export default CardList;
