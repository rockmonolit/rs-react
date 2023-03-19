import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import CardList from '../components/cardList';

test('card list component should contain at least one card component', () => {
  const { container } = render(<CardList />);
  const cards = container.getElementsByClassName('card');
  expect(cards.length).toBeGreaterThan(0);
});
