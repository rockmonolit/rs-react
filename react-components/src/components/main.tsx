import React, { useState } from 'react';
import CardList from './cardList';
import SearchBar from './searchbar';
import Header from './header/header';

function MainPage() {
  return (
    <>
      <Header currentPage="Main" />
      <div className="wrapper">
        <h1>Main Page</h1>
        <p className="mainText">Please, type the name of the character you`d like to find</p>
        <SearchBar />
        <CardList />
      </div>
    </>
  );
}

export default MainPage;
