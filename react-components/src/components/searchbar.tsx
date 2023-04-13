import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { fetchApiCharacters } from '../api/apiCalls';
import { CharacterInfo } from '../types/types';
import { rickApi } from '../slices/apiSlice';
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
  const reduxInputValue = useSelector((state: RootState) => state.searchText.inputValue);
  const [inputValue, setInputValue] = useState(reduxInputValue || '');
  // const [savedInputValue, setSavedInputValue] = useState(
  //   localStorage.getItem('savedInputValue') || ''
  // );

  const [err, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<CharacterInfo[]>([]);

  //const { data, error, isLoading } = useGetCharacterByNameQuery(savedInputValue);

  const reduxSearchResults = useSelector((state: RootState) => state.searchResults.searchResults);
  const dispatch = useDispatch();

  const [trigger, { data }] = rickApi.endpoints.getCharacterByName.useLazyQuery();

  useEffect(() => {
    fetchApiCharacters(reduxInputValue, {
      setCharacterCards,
      setError,
      setLoading,
      setCharacters,
    });
  }, [err, reduxInputValue, setCharacterCards]);

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
          //setSavedInputValue(inputValue);

          dispatch(addInputValue(inputValue));
          trigger(reduxInputValue);

          //localStorage.setItem('savedInputValue', inputValue);

          if (!inputValue) {
            showWarning();
          }

          //localStorage.setItem('inputValue', inputValue);

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
      {err && <p className="titleText cardTitle errorText">{err}</p>}
    </section>
  );
}

export default SearchBar;
