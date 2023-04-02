import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';

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
