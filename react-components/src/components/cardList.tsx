import React from 'react';
import Card from './card/card';
import type { RootState } from '../store/store';
import { useSelector } from 'react-redux';

function CardList() {
  const searchResults = useSelector((state: RootState) => state.searchResults.searchResults);
  return (
    <div className="cardsContainer">
      {searchResults &&
        searchResults.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
    </div>
  );
}
export default CardList;
