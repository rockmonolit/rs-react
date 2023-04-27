/// <reference types="@jest/globals" />
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { server } from '../mocks/server';
import { afterAll, afterEach, beforeAll } from '@jest/globals';
import 'whatwg-fetch';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
