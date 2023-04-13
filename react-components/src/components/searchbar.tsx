import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { fetchApiCharacters } from '../api/apiCalls';
import { CharacterInfo } from '../types/types';
import { useGetCharacterByNameQuery } from '../slices/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addInputValue } from '../slices/searchTextSlice';
import { addSearchResults } from '../slices/searchResultsSlice';
import type { RootState } from '../store/store';
import 'whatwg-fetch';

function SearchBar({
  setCharacterCards,
}: {
  setCharacterCards: Dispatch<SetStateAction<CharacterInfo[]>>;
}) {
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || '');
  const [savedInputValue, setSavedInputValue] = useState(
    localStorage.getItem('savedInputValue') || ''
  );

  const [err, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<CharacterInfo[]>([]);

  const { data, error, isLoading } = useGetCharacterByNameQuery(savedInputValue);

  const reduxInputValue = useSelector((state: RootState) => state.searchText.inputValue);
  const reduxSearchResults = useSelector((state: RootState) => state.searchResults.searchResults);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiCharacters(savedInputValue, {
      setCharacterCards,
      setError,
      setLoading,
      setCharacters,
    });
  }, [error, reduxInputValue, setCharacterCards]);

  const showWarning = () => {
    setError('Search field is empty.\n Try to write something before submitting.');
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <section className="searchBar">
      <form
        className="form searchCard"
        onSubmit={(e) => {
          e.preventDefault();
          setSavedInputValue(inputValue);

          dispatch(addInputValue(inputValue));

          localStorage.setItem('savedInputValue', inputValue);

          if (!inputValue) {
            showWarning();
          }

          localStorage.setItem('inputValue', inputValue);

          fetchApiCharacters(inputValue, {
            setCharacterCards,
            setError,
            setLoading,
            setCharacters,
          }).then(() => setCharacterCards(characters));

          dispatch(addSearchResults(characters));

          setInputValue('');
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
      {error && <p className="titleText cardTitle errorText">{err}</p>}
    </section>
  );
}

export default SearchBar;
