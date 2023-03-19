import * as React from 'react';
import '@testing-library/jest-dom';

import { getRandomCardInfo } from '../helpers/generateCardData';

test('card info should contain author property', () => {
  const cardInfo = getRandomCardInfo();
  expect(cardInfo.author).toBeTruthy();
});
