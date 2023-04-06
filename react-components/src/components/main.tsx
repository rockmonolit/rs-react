import React, { useState } from 'react';
import CardList from './cardList';
import SearchBar from './searchbar';
import Header from './header/header';
import { CharacterInfo } from './searchbar';

function MainPage() {
  const [characterCards, setCharacterCards] = useState<CharacterInfo[]>([]);
  return (
    <>
      <Header currentPage="Main" />
      <div className="wrapper">
        <h1>Main Page</h1>
        <SearchBar setCharacterCards={setCharacterCards} />
        <CardList cards={characterCards} />
      </div>
    </>
  );
}

export default MainPage;
