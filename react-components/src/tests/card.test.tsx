import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '../components/card';

const mockedCard = { author: 'test author', title: 'test title', description: 'test description' };

test('card component should contain provided info', () => {
  render(<Card author={mockedCard.author} title={mockedCard.title} description={mockedCard.description} />);
  const testText = screen.getByText(/test author/i);
  expect(testText).toBeInTheDocument();
});
