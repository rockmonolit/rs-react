import * as React from 'react';
import '@testing-library/jest-dom';

import { validation } from '../helpers/validations';

const mockedFormCard = {
  name: 'Name',
  date: 'test date',
  hasWeapon: true,
  preferredSide: 'test preferred side',
  homePlanet: 'test planet',
  picture: 'test.jpeg',
};

test('should return "true" if all validations pass', () => {
  const cardInfo = validation(mockedFormCard);
  expect(cardInfo).toEqual('true');
});
