/// <reference types="@jest/globals" />

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import App from '../app';

test('should display 404 page on an invalid route', () => {
  const mockRoute = '/nothing';
  render(
    <MemoryRouter initialEntries={[mockRoute]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
});
