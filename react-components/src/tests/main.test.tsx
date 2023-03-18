import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import MainPage from '../components/main';

test("main page should contain it's title", () => {
  render(<MainPage />);
  const mainPageTitle = screen.getByText(/Main Page/i);
  expect(mainPageTitle).toBeInTheDocument();
});
