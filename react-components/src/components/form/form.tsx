import React, { useState } from 'react';
//import { useForm } from 'react-hook-form';
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

function Form() {
  //const [formRef, setFormRef] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [checkInput, setCheckInput] = useState(false);
  const [radioInput, setRadioInput] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [fileInput, setFileInput] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    date: '',
    weapon: '',
    side: '',
    planet: '',
    photo: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cards, setCards] = useState([] as FormCardProps[]);

  const clearForm = function () {
    setNameInput('');
    setDateInput('');
    setCheckInput(false);
    setRadioInput('');
    setSelectInput('');
    setFileInput('');
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newCard: FormCardProps = {
      name: nameInput || '',
      date: dateInput || '',
      hasWeapon: checkInput || false,
      preferredSide: radioInput || '',
      homePlanet: selectInput || '',
      picture: convertPictureName(fileInput),
    };

    const validationResult = validation(newCard);

    if (validation(newCard) === 'true') {
      setCards([...cards, newCard]);
      clearForm();
      //formRef.current?.reset();
      setIsSubmitted(true);
      setErrors({ name: '', date: '', weapon: '', side: '', planet: '', photo: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } else if (validationResult !== 'true') {
      setErrors(validationResult);
    }
  };

  return (
    <>
      {isSubmitted ? <FormModal /> : ''}
      <div className="formContainer">
        <form className="formContent" onSubmit={handleSubmit} name="formRef">
          <label className="formField">
            Name:
            <input
              type="text"
              placeholder="What is your cool name?"
              name="nameInput"
              value={nameInput}
              onChange={(event) => setNameInput(event.target.value)}
            />
            {errors.name && <span className="errorText">{errors.name}</span>}
          </label>

          <label className="formField">
            Date of creation:
            <input
              type="date"
              placeholder="When are you created?"
              name="dateInput"
              value={dateInput}
              onChange={(event) => setDateInput(event.target.value)}
            />
            {errors.date && <span className="errorText">{errors.date}</span>}
          </label>

          <label className="formField">
            Do you have a weapon:
            <input
              type="checkbox"
              name="checkInput"
              checked={checkInput}
              onChange={(event) => setCheckInput(event.target.checked)}
            />
            {errors.weapon && <span className="errorText">{errors.weapon}</span>}
          </label>

          <div className="formField">
            Which side do you prefer:
            <div className="radioOptions">
              <label>
                <input
                  type="radio"
                  name="radioCheck"
                  value="Autobot"
                  checked={radioInput === 'Autobot'}
                  onChange={(event) => setRadioInput(event.target.value)}
                />
                Autobot
              </label>
              <label>
                <input
                  type="radio"
                  name="radioCheck"
                  value="Decepticon"
                  checked={radioInput === 'Decepticon'}
                  onChange={(event) => setRadioInput(event.target.value)}
                />
                Decepticon
              </label>
            </div>
            {errors.side && <span className="errorText">{errors.side}</span>}
          </div>

          <label className="formField">
            Your home planet:
            <select
              name="selectInput"
              defaultValue=""
              placeholder="Select your home planet"
              autoComplete="off"
              onChange={(event) => setSelectInput(event.target.value)}
            >
              <option disabled={true} value="">
                --Select your home planet--
              </option>
              <option value="Akalo">Akalo</option>
              <option value="Ceti Alpha Seven">Ceti Alpha Seven</option>
              <option value="Delta Pavonis IV">Delta Pavonis IV</option>
              <option value="Gigantion">Gigantion</option>
            </select>
            {errors.planet && <span className="errorText">{errors.planet}</span>}
          </label>

          <div className="fileInputContest">
            <label className="formField fileUpload">
              Upload Your Coolest Holography:
              <input
                type="file"
                name="fileInput"
                accept="image/png, image/gif, image/jpeg"
                value={fileInput}
                onChange={(event) => setFileInput(event.target.value)}
              />
            </label>
            {errors.photo && <span className="errorText">{errors.photo}</span>}
          </div>

          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
      <div className="cardsContainer formCardsContainer">
        {cards.map((data, index) => (
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

export default Form;
