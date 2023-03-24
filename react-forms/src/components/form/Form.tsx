import React, { createRef } from 'react';
import { FormCardProps } from '../formCard/FormCard';
import FormCard from '../formCard/FormCard';

export type FormProps = {
  cards: FormCardProps[];
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
    this.state = { cards: [] };
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
      errorMessages.date = "Don't you forget insert a date?";
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
    const props: FormCardProps = {
      name: this.nameInput.current?.value || '',
      date: this.dateInput.current?.value || '',
      hasWeapon: this.checkInput.current?.checked || false,
      preferredSide: this.radioInputAutobot.current?.checked
        ? this.radioInputAutobot.current.value
        : this.radioInputDecepticon.current?.value || '',
      homePlanet: this.selectInput.current?.value || '',
      picture: this.fileInput.current?.value || '',
    };

    if (this.nameInput.current) {
      const prevState = this.state.cards;
      prevState.push(props);
      this.setState({ cards: prevState });
      this.formRef.current?.reset();
      event.preventDefault();
    }
  };

  render() {
    return (
      <>
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
              <select name="selectPlanet" ref={this.selectInput} defaultValue="">
                <option value="Akalo">Akalo</option>
                <option value="Ceti Alpha Seven">Ceti Alpha Seven</option>
                <option value="Delta Pavonis IV">Delta Pavonis IV</option>
                <option value="Gigantion">Gigantion</option>
              </select>
            </label>
            <label className="formField">
              Upload Your Coolest Holography:
              <input type="file" ref={this.fileInput} accept="image/png, image/gif, image/jpeg" />
            </label>
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
        <div className="cardsContainer formCardsContainer">
          {this.state.cards.map((data, index) => (
            <FormCard
              name={data.name}
              date={data.date}
              hasWeapon={data.hasWeapon}
              preferredSide={data.preferredSide}
              homePlanet={data.homePlanet}
              picture={data.picture}
              key={index}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Form;
