import React from 'react';
import Card from './card/card';
import { CharacterInfo } from '../types/types';
import type { RootState } from '../store/store';
import { useSelector } from 'react-redux';

const reduxSearchResults = useSelector((state: RootState) => state.searchResults.searchResults);

function CardList() {
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
