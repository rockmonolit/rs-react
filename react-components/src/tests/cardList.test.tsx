import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import CardList from '../components/cardList';

const mockedCardList = [
  {
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
  },
];

test('card list component should contain at least one card component', () => {
  const { container } = render(<CardList cards={mockedCardList} />);
  const cards = container.getElementsByClassName('card');
  expect(cards.length).toBeGreaterThan(0);
});
