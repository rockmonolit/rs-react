import React, { createRef } from 'react';

export type FormProps = {
  value: string;
};

class Form extends React.Component<unknown, FormProps> {
  nameInput: React.RefObject<HTMLInputElement> = createRef();
  dateInput: React.RefObject<HTMLInputElement> = createRef();
  checkInput: React.RefObject<HTMLInputElement> = createRef();
  radioInputAutobot: React.RefObject<HTMLInputElement> = createRef();
  radioInputDecepticon: React.RefObject<HTMLInputElement> = createRef();
  selectInput: React.RefObject<HTMLSelectElement> = createRef();
  fileInput: React.RefObject<HTMLInputElement> = createRef();
  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput;
    this.dateInput;
    this.checkInput;
    this.radioInputAutobot;
    this.radioInputDecepticon;
    this.selectInput;
    this.fileInput;
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    if (this.nameInput.current) {
      console.log('Submitted: ' + this.nameInput.current.value);
      event.preventDefault();
    }
  };

  render() {
    return (
      <form className="formContent" onSubmit={this.handleSubmit}>
        <label className="formField">
          Name:
          <input type="text" ref={this.nameInput} />
        </label>
        <label className="formField">
          Date of creation:
          <input type="date" ref={this.dateInput} />
        </label>
        <label className="formField">
          Do you have a weapon:
          <input type="checkbox" ref={this.checkInput} />
        </label>
        <div className="formField">
          Which side do you prefer:
          <div className="radioOptions">
            <label>
              <input ref={this.radioInputAutobot} type="radio" name="radioCheck" value="autobot" />
              Autobot
            </label>
            <label>
              <input
                ref={this.radioInputDecepticon}
                type="radio"
                name="radioCheck"
                value="decepticon"
              />
              Decepticon
            </label>
          </div>
        </div>
        <label className="formField">
          Your home planet:
          <select name="selectPlanet" ref={this.selectInput}>
            <option value="akalo">Akalo</option>
            <option value="ceti">Ceti Alpha Seven</option>
            <option value="delta">Delta Pavonis IV</option>
            <option value="gigantion">Gigantion</option>
          </select>
        </label>
        <label className="formField">
          Upload Your Coolest Holography:
          <input type="file" ref={this.fileInput} />
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
