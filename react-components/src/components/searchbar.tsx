import React from 'react';

class SearchBar extends React.Component<{}, { input: string }> {
  constructor(props: { input: string }) {
    super(props);
    this.state = { input: "" };
    this.saveInput = this.saveInput.bind(this);
  }

  saveInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    this.setState({ input: event.currentTarget.value });
  };

  componentDidMount() {
    const prevInputValue = localStorage.getItem('input');
    if (prevInputValue) {
      this.setState({ input: JSON.parse(prevInputValue).input });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('input', JSON.stringify(this.state));
  }

  render() {
    return (
      <section className='searchBar'>
        <form
          className='form searchCard'
          onSubmit={() => {
            this.setState({ input: "" });
            localStorage.setItem('input', "");
          }}
        >
          <input
            type='text'
            className='input searchCardInput'
            placeholder='Enter Text Here'
            onInput={this.saveInput}
            value={this.state.input}
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