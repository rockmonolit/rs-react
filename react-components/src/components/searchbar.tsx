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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<CharacterInfo[]>([]);

  useEffect(() => {
    localStorage.setItem('inputValue', '');
    return () => {
      localStorage.setItem('inputValue', inputValue);
    };
  }, [inputValue]);

  useEffect(() => {
    fetchCharacters('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchCharacters(value: string) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .then((res) => {
        setLoading(true);
        if (res.status === 404) {
          setError('Nothing was found =(\n Please, try again!');
        }
        return res.json();
      })
      .then(
        (result) => {
          setLoading(false);
          setCharacters(result.results);
          return result;
        },
        (error) => {
          setError(error.message);
        }
      )
      .then((characters) => setCharacterCards(characters.results))
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <section className="searchBar">
      <form
        className="form searchCard"
        onSubmit={(e) => {
          setError('');
          fetchCharacters(inputValue).then(() => setCharacterCards(characters));
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
      {loading && <p className="titleText cardTitle loading">Loading. Please, wait.</p>}
      {error && <p className="titleText cardTitle errorText">{error}</p>}
    </section>
  );
}

export default SearchBar;
