import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormCardProps, NewFormCardProps } from '../../types/types';
import FormCard from '../formCard/formCard';
import FormModal from '../formPage/formModal';
import { startsWithCapital, isFutureDate, isPictureFormatValid } from '../../helpers/validations';

import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { addFormCard } from '../../slices/formCardSlice';

function Form() {
  const createdCards = useSelector((state: RootState) => state.formCards.formCards);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      date: '',
      hasWeapon: false,
      preferredSide: '',
      homePlanet: '',
      picture: [] as File[],
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  //const [cards, setCards] = useState<FormCardProps[]>([]);

  const onSubmit = (data: NewFormCardProps) => {
    const newCard: FormCardProps = {
      name: data.name,
      date: data.date,
      hasWeapon: data.hasWeapon,
      preferredSide: data.preferredSide,
      homePlanet: data.homePlanet,
      picture: data.picture[0].name,
    };

    dispatch(addFormCard(newCard));

    //setCards([...cards, newCard]);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);

    reset();
  };

  return (
    <>
      {isSubmitted && <FormModal />}
      <div className="formContainer">
        <form className="formContent" onSubmit={handleSubmit(onSubmit)} name="formRef">
          <label className="formField">
            Name:
            <input
              type="text"
              placeholder="What is your cool name?"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is absolutely required!',
                },
                minLength: {
                  value: 2,
                  message:
                    'The Name Field should contain at least 2, but no more than 12 characters.',
                },
                maxLength: {
                  value: 12,
                  message:
                    'The Name Field should contain at least 2, but no more than 12 characters.',
                },
                pattern: {
                  value: /^[a-zA-Z]+$/i,
                  message: 'Excuse-moi, but only Latin letters are allowed here.',
                },
                validate: (value) => startsWithCapital(value),
              })}
            />
            {errors.name && errors.name.type === 'required' && (
              <p className="errorText">{errors.name.message}</p>
            )}
            {errors.name &&
              (errors.name.type === 'minLength' || errors.name.type === 'maxLength') && (
                <p className="errorText">{errors.name.message}</p>
              )}
            {errors.name && errors.name.type === 'pattern' && (
              <p className="errorText">{errors.name.message}</p>
            )}
            {errors.name && errors.name.type === 'validate' && (
              <p className="errorText">
                Do you remember, that your name starts with capital letter?
              </p>
            )}
          </label>

          <label className="formField">
            Date of creation:
            <input
              type="date"
              {...register('date', {
                required: {
                  value: true,
                  message: "Don't you forget insert a date?",
                },
                pattern: {
                  value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
                  message: 'Absolutely invalid date format!',
                },
                validate: (value) => isFutureDate(value),
              })}
              placeholder="When are you created?"
            />
            {errors.date && errors.date.type === 'required' && (
              <p className="errorText">{errors.date.message}</p>
            )}
            {errors.date && errors.date.type === 'pattern' && (
              <p className="errorText">{errors.date.message}</p>
            )}
            {errors.date && errors.date.type === 'validate' && (
              <p className="errorText">Are you sure that you are from the future?</p>
            )}
          </label>

          <label className="formField">
            Do you have a weapon:
            <input
              type="checkbox"
              {...register('hasWeapon', {
                required: {
                  value: true,
                  message: 'Liar! Each and every cool transformer has a weapon!',
                },
              })}
            />
            {errors.hasWeapon && errors.hasWeapon.type === 'required' && (
              <p className="errorText">{errors.hasWeapon.message}</p>
            )}
          </label>

          <div className="formField">
            Which side do you prefer:
            <div className="radioOptions">
              <label>
                <input
                  type="radio"
                  {...register('preferredSide', { required: true })}
                  value="Autobot"
                />
                Autobot
              </label>
              <label>
                <input
                  type="radio"
                  {...register('preferredSide', {
                    required: {
                      value: true,
                      message: "It's time to choose a side!",
                    },
                  })}
                  value="Decepticon"
                />
                Decepticon
              </label>
            </div>
            {errors.preferredSide && errors.preferredSide.type === 'required' && (
              <p className="errorText">{errors.preferredSide.message}</p>
            )}
          </div>

          <label className="formField">
            Your home planet:
            <select
              {...register('homePlanet', {
                required: true,
              })}
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
                  required: {
                    value: true,
                    message: 'Upload your coolest Holography!',
                  },
                  validate: (value) => isPictureFormatValid(value),
                })}
                accept="image/png, image/gif, image/jpeg"
              />
            </label>
            {errors.picture && errors.picture.type === 'required' && (
              <p className="errorText">{errors.picture.message}</p>
            )}
            {errors.picture && errors.picture.type === 'validate' && (
              <p className="errorText">Only gif/jpeg/jpg/png files are allowed.</p>
            )}
          </div>

          <input className="button" type="submit" value="Submit" />
        </form>
      </div>

      <div className="cardsContainer formCardsContainer">
        {createdCards.map((data, index) => (
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
