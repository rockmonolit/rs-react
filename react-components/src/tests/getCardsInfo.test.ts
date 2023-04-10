import * as React from 'react';
import '@testing-library/jest-dom';

import { getCardsInfo } from '../helpers/getCardsInfo';

test('should generate specified amount of cards', () => {
  const cardsArray = getCardsInfo(5);
  expect(cardsArray.length).toEqual(5);
});