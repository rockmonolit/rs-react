import React, { useRef } from 'react';

export type FormProps = {
  input: string;
};

class Form extends React.Component<unknown, FormProps> {
  private nameInput: React.RefObject<HTMLInputElement>;
  private dateInput: React.RefObject<HTMLInputElement>;
  private checkInput: React.RefObject<HTMLInputElement>;
  private radioInput: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.checkInput = React.createRef();
    this.radioInput = React.createRef();
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    if (this.nameInput.current) {
      console.log('Submitted: ' + this.nameInput.current.value);
      event.preventDefault();
    }
  };

  render() {
    return (
      <form className='formContent' onSubmit={this.handleSubmit}>
        <label className='formField'>
          Name:
          <input type="text" ref={this.nameInput} />
        </label>
        <label className='formField'>
          Date of creation:
          <input type="date" ref={this.dateInput} />
        </label>
        <label className='formField'>
          Do you have a weapon:
          <input type='checkbox' ref={this.checkInput} />
        </label>
        <label className='formField'>
          Which side do you prefer:
          <input type='radio' ref={this.radioInput} />
        </label>
        <input className='button' type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
