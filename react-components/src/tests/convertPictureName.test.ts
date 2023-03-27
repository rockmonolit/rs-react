import * as React from 'react';
import '@testing-library/jest-dom';

import { convertPictureName, checkFileExtension } from '../helpers/convertPictureName';

const mockFilePath = 'C:\\fakepath\\test.txt';
const mockFileName = 'test.txt';

test('should extract file name with file extension from file path', () => {
  const fileExtension = convertPictureName(mockFilePath);
  expect(fileExtension).toEqual('test.txt');
});

test('should check whether file extension is valid', () => {
  const isValidFile = checkFileExtension(mockFileName);
  expect(isValidFile).not.toBeTruthy();
});