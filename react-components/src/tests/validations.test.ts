import * as React from 'react';
import '@testing-library/jest-dom';

import { startsWithCapital, isFutureDate, isDateToday } from '../helpers/validations';

const mockFileName = 'Test';
const mockDate = '2099-01-01';
const mockTodayDate = (new Date()).toString()

test('should check whether file name starts with capital letter', () => {
  const fileName = startsWithCapital(mockFileName);
  expect(fileName).toBeTruthy();
});

test('should check whether date is future date', () => {
  const date = isFutureDate(mockDate);
  expect(date).not.toBeTruthy();
});

test('should check whether date is today', () => {
  const date = isDateToday(mockTodayDate);
  expect(date).not.toBeTruthy();
});