import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import FormCard from '../components/formCard/formCard';

const mockedFormCard = {
  name: 'test name',
  date: 'test date',
  hasWeapon: true,
  preferredSide: 'test preferred side',
  homePlanet: 'test planet',
  picture: 'test picture path',
};

test('card component should contain provided info', () => {
  render(
    <FormCard
      name={mockedFormCard.name}
      date={mockedFormCard.date}
      hasWeapon={mockedFormCard.hasWeapon}
      preferredSide={mockedFormCard.preferredSide}
      homePlanet={mockedFormCard.homePlanet}
      picture={mockedFormCard.picture}
    />
  );
  const testText = screen.getByText(/test name/i);
  expect(testText).toBeInTheDocument();
});
