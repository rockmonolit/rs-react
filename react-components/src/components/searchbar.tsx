import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <section className='searchBar'>
      <form className='form searchCard'>
        <input
          type='text'
          className='input searchCardInput'
          placeholder='Enter Text Here'
        />
        <button className='button'>
          Search
        </button>
      </form>
    </section>
    );
  }
}

export default SearchBar;