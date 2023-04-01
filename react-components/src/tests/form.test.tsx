import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from '../components/form/form';

test('should render form component', () => {
  const { container } = render(<Form />);

  expect(screen.getByRole('checkbox')).toBeInTheDocument();
  expect(screen.getByLabelText('Autobot')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByRole('combobox')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();

  const planetOptions = screen.getAllByRole('option');
  expect(planetOptions).toHaveLength(5);

  const cardsContainer = container.getElementsByClassName('cardsContainer formCardsContainer');
  expect(cardsContainer).toBeTruthy();

  const radioInput: HTMLInputElement = screen.getByLabelText('Decepticon');
  expect(screen.getByLabelText('Decepticon')).not.toBeChecked();
  fireEvent.click(radioInput);
  expect(screen.getByLabelText('Decepticon')).toBeChecked();
});
