import React, { createRef } from 'react';
import { FormCardProps } from '../formCard/FormCard'

export type FormProps = {
  value: string;
};

class Form extends React.Component<unknown, FormProps> {
  formRef: React.RefObject<HTMLFormElement> = createRef();
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
    this.validation = this.validation.bind(this);
    this.formRef;
    this.nameInput;
    this.dateInput;
    this.checkInput;
    this.radioInputAutobot;
    this.radioInputDecepticon;
    this.selectInput;
    this.fileInput;
  }

  validation(props: FormCardProps) {
    let errorCount = 0;

    const errorMessages = {
      name: '',
      date: '',
      side: '',
      photo: '',
    };

    if (props.name.length < 2) {
      errorMessages.name = 'Name should contain at least 2 characters.';
      errorCount++;
    }

    if (props.date.length <= 0) {
      errorMessages.name = "Don't you forget insert a date?";
      errorCount++;
    }

    if (!this.radioInputAutobot.current?.checked && !this.radioInputDecepticon.current?.checked) {
      errorMessages.side = 'Please, pick a side.';
      errorCount++;
    }

    if (!props.picture) {
      errorMessages.photo = 'Please, upload your greatest Holography.';
      errorCount++;
    }

    return errorCount === 0 ? props : errorMessages;
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    if (this.nameInput.current) {
      const inputs = {
        name: this.nameInput.current?.value,
        date: this.dateInput.current?.value,
        check: this.checkInput.current?.checked,
        radio: this.radioInputAutobot.current?.checked
          ? this.radioInputAutobot.current.value
          : this.radioInputDecepticon.current?.value,
        select: this.selectInput.current?.value,
        file: this.fileInput.current?.value,
      };
      console.log(inputs);
      this.formRef.current?.reset();
      event.preventDefault();
    }
  };

  render() {
    return (
      <div className="formContainer">
        <form className="formContent" onSubmit={this.handleSubmit} ref={this.formRef}>
          <label className="formField">
            Name:
            <input type="text" ref={this.nameInput} placeholder="What is your cool name?" />
          </label>
          <label className="formField">
            Date of creation:
            <input type="date" ref={this.dateInput} placeholder="When are you created?" />
          </label>
          <label className="formField">
            Do you have a weapon:
            <input type="checkbox" ref={this.checkInput} />
          </label>
          <div className="formField">
            Which side do you prefer:
            <div className="radioOptions">
              <label>
                <input
                  ref={this.radioInputAutobot}
                  type="radio"
                  name="radioCheck"
                  value="Autobot"
                />
                Autobot
              </label>
              <label>
                <input
                  ref={this.radioInputDecepticon}
                  type="radio"
                  name="radioCheck"
                  value="Decepticon"
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
            <input type="file" ref={this.fileInput} accept="image/png, image/gif, image/jpeg" />
          </label>
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
