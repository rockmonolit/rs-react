import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Card from '../components/card/card';
import { mockedCard } from '../mocks/mockData';

import { Provider } from 'react-redux';
import { store } from '../store/store';

test('card component should contain provided info', () => {
  render(
    <Provider store={store}>
      <Card {...mockedCard} />
    </Provider>
  );
  const testText = screen.getByText(/test name/i);
  expect(testText).toBeInTheDocument();
});

test('should make api call', async () => {
  render(
    <Provider store={store}>
      <Card {...mockedCard} />
    </Provider>
  );
  await userEvent.click(screen.getByText(/Species/i));
  expect(await screen.findByText(/test gender/i)).toBeInTheDocument();
});
