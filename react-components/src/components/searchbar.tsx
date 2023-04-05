import React, { useState, useEffect } from 'react';

export interface CharacterInfo {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

function SearchBar() {
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || '');
  const [error, setError] = useState(null);
  const [character, setCharacter] = useState<CharacterInfo[]>([]);

  useEffect(() => {
    localStorage.setItem('inputValue', '');
    return () => {
      localStorage.setItem('inputValue', inputValue);
    };
  }, [inputValue]);

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchCharacters() {
    fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setCharacter(result.results);
          return result;
        },
        (error) => {
          setError(error);
        }
      )
      .then((data) => console.log(data.results))
      .catch((error) => console.error(error));
  }

  return (
    <section className="searchBar">
      <form
        className="form searchCard"
        onSubmit={(e) => {
          fetchCharacters();
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
      {!error && character && (
        <p className="mainText cardText">
          Name: {character.length > 0 && character.map((char) => char.name)}{' '}
        </p>
      )}
    </section>
  );
}

export default SearchBar;
