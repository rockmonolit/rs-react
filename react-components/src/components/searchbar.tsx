import React from 'react';

interface SearchBarState {
  inputValue: string;
}

class SearchBar extends React.Component<unknown, SearchBarState> {
  constructor(props: SearchBarState) {
    super(props);
    this.state = { inputValue: '' };
    this.saveInput = this.saveInput.bind(this);
  }

  saveInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    this.setState({ inputValue: event.currentTarget.value });
    localStorage.setItem('input', JSON.stringify(event.currentTarget.value));
  };

  componentDidMount() {
    const prevInputValue = localStorage.getItem('input');
    if (prevInputValue) {
      this.setState({ inputValue: JSON.parse(prevInputValue) });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('input', JSON.stringify(this.state.inputValue));
  }

  render() {
    return (
      <section className="searchBar">
        <form
          className="form searchCard"
          onSubmit={() => {
            this.setState({ inputValue: '' });
            localStorage.setItem('input', '');
          }}
        >
          <input
            type="text"
            className="input searchCardInput"
            placeholder="Enter Text Here"
            onInput={this.saveInput}
            value={this.state.inputValue}
          />
          <button className="button">Search</button>
        </form>
      </section>
    );
  }
}

export default SearchBar;
