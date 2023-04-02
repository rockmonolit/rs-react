import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || '');

  useEffect(() => {
    localStorage.setItem('inputValue', '');
    return () => {
      localStorage.setItem('inputValue', inputValue);
    };
  }, [inputValue]);

  return (
    <section className="searchBar">
      <form
        className="form searchCard"
        onSubmit={(e) => {
          e.preventDefault();
          setInputValue('');
          localStorage.setItem('inputValue', '');
        }}
      >
        <input
          type="text"
          className="input searchCardInput"
          placeholder="Enter Text Here"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button className="button">Search</button>
      </form>
    </section>
  );
}

export default SearchBar;
