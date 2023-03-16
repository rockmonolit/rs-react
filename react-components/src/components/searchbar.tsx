import React from 'react';

class SearchBar extends React.Component<unknown, { input: string }> {
  constructor(props: { input: string }) {
    super(props);
    this.state = { input: '' };
    this.saveInput = this.saveInput.bind(this);
  }

  saveInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    this.setState({ input: event.currentTarget.value });
    localStorage.setItem('input', JSON.stringify(event.currentTarget.value));
  };

  componentDidMount() {
    const prevInputValue = localStorage.getItem('input');
    if (prevInputValue) {
      this.setState({ input: JSON.parse(prevInputValue) });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('input', JSON.stringify(this.state.input));
  }

  render() {
    return (
      <section className="searchBar">
        <form
          className="form searchCard"
          onSubmit={() => {
            this.setState({ input: '' });
            localStorage.setItem('input', '');
          }}
        >
          <input
            type="text"
            className="input searchCardInput"
            placeholder="Enter Text Here"
            onInput={this.saveInput}
            value={this.state.input}
          />
          <button className="button">Search</button>
        </form>
      </section>
    );
  }
}

export default SearchBar;
