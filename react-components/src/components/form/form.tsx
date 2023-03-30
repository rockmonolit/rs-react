import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormCardProps } from '../formCard/formCard';
import FormCard from '../formCard/formCard';
import FormModal from '../formPage/formModal';
import { convertPictureName } from '../../helpers/convertPictureName';
import { validation, startsWithCapital } from '../../helpers/validations';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      date: '',
      hasWeapon: false,
      preferredSide: '',
      homePlanet: '',
      picture: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const [formValues, setFormValues] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [checkInput, setCheckInput] = useState(false);
  const [radioInput, setRadioInput] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [fileInput, setFileInput] = useState('');
  const [errorso, setErrors] = useState({
    name: '',
    date: '',
    weapon: '',
    side: '',
    planet: '',
    photo: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cards, setCards] = useState([] as FormCardProps[]);

  const onSubmit = (data: FormCardProps) => {
    console.log(data);
  };

  const clearForm = function () {
    setNameInput('');
    setDateInput('');
    setCheckInput(false);
    setRadioInput('');
    setSelectInput('');
    setFileInput('');
  };

  const handleSubmits: React.FormEventHandler<HTMLFormElement> = (event) => {
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
        <form className="formContent" onSubmit={handleSubmit(onSubmit)} name="formRef">
          <label className="formField">
            Name:
            <input
              type="text"
              placeholder="What is your cool name?"
              {...register('name', {
                required: true,
                minLength: 2,
                maxLength: 12,
                pattern: /^[a-zA-Z]+$/i,
              })}
              //name="nameInput"
              //value={nameInput}
              // onChange={(event) => setNameInput(event.target.value)}
            />
            {errors.name && errors.name.type === 'required' && (
              <p className="errorText">Name is required.</p>
            )}
            {errors.name &&
              (errors.name.type === 'minLength' || errors.name.type === 'maxLength') && (
                <p className="errorText">
                  The Name Field should contain at least 2, but no more than 12 characters.
                </p>
              )}
            {errors.name && errors.name.type === 'pattern' && (
              <p className="errorText">Excuse-moi, but only Latin letters are allowed here.</p>
            )}
          </label>

          <label className="formField">
            Date of creation:
            <input
              type="date"
              {...register('date', {
                required: true,
                pattern: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
              })}
              placeholder="When are you created?"
              // name="dateInput"
              // value={dateInput}
              // onChange={(event) => setDateInput(event.target.value)}
            />
            {/* {errorso.date && <span className="errorText">{errorso.date}</span>} */}
            {errors.date && errors.date.type === 'required' && (
              <p className="errorText">Don't you forget insert a date?</p>
            )}
            {errors.date && errors.date.type === 'pattern' && (
              <p className="errorText">Absolutely invalid date format!</p>
            )}
          </label>

          <label className="formField">
            Do you have a weapon:
            <input
              type="checkbox"
              {...register('hasWeapon', {
                required: true,
              })}
              //name="checkInput"
              //checked={checkInput}
              //onChange={(event) => setCheckInput(event.target.checked)}
            />
            {errors.hasWeapon && errors.hasWeapon.type === 'required' && (
              <p className="errorText">Liar! Each and every cool transformer has a weapon!</p>
            )}
          </label>

          <div className="formField">
            Which side do you prefer:
            <div className="radioOptions">
              <label>
                <input
                  type="radio"
                  {...register('preferredSide', { required: true })}
                  //name="radioCheck"
                  // value="Autobot"
                  //checked={radioInput === 'Autobot'}
                  //onChange={(event) => setRadioInput(event.target.value)}
                />
                Autobot
              </label>
              <label>
                <input
                  type="radio"
                  {...register('preferredSide', { required: true })}
                 // name="radioCheck"
                  //value="Decepticon"
                  //checked={radioInput === 'Decepticon'}
                  //onChange={(event) => setRadioInput(event.target.value)}
                />
                Decepticon
              </label>
            </div>
            {errors.preferredSide && errors.preferredSide.type === 'required' && (
              <p className="errorText">It's time to choose a side!</p>
            )}
          </div>

          <label className="formField">
            Your home planet:
            <select
              {...register('homePlanet', {
                required: true,
              })}
              // name="selectInput"
              defaultValue=""
              placeholder="Select your home planet"
              autoComplete="off"
              // onChange={(event) => setSelectInput(event.target.value)}
            >
              <option disabled={true} value="">
                --Select your home planet--
              </option>
              <option value="Akalo">Akalo</option>
              <option value="Ceti Alpha Seven">Ceti Alpha Seven</option>
              <option value="Delta Pavonis IV">Delta Pavonis IV</option>
              <option value="Gigantion">Gigantion</option>
            </select>
            {errors.homePlanet && errors.homePlanet.type === 'required' && (
              <p className="errorText">Please, choose your planet.</p>
            )}
          </label>

          <div className="fileInputContest">
            <label className="formField fileUpload">
              Upload Your Coolest Holography:
              <input
                type="file"
                {...register('picture', {
                  required: true,
                })}
                //name="fileInput"
                accept="image/png, image/gif, image/jpeg"
                // value={fileInput}
                // onChange={(event) => setFileInput(event.target.value)}
              />
            </label>
            {errors.picture && errors.picture.type === 'required' && (
              <p className="errorText">Upload your coolest Holography!</p>
            )}
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
