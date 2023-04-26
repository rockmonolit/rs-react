import React, { useState, useEffect } from 'react';
import { rickApi } from '../slices/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { updateInputValue } from '../slices/searchTextSlice';
import { updateSearchResults } from '../slices/searchResultsSlice';
import type { RootState } from '../store/store';
import 'whatwg-fetch';

function SearchBar() {
  const reduxInputValue = useSelector((state: RootState) => state.searchText.inputValue);
  const [inputValue, setInputValue] = useState(reduxInputValue || '');

  const [err, setError] = useState('');

  const dispatch = useDispatch();

  const [trigger, { isFetching, isError, error }] =
    rickApi.endpoints.getCharacterByName.useLazyQuery();

  useEffect(() => {
    trigger(reduxInputValue);
  }, [reduxInputValue, trigger]);

  useEffect(() => {
    if (!reduxInputValue) {
      trigger('').then((res) => {
        if (res.data) {
          dispatch(updateSearchResults(res.data.results));
        }
      });
    }
  }, [dispatch, trigger, reduxInputValue]);

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
          dispatch(updateInputValue(inputValue));
          trigger(inputValue).then((res) => {
            res.data
              ? dispatch(updateSearchResults(res.data.results))
              : dispatch(updateSearchResults([]));
          });

          if (!inputValue) {
            showWarning();
          }
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
      {isFetching && <p className="titleText cardTitle loading">Loading. Please, wait.</p>}
      {err && <p className="titleText cardTitle errorText">{err}</p>}
      {isError && error && (
        <p className="titleText cardTitle errorText">
          Nothing was found: {'status' in error ? error.status : 'Not 404'}
        </p>
      )}
    </section>
  );
}

export default SearchBar;
