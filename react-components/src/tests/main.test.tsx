import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import MainPage from '../components/main';

test('should render main page component', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
  expect(screen.getByText('Main Page')).toBeInTheDocument();
});

test('should make api call', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
  await userEvent.type(screen.getByPlaceholderText(/Enter Text Here/i), 'rick');
  await waitFor(async () => {
    userEvent.click(screen.getByRole('button', { name: /Search/i }));
    expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();
  });
});
