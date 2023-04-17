import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import MainPage from '../components/main';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('should render main page component with cards', async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="*" element={<MainPage />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
  expect(screen.getByText('Main Page')).toBeInTheDocument();
  await userEvent.type(screen.getByPlaceholderText(/Enter Text Here/i), 'rick');
  expect(screen.getByDisplayValue('rick')).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: /Search/i }));
  expect(await screen.findByText(/Morty Smith/i)).toBeInTheDocument();
});
