import React from 'react';

class SearchBar extends React.Component {
  saveInput(event) {
    localStorage.setItem('input', JSON.stringify(event.target.value));
  }

  restoreInput() {
    const prevValue = localStorage.getItem('input');
    if (prevValue) {
      return prevValue;
    }
  }

  render() {
    return (
      <section className='searchBar'>
        <form className='form searchCard'>
          <input
            type='text'
            className='input searchCardInput'
            placeholder='Enter Text Here'
            onInput={this.saveInput}
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