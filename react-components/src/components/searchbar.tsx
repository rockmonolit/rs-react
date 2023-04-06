import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

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

function SearchBar({
  setCharacterCards,
}: {
  setCharacterCards: Dispatch<SetStateAction<CharacterInfo[]>>;
}) {
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || '');
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState<CharacterInfo[]>([]);

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
          setCharacters(result.results);
          return result;
        },
        (error) => {
          setError(error);
          console.log(error.message);
        }
      )
      .then((characters) => setCharacterCards(characters.results))
      .catch((error) => console.error(error));
  }

  return (
    <section className="searchBar">
      <form
        className="form searchCard"
        onSubmit={(e) => {
          fetchCharacters()
            .then(() => setCharacterCards(characters))
            .catch((error) => console.error(error));
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
      {error && <p className="mainText cardText">Something went wrong: {error}.</p>}
    </section>
  );
}

export default SearchBar;
