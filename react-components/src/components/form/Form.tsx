import React, { createRef } from 'react';
import { FormCardProps } from '../formCard/formCard';
import FormCard from '../formCard/formCard';
import FormModal from '../formPage/formModal';
import { convertPictureName, checkFileExtension } from '../../helpers/convertPictureName';

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
    this.validation = this.validation.bind(this);
    this.state = {
      cards: [],
      errorMessages: { name: '', date: '', weapon: '', side: '', planet: '', photo: '' },
      isSubmitted: false,
    };
  }

  validation(props: FormCardProps) {
    let errorCount = 0;

    const errors = { name: '', date: '', weapon: '', side: '', planet: '', photo: '' };

    if (props.name.length < 2 || props.name.length > 12) {
      const prevError = errors.name;
      errors.name =
        prevError + 'The Name Field should contain at least 2, but no more than 12 characters.\n';
      errorCount++;
    }

    if (props.name && !props.name.match(/^[a-zA-Z]+$/)) {
      const prevError = errors.name;
      errors.name = prevError + 'Excuse-moi, but only Latin letters are allowed here.\n';
      errorCount++;
    }

    if (props.name && !props.name[0].match(/^[A-Z]+$/)) {
      const prevError = errors.name;
      errors.name = prevError + 'Do you remember, that your name starts with capital letter?\n';
      errorCount++;
    }

    if (props.date.length <= 0) {
      errors.date = "Don't you forget insert a date?";
      errorCount++;
    }

    if (new Date(props.date) > new Date()) {
      errors.date = 'Are you sure that you are from the future?';
      errorCount++;
    }

    if (
      new Date(props.date).getFullYear() === new Date().getFullYear() &&
      new Date(props.date).getMonth() === new Date().getMonth() &&
      new Date(props.date).getDate() === new Date().getDate()
    ) {
      errors.date = 'What does the newborn forgot around here?';
      errorCount++;
    }

    if (!props.hasWeapon) {
      errors.weapon = 'Liar! Each and every cool transformer has a weapon!';
      errorCount++;
    }

    if (!this.radioInputAutobot.current?.checked && !this.radioInputDecepticon.current?.checked) {
      errors.side = 'Please, pick a side.';
      errorCount++;
    }

    if (!this.selectInput.current?.value) {
      errors.planet = "Don't forget to choose a planet.";
      errorCount++;
    }

    if (!props.picture) {
      errors.photo = 'Please, upload your greatest Holography.';
      errorCount++;
    }

    if (props.picture && checkFileExtension(props.picture) === false) {
      errors.photo = 'Only gif/jpeg/png files are allowed.';
      errorCount++;
    }

    this.setState({ errorMessages: errors });

    return errorCount === 0;
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newCard: FormCardProps = {
      name: this.nameInput.current?.value || '',
      date: this.dateInput.current?.value || '',
      hasWeapon: this.checkInput.current?.checked || false,
      preferredSide: this.radioInputAutobot.current?.checked
        ? this.radioInputAutobot.current.value
        : this.radioInputDecepticon.current?.value || '',
      homePlanet: this.selectInput.current?.value || '',
      picture: convertPictureName(this.fileInput.current?.value),
    };

    if (this.validation(newCard)) {
      this.setState({ cards: [...this.state.cards, newCard] });
      this.formRef.current?.reset();
      this.setState({ isSubmitted: true });

      setTimeout(() => {
        this.setState({ isSubmitted: false });
      }, 3000);
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
