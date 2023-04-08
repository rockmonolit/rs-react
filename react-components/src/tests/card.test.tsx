import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Card from '../components/card/card';

const mockedCard = {
  id: 1,
  name: 'test name',
  status: 'test status',
  species: 'test species',
  type: 'test type',
  gender: 'test gender',
  origin: {
    name: 'test origin name',
    url: 'test origin url',
  },
  location: {
    name: 'test location name',
    url: 'test location url',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/232.jpeg',
  episode: ['test episode one', 'test episode two'],
  url: 'test url',
  created: 'test created',
};

test('card component should contain provided info', () => {
  render(<Card {...mockedCard} />);
  const testText = screen.getByText(/test name/i);
  expect(testText).toBeInTheDocument();
});

test('should make api call', async () => {
  render(<Card {...mockedCard} />);
  await userEvent.click(screen.getByText(/Species/i));
  expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();
});
