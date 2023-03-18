import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '../components/card';

test('card component should contain provided info', () => {
  render(<Card author="test author" title="test title" description="test description" />);
  const testText = screen.getByText(/test author/i);
  expect(testText).toBeInTheDocument();
});
