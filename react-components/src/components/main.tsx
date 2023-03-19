import React from 'react';
import CardList from './cardList';
import SearchBar from './searchbar';
import Header from './header';

function MainPage() {
  return (
    <>
      <Header currentPage="Main" />
      <div className="wrapper">
        <h1>Main Page</h1>
        <SearchBar />
        <CardList />
      </div>
    </>
  );
}

export default MainPage;
