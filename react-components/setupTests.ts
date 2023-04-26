import '@testing-library/jest-dom/extend-expect';
import { server } from './src/mocks/server';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { afterAll, afterEach, beforeAll } from 'vitest';
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
