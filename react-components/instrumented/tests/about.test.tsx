import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import App from '../app';

test('should render about us page', () => {
  const mockRoute = '/about';
  render(
    <MemoryRouter initialEntries={[mockRoute]}>
      <App />
    </MemoryRouter>
  );
  expect(
    screen.getByText(/At React, we are passionate about building robust/i)
  ).toBeInTheDocument();
});
