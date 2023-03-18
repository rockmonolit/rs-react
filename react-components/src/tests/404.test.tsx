import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import ErrorPage from '../components/404';
import App from '../app';

test('error page should contain status code 404', () => {
  render(<ErrorPage />);
  const errorCode = screen.getByText(/404/i);
  expect(errorCode).toBeInTheDocument();
});

test('should display 404 page on an invalid route', () => {
  const mockRoute = '/nothing';
  render(
    <MemoryRouter initialEntries={[mockRoute]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
});