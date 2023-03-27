import React, { createRef } from 'react';
import { FormCardProps } from '../formCard/formCard';
import FormCard from '../formCard/formCard';
import FormModal from '../formPage/formModal';
import { convertPictureName } from '../../helpers/convertPictureName';
import { validation } from '../../helpers/validations';

export type Errors = {
  name: string;
  date: string;
  weapon: string;
  side: string;
  planet: string;
  photo: string;
};

export type FormState = {
  cards: FormCardProps[];
  errorMessages: Errors;
  isSubmitted: boolean;
};

class Form extends React.Component<unknown, FormState> {
  formRef: React.RefObject<HTMLFormElement> = createRef();
  nameInput: React.RefObject<HTMLInputElement> = createRef();
  dateInput: React.RefObject<HTMLInputElement> = createRef();
  checkInput: React.RefObject<HTMLInputElement> = createRef();
  radioInputAutobot: React.RefObject<HTMLInputElement> = createRef();
  radioInputDecepticon: React.RefObject<HTMLInputElement> = createRef();
  selectInput: React.RefObject<HTMLSelectElement> = createRef();
  fileInput: React.RefObject<HTMLInputElement> = createRef();

  constructor(props: FormState) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      cards: [],
      errorMessages: { name: '', date: '', weapon: '', side: '', planet: '', photo: '' },
      isSubmitted: false,
    };
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newCard: FormCardProps = {
      name: this.nameInput.current?.value || '',
      date: this.dateInput.current?.value || '',
      hasWeapon: this.checkInput.current?.checked || false,
      preferredSide: this.radioInputAutobot.current?.checked
        ? this.radioInputAutobot.current.value
        : this.radioInputDecepticon.current?.checked
        ? this.radioInputDecepticon.current.value
        : '',
      homePlanet: this.selectInput.current?.value || '',
      picture: convertPictureName(this.fileInput.current?.value),
    };

    const validationResult = validation(newCard);

    if (validation(newCard) === 'true') {
      this.setState({ cards: [...this.state.cards, newCard] });
      this.formRef.current?.reset();
      this.setState({ isSubmitted: true });
      this.setState({
        errorMessages: { name: '', date: '', weapon: '', side: '', planet: '', photo: '' },
      });

      setTimeout(() => {
        this.setState({ isSubmitted: false });
      }, 3000);
    } else if (validationResult !== 'true') {
      this.setState({ errorMessages: validationResult });
    }
  };

  render() {
    return (
      <>
        {this.state.isSubmitted ? <FormModal /> : ''}
        <div className="formContainer">
          <form className="formContent" onSubmit={this.handleSubmit} ref={this.formRef}>
            <label className="formField">
              Name:
              <input type="text" ref={this.nameInput} placeholder="What is your cool name?" />
              {this.state.errorMessages.name && (
                <span className="errorText">{this.state.errorMessages.name}</span>
              )}
            </label>

            <label className="formField">
              Date of creation:
              <input type="date" ref={this.dateInput} placeholder="When are you created?" />
              {this.state.errorMessages.date && (
                <span className="errorText">{this.state.errorMessages.date}</span>
              )}
            </label>

            <label className="formField">
              Do you have a weapon:
              <input type="checkbox" ref={this.checkInput} />
              {this.state.errorMessages.weapon && (
                <span className="errorText">{this.state.errorMessages.weapon}</span>
              )}
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
              {this.state.errorMessages.side && (
                <span className="errorText">{this.state.errorMessages.side}</span>
              )}
            </div>

            <label className="formField">
              Your home planet:
              <select
                name="selectPlanet"
                ref={this.selectInput}
                defaultValue=""
                placeholder="Select your home planet"
                autoComplete="off"
              >
                <option disabled={true} value="">
                  --Select your home planet--
                </option>
                <option value="Akalo">Akalo</option>
                <option value="Ceti Alpha Seven">Ceti Alpha Seven</option>
                <option value="Delta Pavonis IV">Delta Pavonis IV</option>
                <option value="Gigantion">Gigantion</option>
              </select>
              {this.state.errorMessages.planet && (
                <span className="errorText">{this.state.errorMessages.planet}</span>
              )}
            </label>

            <div className="fileInputContest">
              <label className="formField fileUpload">
                Upload Your Coolest Holography:
                <input type="file" ref={this.fileInput} accept="image/png, image/gif, image/jpeg" />
              </label>
              {this.state.errorMessages.photo && (
                <span className="errorText">{this.state.errorMessages.photo}</span>
              )}
            </div>

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
