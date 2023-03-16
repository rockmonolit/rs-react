import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ErrorPage from '../components/404';

test('error page should contain status code 404', () => {
  render(<ErrorPage />);
  const errorCode = screen.getByText(/404/i);
  expect(errorCode).toBeInTheDocument();
});
